import "./ContentCardsStyle/Section.css";

export default function Section({ title, steps, code }) {
  return (
    <div className="section">
      <div>{title}</div>
      <div>{steps}</div>
      <div>{code}</div>
    </div>
  );
}
