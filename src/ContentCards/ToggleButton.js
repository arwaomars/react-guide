import "./ContentCardsStyle/ToggleButton.css";

export default function ToggleButton({ show, onClick }) {
  return (
    <div>
      <button className="ToggleButton show" onClick={onClick}>
        <span className="material-symbols-outlined">
          {show ? "keyboard_arrow_up" : "keyboard_arrow_down"}
        </span>
      </button>
    </div>
  );
}
