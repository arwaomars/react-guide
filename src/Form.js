import { useState } from "react";
import "./Form.css";

export default function Form() {
  const [formInputs, setFormInput] = useState({
    name: "",
    age: "0-18",
    html: false,
    css: false,
    js: false,
    gender: "",
  });

  //الرسالة التي تظهر عن ضغط زر الارسال
  const handleSubmit = (event) => {
    event.preventDefault(); // يمنع الصفحة من التحديث

    // 1. تجميع المهارات الناقصة
    let missingSkills = [];
    if (!formInputs.html) missingSkills.push("HTML");
    if (!formInputs.css) missingSkills.push("CSS");
    if (!formInputs.js) missingSkills.push("JS");

    // 2. هنا نحط الـ if اللي تسأل عنها (صياغة النص مع الرابط الصريح)
    let advice = "";
    if (missingSkills.length > 0) {
      // أضفنا الرابط الصريح هنا داخل النص
      advice = `ينقصك حالياً إتقان (${missingSkills.join(" و ")}) لتقفز للمستوى التالي، وموقع w3schools هو أفضل مكان للتحدي القادم عبر الرابط: https://www.w3schools.com`;
    } else {
      advice =
        "أنت جاهز تماماً لبناء مشاريعك الخاصة الآن والانطلاق في سوق العمل!";
    }

    // 3. عرض الرسالة النهائية للمستخدم بالـ alert
    alert(
      `كفو يا ${formInputs.name}!\n` +
        `خطتك القادمة جاهزة:\n` +
        `عمرك (${formInputs.age}) هو الوقت المثالي للتميز.\n\n` +
        `${advice}`,
    );
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {/* سطر الاسم */}
      <div className="form-row">
        <label htmlFor="fname" className="row-label">
          الاسم
        </label>
        <input
          type="text"
          id="fname"
          className="form-input"
          required
          value={formInputs.name}
          onChange={(event) => {
            setFormInput({ ...formInputs, name: event.target.value });
          }}
        />
      </div>

      {/* العمر */}
      <div className="form-row">
        <span className="row-label">العمر:</span>
        <select
          value={formInputs.age}
          onChange={(event) => {
            setFormInput({ ...formInputs, age: event.target.value });
          }}
        >
          <option>0-18</option>
          <option>19-23</option>
          <option>24-30</option>
          <option>30-45</option>
          <option>+45</option>
        </select>
      </div>

      {/* سطر الجنس */}
      <div className="form-row">
        <span className="row-label">الجنس:</span>
        <div className="radio-group">
          {/* خيار أنثى */}
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={formInputs.gender === "female"}
            required /* جعل الحقل إجباري */
            onChange={(event) => {
              setFormInput({ ...formInputs, gender: event.target.value });
            }}
          />
          <label htmlFor="female">أنثى</label>

          {/* خيار ذكر */}
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={
              formInputs.gender === "male"
            } /* تعديل الشرط هنا إلى male */
            required /* جعل الحقل إجباري */
            onChange={(event) => {
              setFormInput({ ...formInputs, gender: event.target.value });
            }}
          />
          <label htmlFor="male">ذكر</label>
        </div>
      </div>

      {/* سطر اللغات */}
      <div className="form-row">
        <span className="row-label">التقنيات التي أعرفها:</span>
        <div className="checkbox-group">
          <input
            type="checkbox"
            id="html"
            value="html"
            onChange={(event) => {
              setFormInput({ ...formInputs, html: event.target.checked });
            }}
          />
          <label htmlFor="html">HTML</label>

          <input
            type="checkbox"
            id="css"
            value="css"
            onChange={(event) => {
              setFormInput({ ...formInputs, css: event.target.checked });
            }}
          />
          <label htmlFor="css">CSS</label>

          <input
            type="checkbox"
            id="js"
            value="js"
            onChange={(event) => {
              setFormInput({ ...formInputs, js: event.target.checked });
            }}
          />
          <label htmlFor="js">JS</label>
        </div>
      </div>

      {/* زر الإرسال */}
      <div className="form-row submit-row">
        <button type="submit">إرسال</button>
      </div>
    </form>
  );
}
