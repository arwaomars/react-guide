import "./ContentCardsStyle/CodeSection.css";

export default function CodeSection({ header, code }) {
  return (
    <div className="code-block-wrapper">
      <div className="code-block-header">{header || "header"}</div>
      <pre dir="ltr">
        <code> {code || "code"}</code>
      </pre>
    </div>
  );
}
