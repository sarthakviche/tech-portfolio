// Small illustrations of each project's real logic. Sample data only, labelled as such.
function Munim() {
  return (
    <figure className="panel" aria-label="Illustration: a chat message becomes a GST invoice">
      <p className="bubble">20 rods bhej do Sharma ji ko, invoice bana do</p>
      <p className="panel-tag">LLM extracts · Python calculates</p>
      <table>
        <tbody>
          <tr><td>Steel rod × 20</td><td>₹10,000.00</td></tr>
          <tr><td>CGST 9%</td><td>₹900.00</td></tr>
          <tr><td>SGST 9%</td><td>₹900.00</td></tr>
          <tr className="total"><td>Total</td><td>₹11,800.00</td></tr>
        </tbody>
      </table>
      <figcaption>Sample data</figcaption>
    </figure>
  );
}

function Relay() {
  const steps = [
    ['Extract PAN fields', 'skill', 'ALLOW'],
    ['Allocate laptop', 'connector', 'ALLOW'],
    ['Accept resignation', 'human', 'REQUIRE_HUMAN'],
    ['Change compensation', 'skill', 'DENY'],
  ];
  return (
    <figure className="panel" aria-label="Illustration: every workflow step receives a policy decision">
      <p className="panel-tag">authorize() before every step</p>
      <ul className="steps">
        {steps.map(([name, kind, d]) => (
          <li key={name}><span>{name}<small>{kind}</small></span><b data-d={d}>{d}</b></li>
        ))}
      </ul>
      <figcaption>Sample decisions</figcaption>
    </figure>
  );
}

function Sera() {
  const stages = [
    ['SEBI circular', 'Fetched from source'],
    ['Structured clauses', 'PDF to clean JSON'],
    ['Obligations', 'Reviewed by people'],
    ['Implementation tracker', 'Owners notified by email'],
  ];
  return (
    <figure className="panel" aria-label="Illustration: a circular moves through stages into tracked work">
      <p className="panel-tag">Circular to tracked work</p>
      <ol className="flow">
        {stages.map(([a, b]) => <li key={a}><strong>{a}</strong><small>{b}</small></li>)}
      </ol>
    </figure>
  );
}

export default function Visual({ slug }) {
  return { munim: <Munim />, relay: <Relay />, sera: <Sera /> }[slug];
}
