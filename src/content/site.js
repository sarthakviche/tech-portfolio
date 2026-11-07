// Single source of truth: the React site and the agent files (llms.txt, .md, profile.json) all read this.
export const person = {
  name: 'Sarthak Viche',
  role: 'Software engineer, AI systems',
  status: 'Third-year B.Tech IT student at VIT Pune, open to tech roles',
  location: 'Pune, India',
  email: 'sarthakviche@gmail.com',
  github: 'https://github.com/sarthakviche',
  linkedin: 'https://www.linkedin.com/in/sarthakviche/',
  instagram: 'https://www.instagram.com/sarthak.viche/',
  resume: 'https://drive.google.com/file/d/1v1Hd5d-ENZFwhUv3HtthtHAw1vdoHoS4/view?usp=sharing',
  intro: 'AI systems for work that can’t afford to be wrong.',
  statement:
    'Models are good at reading messy language and bad at being accountable. So the models interpret, while the sums, the rules and the final decisions stay with code and people.',
  about: [
    'I’m a third-year Information Technology student at VIT Pune. I like problems where a mistake has a cost: a wrong tax line, an unapproved HR decision, a missed regulatory circular.',
    'Outside the terminal I shoot film and edit video. A darkroom teaches you what debugging does: change one thing, wait, look closely.',
  ],
  stack: ['Python', 'FastAPI', 'LangGraph', 'PostgreSQL', 'React', 'TypeScript', 'Next.js', 'Docker', 'SQLAlchemy', 'pytest'],
};

export const projects = [
  {
    slug: 'munim',
    frame: '01',
    name: 'Munim',
    color: '#F26B21',
    ink: '#1A0E06',
    logo: { mark: '/brand/munim-mark.png', word: '/brand/munim-wordmark.png', alt: 'Munim.ai' },
    space: 'Fintech · GST compliance for Indian small businesses',
    audience: 'Business owners and sales teams',
    solves: 'Orders arrive in casual chat, but billing has to be accurate and audit-ready.',
    does: 'Turns English or Hinglish messages into GST-compliant quotations and tax invoices, with stock and prices checked along the way.',
    kind: 'AI business agent',
    line: 'Plain-language GST invoicing for Indian small businesses.',
    summary:
      'Owners type in English or Hinglish, and Munim produces GST-compliant quotations and tax invoices, checks stock and prices, and generates branded PDFs.',
    role: 'Lead developer on a three-person team, across backend, frontend and deployment.',
    status: 'Backend tests pass locally (316 passed, 4 skipped). Staging deployment is configured but not yet live.',
    stack: ['Python', 'FastAPI', 'LangGraph', 'Gemini', 'PostgreSQL', 'Supabase', 'React', 'Vite'],
    problem:
      'Small businesses take orders in chat but must bill with audit-ready accuracy. An LLM can understand “20 rods bhej do”, but it shouldn’t be trusted to calculate tax.',
    approach: [
      {
        title: 'The model never does the maths',
        body: 'The LLM only extracts intent and entities. CGST, SGST and IGST are calculated by deterministic Python using exact Decimal arithmetic, based on supplier and customer state codes.',
      },
      {
        title: 'It still works when the model doesn’t',
        body: 'A LangGraph state graph routes each message by intent, and a rule-based regex parser takes over when the model is unavailable.',
      },
      {
        title: 'Each business’s data stays its own',
        body: 'Sign-ups create separate tenants. Automated cross-tenant isolation tests sweep new routes, and PDF downloads need auth plus an ownership check.',
      },
      {
        title: 'Stock can’t silently drift',
        body: 'Converting a quotation into an invoice decrements stock atomically, with concurrency tests running against real Postgres.',
      },
    ],
    links: [{ label: 'Source on GitHub', url: 'https://github.com/sarthakviche/m1m-business-workflow-agent' }],
  },
  {
    slug: 'relay',
    frame: '02',
    name: 'Relay',
    color: '#2F4BE8',
    ink: '#F4F3EE',
    kind: 'Governed workflow engine',
    space: 'HR tech · Governed AI workflows',
    audience: 'HR teams, managers and approvers',
    solves: 'HR work carries legal and financial risk, so handing it to an agent leaves nobody accountable.',
    does: 'Runs onboarding and exit workflows with AI agents, while people make the consequential calls and every action is policy-checked, audited and costed.',
    line: 'AI does the routine HR work. People keep the decisions that matter.',
    summary:
      'A governed HR services platform built for VoyageHack 4.0. Agents run onboarding and exit workflows, while every action is policy-checked, audited and costed in INR.',
    role: 'Co-builder on a two-person team.',
    status: 'Hackathon build in active development. The demo runs on mock TBO systems and synthetic data. Repository is private for now.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Next.js', 'TypeScript', 'Docker', 'CEL', 'Slack'],
    problem:
      'HR work is full of decisions with legal, financial and human consequences. Handing a whole workflow to an agent means nobody can say who approved what, or why.',
    approach: [
      {
        title: 'The orchestrator is never a model',
        body: 'Workflows are versioned YAML with six typed step kinds: rule, connector, skill, human, wait and parallel. The engine interprets them, and models only do bounded skill steps.',
      },
      {
        title: 'Policy runs before every action',
        body: 'Each step calls authorize() and leaves a Decision row: ALLOW, REQUIRE_HUMAN or DENY. Reserved decisions, such as accepting a resignation, can never be granted to an agent by configuration.',
      },
      {
        title: 'Crashes don’t lose work',
        body: 'Workers lease steps with FOR UPDATE SKIP LOCKED, so another worker picks up a step when a lease expires. External side effects go through an idempotency ledger.',
      },
      {
        title: 'Everything leaves evidence',
        body: 'One Postgres transaction updates the step, writes a hash-chained audit event and records its cost, so the three can’t disagree.',
      },
    ],
    links: [],
  },
  {
    slug: 'sera',
    frame: '03',
    name: 'SERA',
    color: '#06291A',
    logoFull: { src: '/brand/sera-logo.png', alt: 'SERA, Securities Engine for Regulatory Action' },
    space: 'RegTech · Securities compliance (SEBI)',
    audience: 'Compliance teams',
    solves: 'Finding, reading and acting on each new regulatory circular is slow, manual work.',
    does: 'Monitors SEBI, structures new circulars from PDF into clean data, and tracks the resulting obligations through to implementation.',
    ink: '#F4F3EE',
    kind: 'Regulatory compliance platform',
    line: 'From dense SEBI circulars to tracked compliance work.',
    summary:
      'SERA, the Securities Engine for Regulatory Action, monitors SEBI, fetches new circulars, structures their PDFs and helps compliance teams turn obligations into implementation plans.',
    role: 'Team member. Built the email notifications and the implementation tracker.',
    status: 'Team prototype with a recorded demo. Not deployed.',
    stack: ['Python', 'FastAPI', 'Playwright', 'React', 'TypeScript', 'Docker'],
    problem:
      'Compliance teams have to find each new circular, read it closely, work out what applies to them and then make sure someone acts on it. Most of that is manual.',
    approach: [
      {
        title: 'Fetch at the source',
        body: 'A Playwright scraper collects the latest circulars from SEBI’s website and downloads the PDFs.',
      },
      {
        title: 'Structure before interpreting',
        body: 'The ingestion pipeline extracts layout, headings, numbering and clauses into clean JSON before any later stage touches the text.',
      },
      {
        title: 'Close the loop',
        body: 'An implementation tracker follows obligations through to completion, and email notifications tell people when action is needed.',
      },
    ],
    links: [{ label: 'Source on GitHub', url: 'https://github.com/sarthakviche/SERA-Securities-Engine-for-Regulatory-Action' }],
  },
];
