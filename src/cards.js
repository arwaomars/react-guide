import "./cards.css";

export default function Cards({ title, children }) {
  return (
    <div className="cards">
      <div className="cardTitle">
        <h3>{title || "Default Title"}</h3>
      </div>

      <div className="cardBody">{children}</div>
    </div>
  );
}
