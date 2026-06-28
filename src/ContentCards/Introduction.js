import "./ContentCardsStyle/Introduction.css";

export default function Introduction({ introText }) {
  return (
    <div>
      <header>
        <blockquote className="guideIntro">{introText}</blockquote>
      </header>
    </div>
  );
}
