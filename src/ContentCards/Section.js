import "./ContentCardsStyle/Section.css";

export default function Section({ title, steps, code, interactiveComponent }) {
  return (
    <div className="section">
      <div>{title}</div>
      <div>{steps}</div>
      <div>{code}</div>

      {interactiveComponent && (
        <div className="interactive-live-demo">{interactiveComponent}</div>
      )}
    </div>
  );
}
