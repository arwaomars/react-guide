import "./App.css";
import Header from "./header";
import Button from "./button";
import GetCards from "./GetCards";

function App() {
  return (
    <div>
      <Header />
      <div className="main-content">
        <div className="cardsSide">
          <GetCards />
        </div>
        <div className="rightSide">
          <Button />
          <Button />
          <Button />
          <Button />
        </div>
      </div>
    </div>
  );
}

function contentCard2() {
  return (
    <div className="react-guide-container">
      <header className="guide-header">
        <blockquote className="guide-quote">
          يوفر React طريقتين رئيسيتين لتنسيق العناصر: التنسيق المباشر{" "}
          <strong>(Inline Styles)</strong> والتنسيق الشرطي{" "}
          <strong>(Conditional ClassNames)</strong>.
        </blockquote>
      </header>

      <hr className="guide-divider" />

      <main className="guide-content">
        {/* الطريقة الأولى */}
        <section className="guide-section">
          <h2 className="guide-section-title">
            🎨 الطريقة الأولى: التنسيق المباشر (Inline Styles)
          </h2>
          <p>
            عند كتابة الستايل مباشرة داخل عنصر في React، نتبع قاعدتين أساسيتين:
          </p>

          <ol className="guide-steps">
            <li>
              <strong>قاعدة CamelCase:</strong>
              تُكتب خصائص الـ CSS ككائنات (Objects)، ونستبدل الشرطة{" "}
              <code class="code-inline">-</code> بتحويل الحرف الأول من الكلمة
              الثانية إلى حرف كبير.
              <br />
              <em>مثال:</em> تحول{" "}
              <code class="code-inline">background-color</code> إلى{" "}
              <code class="code-inline">backgroundColor</code>.
            </li>
            <li>
              <strong>الأقواس المزدوجة:</strong>
              نمرر الكائن داخل خاصية الـ <code class="code-inline">
                style
              </code>{" "}
              بين أقواس مجعدة مزدوجة <code class="code-inline">{"{{ }}"}</code>{" "}
              (الأقواس الخارجية لـ React والداخلية للكائن).
            </li>
          </ol>

          <div className="code-block-wrapper">
            <div className="code-block-header">
              أسلوب كائن الستايل (Style Object)
            </div>
            <pre dir="ltr">
              <code>
                {`export default function HeaderCard() {
  // 1. تعريف الستايل كمتغير (Object)
  const cardStyle = {
    backgroundColor: "#007a78",
    color: "#ffffff",
    padding: "20px",
    borderRadius: "8px"
  };

  // 2. تمرير المتغير إلى خاصية style
  return (
    <div style={cardStyle}>
      <h3>محتوى بتنسيق مباشر</h3>
    </div>
  );
}`}
              </code>
            </pre>
          </div>
        </section>

        {/* الطريقة الثانية */}
        <section className="guide-section">
          <h2 className="guide-section-title">
            ⚡ الطريقة الثانية: التنسيق الشرطي (Conditional Styling)
          </h2>
          <p>
            إذا كنت تستخدم ملف تنسيق خارجي (مثل{" "}
            <code class="code-inline">App.css</code>)، يمكنك تغيير شكل العنصر
            ديناميكياً بناءً على قيمة متغير أو حالة معينة (State) باستخدام
            <code class="code-inline">? :</code>.
          </p>

          <div className="code-block-wrapper">
            <div className="code-block-header">
              تطبيق كلاسات شرطية (Conditional className)
            </div>
            <pre dir="ltr">
              <code>
                {`export default function StatusCard() {
  const x = 1; 

  return (
    /* 
    if x = 1 "then blueBg" will applied 
    else "redBg" will applied */
    
    <div className={x === 1 ? "blueBg" : "redBg"}>
      <p>هذا العنصر يتغير لونه ديناميكياً بناءً على قيمة x</p>
    </div>
  );
}`}
              </code>
            </pre>
          </div>

          <div className="code-block-wrapper">
            <div className="code-block-header">
              ملف التنسيق الخارجي المصاحب: App.css
            </div>
            <pre dir="ltr">
              <code>
                {`.blueBg {
  background-color: #007a78; /* أزرق بترولي */
}

.redBg {
  background-color: #e11d48; /* أحمر */
}`}
              </code>
            </pre>
          </div>
        </section>
      </main>

      <footer className="guide-footer">
        <div
          className="reminder-card"
          style={{
            backgroundColor: "#f0fdfa",
            borderColor: "#99f6e4",
            color: "#0f766e",
          }}
        >
          <h3>💡الخلاصة :</h3>
          <ul>
            <li>
              التنسيق المباشر يحتاج أقواس مزدوجة وكتابة الخصائص بأسلوب{" "}
              <code>camelCase</code>.
            </li>
            <li>
              التنسيق الشرطي ممتاز للـ Themes (الوضع الداكن والفاتح) والتنبيهات
              (ناجح / فشل).
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

function contentCard3() {
  return (
    <div className="react-guide-container">
      <header className="guide-header">
        <blockquote className="guide-quote">
          الـ <strong>Props</strong> (اختصار لـ Properties) هي الطريقة التي نمرر
          بها البيانات من المكون الأب (Parent Component) إلى المكون الابن (Child
          Component) لجعله ديناميكياً وقابلاً لإعادة الاستخدام بقيم مختلفة.
        </blockquote>
      </header>

      <hr className="guide-divider" />

      <main className="guide-content">
        {/* المفاهيم الأساسية */}
        <section className="guide-section">
          <h2 className="guide-section-title">🔑 القواعد الأساسية للـ Props</h2>
          <ol className="guide-steps">
            <li>
              <strong>اتجاه واحد (Unidirectional):</strong> تنتقل البيانات
              دائماً من الأعلى إلى الأسفل (من الأب إلى الابن فقط).
            </li>
            <li>
              <strong>قراءة فقط (Read-Only):</strong> الـ Props غير قابلة
              للتعديل داخل المكون الذي يستقبلها، فالمكون الابن يقرأها فقط ولا
              يغير قيمتها الأصلية.
            </li>
          </ol>
        </section>

        {/* طريقة التمرير */}
        <section className="guide-section">
          <h2 className="guide-section-title">
            📡 كيفية تمرير واستقبال الـ Props
          </h2>

          <div className="code-block-wrapper">
            <div className="code-block-header">
              1. في المكون الأب (App.jsx) - نقوم بتمرير البيانات كـ Attributes
            </div>
            <pre dir="ltr">
              <code>
                {`function App() {
  return (
    <div>
      {/* تمرير قيم مختلفة لنفس الكومبونانت */}
      <CourseCard title="دورة React" price="150" />
      <CourseCard title="دورة JavaScript" price="100" />
    </div>
  );
}`}
              </code>
            </pre>
          </div>

          <div className="code-block-wrapper">
            <div className="code-block-header">
              2. في المكون الابن (CourseCard.jsx) - نستقبلها عبر التفكيك
              (Destructuring)
            </div>
            <pre dir="ltr">
              <code>
                {`// نضع أسماء الـ props داخل أقواس مجعدة { } مباشرة في المدخلات
export default function CourseCard({ title, price }) {
  return (
    <div className="course-card">
      <h3>اسم الدورة: {title}</h3>
      <p>السعر: {price} ريال</p>
    </div>
  );
}`}
              </code>
            </pre>
          </div>
        </section>

        {/* خاصية children */}
        <section className="guide-section">
          <h2 className="guide-section-title">
            📦 خاصية الـ props.children الخاصة
          </h2>
          <p>
            إذا أردت تمرير عناصر HTML كاملة، أو مكونات أخرى، أو نصوص طويلة داخل
            المكون (بين وسم البداية والنهاية)، فإن ريأكت يستقبلها تلقائياً تحت
            اسم متغير محجوز يُدعى <code class="code-inline">children</code>.
          </p>

          <div className="code-block-wrapper">
            <div className="code-block-header">
              مثال على استخدام children (وهو الأسلوب المستخدم في الكارد هذه)
            </div>
            <pre dir="ltr">
              <code>
                {`// المكون الأب يضع محتوى داخل الوسم
<Cards title="عنوان مخصص">
  <p>هذا النص الطويل يعتبر children وسيتم عرضه داخل الكارد</p>
</Cards>`}
              </code>
            </pre>
          </div>

          <div className="code-block-wrapper">
            <div className="code-block-header">
              في المكون الابن (Card.js) - نستقبلها عبر التفكيك (Destructuring)
            </div>
            <pre dir="ltr">
              <code>
                {`
export default function CourseCard({ title, children }) {
  return (
    <div className="course-card">
      <h3>اسم الدورة: {title}</h3>
      <div className="cardBody">{children}</div>
    </div>
  );
}`}
              </code>
            </pre>
          </div>
        </section>
      </main>

      <footer className="guide-footer">
        <div
          className="reminder-card"
          style={{
            backgroundColor: "#f0fdfa",
            borderColor: "#99f6e4",
            color: "#0f766e",
          }}
        >
          <h3>💡الخلاصة:</h3>
          <ul>
            <li>
              الـ Props تجعل المكون "قالب فارغ" يتشكل بناءً على البيانات المرسلة
              له.
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
