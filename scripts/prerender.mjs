// Writes real HTML for every route, plus the agent-readable files, from src/content/site.js.
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
import { dirname, resolve } from 'node:path'
import { person as me, projects } from '../src/content/site.js'

// Set SITE_URL to the production domain when deploying.
const SITE = (process.env.SITE_URL || 'https://sarthakviche-tech.vercel.app').replace(/\/$/, '')
const out = (p, s) => {
  const f = resolve('dist', p)
  mkdirSync(dirname(f), { recursive: true })
  writeFileSync(f, s)
}
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
const { render } = await import(pathToFileURL(resolve('dist-ssr/entry-server.js')).href)
const tpl = readFileSync('dist/index.html', 'utf8')

const profile = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: me.name,
  jobTitle: me.role,
  description: me.status,
  email: `mailto:${me.email}`,
  url: SITE,
  sameAs: [me.github, me.linkedin, me.instagram],
  address: { '@type': 'PostalAddress', addressLocality: 'Pune', addressCountry: 'IN' },
  knowsAbout: me.stack,
  subjectOf: projects.map((p) => ({
    '@type': 'SoftwareSourceCode',
    name: p.name,
    description: p.summary,
    url: `${SITE}/work/${p.slug}`,
    programmingLanguage: p.stack,
    ...(p.links[0] && { codeRepository: p.links[0].url }),
  })),
}

const page = (url, title, desc, file) => {
  const head = `<title>${esc(title)}</title><meta name="description" content="${esc(desc)}"/><link rel="canonical" href="${SITE}${url}"/><meta property="og:title" content="${esc(title)}"/><meta property="og:description" content="${esc(desc)}"/><script type="application/ld+json">${JSON.stringify(profile).replace(/</g, '\\u003c')}</script>`
  out(file, tpl.replace('<!--head-->', () => head).replace('<!--app-->', () => render(url)))
}
page('/', `${me.name} | ${me.role}`, `${me.intro} ${me.status}.`, 'index.html')
for (const p of projects) page(`/work/${p.slug}`, `${p.name}: ${p.line} | ${me.name}`, p.summary, `work/${p.slug}/index.html`)
page('/404', `Not found | ${me.name}`, 'Page not found.', '404.html')

const md = (p) => `# ${p.name}: ${p.line}

${p.summary}

- **Space:** ${p.space}
- **Built for:** ${p.audience}
- **Type:** ${p.kind}
- **Sarthak's role:** ${p.role}
- **Status:** ${p.status}
- **Stack:** ${p.stack.join(', ')}
${p.links.map((l) => `- **${l.label}:** ${l.url}`).join('\n')}

## Problem

${p.problem}

## How it's built

${p.approach.map((a) => `### ${a.title}\n\n${a.body}`).join('\n\n')}
`
for (const p of projects) out(`work/${p.slug}.md`, md(p))

const contact = `## Contact

- Email: ${me.email}
- GitHub: ${me.github}
- LinkedIn: ${me.linkedin}
- Resume: ${me.resume}`

out('llms.txt', `# ${me.name}

> ${me.role}. ${me.status}. ${me.intro}

${me.statement}

## Projects

${projects.map((p) => `- [${p.name}](${SITE}/work/${p.slug}.md): ${p.line}`).join('\n')}

## Machine-readable

- [Everything in one file](${SITE}/llms-full.txt)
- [Structured profile (schema.org JSON)](${SITE}/profile.json)

${contact}
`)
out('llms-full.txt', `# ${me.name}\n\n${me.role}. ${me.status}. Based in ${me.location}.\n\n${me.statement}\n\n${me.about.join('\n\n')}\n\nTools: ${me.stack.join(', ')}\n\n${contact}\n\n${projects.map(md).join('\n---\n\n')}`)
out('profile.json', JSON.stringify(profile, null, 2))
out('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`)
out('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${['', ...projects.map((p) => `/work/${p.slug}`)].map((u) => `<url><loc>${SITE}${u}</loc></url>`).join('')}</urlset>\n`)
rmSync('dist-ssr', { recursive: true, force: true })
