import "./ContentCardsStyle/BodyCard.css";

export default function BodyCard({ Introduction, Sections, Summary }) {
  return (
    <div className="body">
      <div>{Introduction}</div>
      <hr className="guide-divider" />
      <div>{Sections}</div>
      <div>{Summary}</div>
    </div>
  );
}
