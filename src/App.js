import "./App.css";
import Header from "./header";
import Cards from "./cards";
import Button from "./button";

function App() {
  return (
    <div>
      <Header />
      <div className="main-content">
        <div className="cardsSide">
          <Cards
            title=" إنشاء وإعادة استخدام المكونات (Components) في React
"
          >
            {contentCard1()}
          </Cards>

          <Cards title="طرق   التنسيق (Styling) في React">
            {contentCard2()}
          </Cards>

          <Cards
            title="  تمرير البيانات واستخدام الـ Props في React
"
          >
            {contentCard3()}
          </Cards>
        </div>
        <div className="rightSide">
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
        </div>
      </div>
    </div>
  );
}

function contentCard1() {
  return (
    <div className="react-guide-container">
      <header className="guide-header">
        <blockquote className="guide-quote">
          <strong>الهدف الأساسي:</strong> كتابة الكود{" "}
          <strong>مرة واحدة فقط</strong>، وإعادة استخدامه في أي مكان داخل
          المشروع لمنع التكرار وتسهيل الصيانة.
        </blockquote>
      </header>

      <hr className="guide-divider" />

      <main className="guide-content">
        <section className="guide-section">
          <h2 className="guide-section-title">
            🛠️ المرحلة الأولى: إنشاء المكون (Creation)
          </h2>

          <ol className="guide-steps">
            <li>
              <strong>إنشاء الملف:</strong>
              <p>
                نُنشئ ملف جافاسكريبت مستقل للمكون. يبدأ اسم الملف دائماً بـ{" "}
                <span className="highlight-text">حرف كبير (PascalCase)</span>.
              </p>
              <span className="file-badge">مثال: ExternalFile.jsx</span>
            </li>

            <li>
              <strong>كتابة الدالة والتصدير (Export):</strong>
              <p>
                نكتب دالة تحمل نفس اسم الملف (تبدأ بحرف كبير)، ونضع قبلها عبارة
                التصدير:
              </p>
              <code className="code-inline">export default function</code>
            </li>

            <li>
              <strong>إرجاع واجهة المستخدم (Return JSX):</strong>
              <p>
                نستخدم أمر <code class="code-inline">return ( )</code> وبداخله
                نكتب عناصر الـ HTML (الـ JSX).
              </p>
            </li>
          </ol>

          {/* البلوك الأول: تم استخدام الـ Backticks والـ Pre لضمان المحاذاة والأسطر */}
          <div className="code-block-wrapper">
            <div className="code-block-header">
              ملف المكون: ExternalFile.jsx
            </div>
            <pre dir="ltr">
              <code>
                {`export default function ExternalFile() {
  return (
    <div className="component-box">
      <h2>هذا مكون خارجي معاد استخدامه!</h2>
    </div>
  );
}`}
              </code>
            </pre>
          </div>
        </section>

        <section className="guide-section">
          <h2 className="guide-section-title">
            🚀 المرحلة الثانية: استدعاء واستخدام المكون (Import & Use)
          </h2>

          <ol className="guide-steps" start={4}>
            <li>
              <strong>الاستيراد (Import):</strong>
              <p>
                في أعلى الملف المراد العرض فيه، نستدعي المكون بالإشارة إلى
                مساره:
              </p>
              <pre className="code-block-single" dir="ltr">
                <code>{`import ExternalFile from "./ExternalFile";`}</code>
              </pre>
            </li>

            <li>
              <strong>الاستخدام داخل الـ JSX:</strong>
              <p>
                نكتب اسم المكون كأنه وسم HTML{" "}
                <span className="highlight-text">ذاتي الإغلاق</span>:
              </p>
              <pre className="code-block-single" dir="ltr">
                <code>{`<ExternalFile />`}</code>
              </pre>
            </li>
          </ol>

          {/* البلوك الثاني: مرتب في أسطر منفصلة وواضحة */}
          <div className="code-block-wrapper">
            <div className="code-block-header">ملف العرض الرئيسي: App.jsx</div>
            <pre dir="ltr">
              <code>
                {`import ExternalFile from "./ExternalFile"; // 1. الاستيراد

function App() {
  return (
    <div>
      <h1>الصفحة الرئيسية</h1>
      
      {/* 2. الاستخدام وإعادة الاستخدام بكل سهولة */}
      <ExternalFile />
      <ExternalFile />
    </div>
  );
}

export default App;`}
              </code>
            </pre>
          </div>
        </section>
      </main>

      <footer className="guide-footer">
        <div className="reminder-card">
          <h3>💡الخلاصة :</h3>
          <ul>
            <li>
              <strong>Capitalize:</strong> الاسم يبدأ دائماً بحرف كبير (للملف
              والدالة).
            </li>
            <li>
              <strong>Export:</strong> صدّر الدالة بـ{" "}
              <code>export default</code>.
            </li>
            <li>
              <strong>Import:</strong> استوردها في الأعلى واكتبها كـ وسم{" "}
              <code>&lt;Component /&gt;</code>.
            </li>
          </ul>
        </div>
      </footer>
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
