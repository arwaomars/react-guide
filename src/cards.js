import { useState } from "react";
import "./cards.css";
import ToggleButton from "./ContentCards/ToggleButton";

export default function Cards({ title, children }) {
  // 2. إنشاء متغير الحالة (افتراضياً false أي مخفي)
  const [show, setShow] = useState(false);

  // دالة لقلب الحالة عند الضغط على الزر
  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <div className="cards">
      <div className="cardTitle">
        <h3>{title || "Default Title"}</h3>

        {/* 3. نمرر الحالة الحالية والدالة للزر */}
        <ToggleButton show={show} onClick={handleToggle} />
      </div>

      {show && <div className="cardBody">{children}</div>}
    </div>
  );
}
