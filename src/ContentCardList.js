export const ContentCardList = [
  {
    id: 1,
    title: "إنشاء وإعادة استخدام (Components) في React",
    introduction:
      "الهدف الأساسي: كتابة الكود مرة واحدة فقط، وإعادة استخدامه في أي مكان داخل المشروع لمنع التكرار وتسهيل الصيانة.",
    sections: [
      {
        id: "sec1",
        heading: "🛠️ المرحلة الأولى: إنشاء المكون (Creation)",
        steps: [
          {
            id: "1-sec1-step1",
            step: "إنشاء الملف: نُنشئ ملف جافاسكريبت مستقل للمكون. يبدأ اسم الملف دائماً بـ حرف كبير (PascalCase). (مثال: ExternalFile.jsx)",
          },
          {
            id: "1-sec1-step2",
            step: "كتابة الدالة والتصدير (Export): نكتب دالة تحمل نفس اسم الملف (تبدأ بحرف كبير)، ونضع قبلها عبارة التصدير: export default function",
          },
          {
            id: "1-sec1-step3",
            step: "إرجاع واجهة المستخدم (Return JSX): نستخدم أمر return ( ) وبداخله نكتب عناصر الـ HTML (الـ JSX).",
          },
        ],
        codes: {
          code1: {
            id: "1-sec1-code1",
            codeHeader: "ملف المكون: ExternalFile.jsx",
            code: `export default function ExternalFile() {
  return (
    <div className="component-box">
      <h2>هذا مكون خارجي معاد استخدامه!</h2>
    </div>
  );
}`,
          },
        },
      },
      {
        id: "sec2",
        heading: "🚀 المرحلة الثانية: استدعاء واستخدام المكون (Import & Use)",
        steps: [
          {
            id: "1-sec2-step1",
            step: "الاستيراد (Import): في أعلى الملف المراد العرض فيه، نستدعي المكون بالإشارة إلى مساره: import ExternalFile from './ExternalFile';",
          },
          {
            id: "1-sec2-step1",
            step: "الاستخدام داخل الـ JSX: نكتب اسم المكون كأنه وسم HTML ذاتي الإغلاق: <ExternalFile />",
          },
        ],
        codes: {
          code1: {
            id: "1-sec2-code1",
            codeHeader: "ملف العرض الرئيسي: App.jsx",
            code: `import ExternalFile from "./ExternalFile"; // 1. الاستيراد

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
          
export default App;`,
          },
        },
      },
    ],
    summaryPoints: [
      "Capitalize: الاسم يبدأ دائماً بحرف كبير (للملف والدالة).",
      "Export: صدّر الدالة بـ export default.",
      "Import: استوردها في الأعلى واكتبها كـ وسم <Component />.",
    ],
  },
  {
    id: 2,
    title: "طرق التنسيق (Styling) في React",
    introduction: {
      text1: "يوفر React طريقتين رئيسيتين لتنسيق العناصر: التنسيق المباشر ",
      boldText: "(Inline Styles)",
      text2: " والتنسيق الشرطي ",
      boldText2: "(Conditional ClassNames)",
      text3: ".",
    },
    sections: [
      {
        id: "2-sec1",
        heading: "🎨 الطريقة الأولى: التنسيق المباشر (Inline Styles)",
        steps: [
          {
            id: "2-sec1-step1",
            step: "قاعدة CamelCase: تُكتب خصائص الـ CSS ككائنات (Objects)، ونستبدل الشرطة (-) بتحويل الحرف الأول من الكلمة الثانية إلى حرف كبير. (مثال: تحول background-color إلى backgroundColor).",
          },
          {
            id: "2-sec1-step2",
            step: "الأقواس المزدوجة: نمرر الكائن داخل خاصية الـ style بين أقواس مجعدة مزدوجة {{ }} (الأقواس الخارجية لـ React والداخلية للكائن).",
          },
        ],
        codes: {
          code1: {
            id: "2-sec1-code1",
            codeHeader: "أسلوب كائن الستايل (Style Object)",
            code: `export default function HeaderCard() {
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
}`,
          },
        },
      },
      {
        id: "2-sec2",
        heading: "⚡ الطريقة الثانية: التنسيق الشرطي (Conditional Styling)",
        // مصفوفة الخطوات بالترتيب
        steps: [
          {
            id: "2-sec2-step1",
            step: "تغيير التنسيق ديناميكياً: إذا كنت تستخدم ملف تنسيق خارجي ( App.css)، يمكنك تغيير شكل العنصر ديناميكياً بناءً على قيمة متغير أو حالة معينة باستخدام العمليات الشرطية مثل ? :.",
          },
          {
            id: "2-sec2-step2",
            step: "إعداد الكلاسات داخل ملف الـ CSS الخارجي ليتم استدعاؤها بالشرط المكتوب في المكون البرمجي.",
          },
        ],
        // كائنات الكود بالترتيب متوافقة مع الخطوات
        codes: {
          code1: {
            id: "2-sec2-code1",
            codeHeader: "تطبيق كلاسات شرطية (Conditional className)",
            code: `export default function StatusCard() {
  const x = 1; 

  return (
    /* if x = 1 "then blueBg" will applied 
    else "redBg" will applied */
    
    <div className={x === 1 ? "blueBg" : "redBg"}>
      <p>هذا العنصر يتغير لونه ديناميكياً بناءً على قيمة x</p>
    </div>
  );
}`,
          },
          code2: {
            id: "2-sec2-code2",
            codeHeader: "ملف التنسيق الخارجي المصاحب: App.css",
            code: `.blueBg {
  background-color: #007a78; /* أزرق بترولي */
}

.redBg {
  background-color: #e11d48; /* أحمر */
}`,
          },
        },
      },
    ],
    summaryPoints: [
      "التنسيق المباشر يحتاج أقواس مزدوجة وكتابة الخصائص بأسلوب camelCase.",
      "التنسيق الشرطي ممتاز للـ Themes (الوضع الداكن والفاتح) والتنبيهات (ناجح / فشل).",
    ],
  },
  {
    id: 3,
    title: "مفهوم الـ Props في React وكيفية تمرير البيانات",
    introduction:
      "الـ Props (اختصار لـ Properties) هي الطريقة التي نمرر بها البيانات من المكون الأب (Parent) إلى المكون الابن (Child) لجعله ديناميكياً وقابلاً لإعادة الاستخدام بقيم مختلفة.",
    sections: [
      {
        id: "3-sec1",
        heading: "🔑 القواعد الأساسية للـ Props",
        steps: [
          {
            id: "3-sec1-step1",
            step: "اتجاه واحد (Unidirectional): تنتقل البيانات دائماً من الأعلى إلى الأسفل (من الأب إلى الابن فقط).",
          },
          {
            id: "3-sec1-step2",
            step: "قراءة فقط (Read-Only): الـ Props غير قابلة للتعديل داخل المكون الذي يستقبلها، فالمكون الابن يقرأها فقط ولا يغير قيمتها الأصلية.",
          },
        ],
        codes: {},
      },
      {
        id: "3-sec2",
        heading: "📡 كيفية تمرير واستقبال الـ Props",
        steps: [
          {
            id: "3-sec2-step1",
            step: "في المكون الأب (App.jsx): نقوم بتمرير البيانات كـ Attributes مخصصة داخل وسم الكومبونانت.",
          },
        ],
        codes: {
          code1: {
            id: "3-sec2-code1",
            codeHeader: "1. المكون الأب (App.jsx)",
            code: `function App() {
  return (
    <div>
      {/* تمرير قيم مختلفة لنفس الكومبونانت */}
      <CourseCard title="دورة React" price="150" />
      <CourseCard title="دورة JavaScript" price="100" />
    </div>
  );
}`,
          },
          code2: {
            id: "3-sec2-code2",
            codeHeader: "2. المكون الابن (CourseCard.jsx)",
            code: `// نضع أسماء الـ props داخل أقواس مجعدة { } مباشرة في المدخلات (Destructuring)
export default function CourseCard({ title, price }) {
  return (
    <div className="course-card">
      <h3>اسم الدورة: {title}</h3>
      <p>السعر: {price} ريال</p>
    </div>
  );
}`,
          },
        },
      },
      {
        id: "3-sec3",
        heading: "📦 خاصية الـ props.children الخاصة",
        steps: [
          {
            id: "3-sec3-step1",
            step: "إذا أردت تمرير عناصر HTML كاملة، أو مكونات أخرى، أو نصوص طويلة داخل المكون (بين وسم البداية والنهاية)، فإن ريأكت يستقبلها تلقائياً تحت اسم متغير محجوز يُدعى children.",
          },
        ],
        codes: {
          code1: {
            id: "3-sec3-code1",
            codeHeader: "استخدام children في المكون الأب",
            code: `<CourseCard title="عنوان مخصص">
  <p>هذا النص الطويل يعتبر children وسيتم عرضه داخل الكارد</p>
</CourseCard>`,
          },
          code2: {
            id: "3-sec3-code2",
            codeHeader: "استقبال وعرض children في المكون الابن",
            code: `export default function CourseCard({ title, children }) {
  return (
    <div className="course-card">
      <h3>اسم الدورة: {title}</h3>
      <div className="cardBody">{children}</div>
    </div>
  );
}`,
          },
        },
      },
    ],
    summaryPoints: [
      "الـ Props تجعل المكون 'قالب فارغ' يتشكل ويتغير محتواه ديناميكياً بناءً على البيانات المرسلة له.",
      "الـ children تُستخدم لتمرير محتوى كامل (مكونات أو وسوم HTML) داخل وسم المكون نفسه.",
    ],
  },
  {
    id: 4,
    title: "عرض القوائم (List Rendering) في React",
    introduction:
      "الهدف الأساسي: تحويل مصفوفة من البيانات العادية (Arrays) إلى عناصر واجهة مستخدم (JSX) بشكل ديناميكي وتلقائي باستخدام دالة .map()، مع فهم أهمية الخاصية الفريدة key.",
    sections: [
      {
        id: "4-sec1",
        heading: "🔄 عرض المصفوفات العادية وتطبيق الـ key",
        steps: [
          {
            id: "4-sec1-step1",
            step: "استخدام دالة map: نمر على عناصر المصفوفة ونعيد وسم HTML (مثل <li>) لكل عنصر. (تنبيه: يجب دائماً إضافة خاصية *key* فريدة لكل عنصر لكي يتمكن React من تتبع العناصر وتحديثها بسرعة دون إعادة رندرة القائمة كاملة).",
          },
        ],
        codes: {
          code1: {
            id: "4-sec1-code1",
            codeHeader: "عرض مصفوفة نصوص بسيطة: CoursesList.jsx",
            code: `export default function CoursesList() {
  const courses = ["React", "JavaScript", "HTML", "CSS"];

  return (
    <div>
      <h3>قائمة الدورات المتاحة:</h3>
      <ul>
        {/* نستخدم الـ index كـ key فقط إذا كانت القائمة ثابتة ولا تتغير */}
        {courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </div>
  );
}`,
          },
        },
      },
      {
        id: "4-sec2",
        heading: "💼 عرض مصفوفة من الكائنات (Array of Objects)",
        steps: [
          {
            id: "4-sec2-step1",
            step: "التعامل مع البيانات الواقعية: في المشاريع الحقيقية تأتي البيانات كـ كائنات تحتوي على معرف فريد (id). نستخدم هذا الـ id كقيمة للـ *key* لتجنب مشاكل الأداء وعيوب الترتيب.",
          },
        ],
        codes: {
          code1: {
            id: "4-sec2-code1",
            codeHeader: "رندرة مصفوفة كائنات ديناميكية: UsersList.jsx",
            code: `export default function UsersList() {
  const users = [
    { id: 101, name: "أحمد", role: "مطور واجهات" },
    { id: 102, name: "سارة", role: "مهندسة بيانات" },
    { id: 103, name: "خالد", role: "محلل نظم" }
  ];

  return (
    <div className="users-list">
      {users.map((user) => (
        /* نستخدم الـ id الفريد القادم من البيانات كـ key */
        <div key={user.id} className="user-card">
          <h4>الاسم: {user.name}</h4>
          <p>التخصص: {user.role}</p>
        </div>
      ))}
    </div>
  );
}`,
          },
        },
      },
    ],
    summaryPoints: [
      "دالة .map(): هي الأداة الأساسية لتحويل المصفوفات البرمجية إلى عناصر واجهة مستخدم (JSX).",
      "خاصية key: إجبارية في ريأكت ومهمة جداً للأداء، وتوضع دائماً في أعلى وسم (الأب) داخل دالة الـ map.",
      "أفضل ممارسة للـ key: استخدام معرف فريد وثابت من البيانات نفسها (مثل id) وتجنب استخدام الـ index إذا كانت القائمة قابلة للحذف أو إعادة الترتيب.",
    ],
  },
  {
    id: 5,
    title: "إدارة حالة المكونات باستخدام الـ useState Hook",
    introduction:
      "الهدف الأساسي: تخزين البيانات المتغيرة داخل المكون (مثل: العداد، إظهار/إخفاء القوائم، مدخلات المستخدم)، وتحديث واجهة المستخدم (Re-render) تلقائياً بمجرد تغير هذه البيانات.",
    sections: [
      {
        id: "sec1",
        heading:
          "🛠️ المرحلة الأولى: الاستيراد والتعريف (Import & Initialization)",
        steps: [
          {
            id: "4-sec1-step1",
            step: "الاستيراد (Import): يجب استدعاء الـ Hook في أعلى الملف من مكتبة ريأكت بالشكل التالي: import { useState } from 'react';",
          },
          {
            id: "4-sec1-step2",
            step: "تفكيك المصفوفة (Destructuring): نُعرف الـ useState داخل الدالة، وتُرجع لنا قيمتين: الأولى هي المتغير الذي يحمل القيمة الحالية، والثانية هي الدالة المسؤولة عن تحديث هذه القيمة.",
          },
          {
            id: "4-sec1-step3",
            step: "القيمة الابتدائية (Initial Value): نضع القيمة الأساسية التي يبدأ بها التطبيق بين القوسين ( ) للـ useState، مثل: false أو 0 أو نص فارغ.",
          },
        ],
        codes: {
          code1: {
            id: "4-sec1-code1",
            codeHeader: "طريقة كتابة التعريف والتعامل مع الحالة",
            code: `import { useState } from "react"; // 1. استيراد الـ Hook

export default function ToggleExample() {
  // 2. التعريف: show هي القيمة الحالية، و setShow هي دالة التحديث
  // 3. القيمة الابتدائية هنا هي false (مخفي)
  const [show, setShow] = useState(false); 

  return (
    <div className="box">
      <p>الحالة الحالية هي: {show ? "ظاهر" : "مخفي"}</p>
    </div>
  );
}`,
          },
        },
      },
      {
        id: "sec2",
        heading:
          "🚀 المرحلة الثانية: التحديث وعرض التغيير (Updating State & Conditional Rendering)",
        steps: [
          {
            id: "4-sec2-step1",
            step: "ربط الدالة بحدث (Event Handler): نربط زر الماوس بحدث الضغط onClick، ونمرر له دالة تقوم باستدعاء دالة التحديث (مثل setShow) لتقوم بتغيير القيمة.",
          },
          {
            id: "4-sec2-step2",
            step: "قلب الحالة (Toggling): عند الرغبة في عمل زر يفتح ويغلق، نمرر عكس القيمة الحالية باستخدام علامة التعجب بالشكل التالي: setShow(!show).",
          },
          {
            id: "4-sec2-step3",
            step: "العرض المشروط (Conditional Rendering): نستخدم معامل الربط المنطقي && لكي نقول للـ JSX: 'إذا كانت الحالة true، قم بعرض هذا العنصر، وإذا كانت false اخفهِ'.",
          },
        ],
        codes: {
          code1: {
            id: "4-sec2-code1",
            codeHeader: "المكون الكامل: تطبيق الإظهار والإخفاء التفاعلي",
            code: `import { useState } from "react";

export default function CounterCard() {
  const [show, setShow] = useState(false);

  // دالة لتغيير الحالة عند الضغط
  const handleToggle = () => {
    setShow(!show); // تقلب الـ true إلى false والعكس
  };

  return (
    <div className="card-container">
      <h2>عنوان الكارد المتفاعل</h2>
      
      {/* ربط زر التبديل بحدث الضغط */}
      <button onClick={handleToggle}>
        {show ? "إخفاء التفاصيل ⬆️" : "إظهار التفاصيل ⬇️"}
      </button>

      {/* لن يظهر هذا الـ div إلا إذا كانت قيمة show تساوي true */}
      {show && (
        <div className="card-body">
          <p>مرحباً! هذا هو محتوى الجسم الذي يظهر ويختفي ديناميكياً باستخدام useState.</p>
        </div>
      )}
    </div>
  );
}`,
          },
        },
      },
    ],
    summaryPoints: [
      "useState: هي أداة لحفظ البيانات المتغيرة داخل المكون والتي يتسبب تغيرها في إعادة بناء الواجهة (Re-render).",
      "Array Destructuring: السطر const [state, setState] = useState(init) هو الطريقة القياسية لتعريفها.",
      "Never Mutate Directly: لا تقم بتغيير قيمة المتغير مباشرة مثل state = true، بل استخدم دائماً دالة التحديث setState(true).",
    ],
  },
  {
    id: 6,
    title: "التعامل مع الاستمارات (Forms) والمدخلات",
    introduction:
      "الهدف الأساسي: ربط حقول الإدخال بحالة المكون (State) (Controlled Components)، بحيث يتم تحديث الـ State مع كل نقرة أو كتابة.",
    sections: [
      {
        id: "6-sec1",
        heading: "📱 مثال حي",
        componentName: "Form",
        steps: [
          {
            id: "5-sec1-step1",
            step: "جرب بنفسك: قم بتعبئة النموذج أدناه واختيار التقنيات...",
          },
        ],
        codes: {},
      }, // 🛠️ هنا كان القفل الخاطئ المسبب للايرور وتم إصلاحه
      {
        id: "6-sec2",
        heading: "🏗️ تهيئة الـ State وإدارة حقل النص (Text Input)",
        steps: [
          {
            id: "6-sec2-step1",
            step: "ربط القيمة والتحديث: نربط خاصية *value* الخاصة بالـ input بمتغير من الـ State ليعرضها دائماً. ثم نستخدم حدث *onChange* لتحديث الـ State فوراً عند كتابة أي حرف باستخدام الكود الدلالي *{ ...formInputs, name: event.target.value }* للحفاظ على بقية قيم الحقول دون حذف.",
          },
        ],
        codes: {
          code1: {
            id: "6-sec2-code1",
            codeHeader: "مكون حقل النص: FormInput.jsx",
            code: `import { useState } from "react";

export default function Form() {
  const [formInputs, setFormInput] = useState({ name: "" });

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <input
        type="text"
        value={formInputs.name} // ربط القيمة بالـ State
        onChange={(event) => {
          // الحفاظ على الأوبجكت وتحديث حقل الاسم فقط
          setFormInput({ ...formInputs, name: event.target.value });
        }}
      />الاسم
    </form>
  );
}`,
          },
        },
      },
      {
        id: "6-sec3",
        heading: "🛑 معالجة إرسال البيانات (Form Submission)",
        steps: [
          {
            id: "6-sec3-step1",
            step: "إلغاء التحديث التلقائي: عند الضغط على زر الإرسال، يقوم المتصفح تلقائياً بإعادة تحميل الصفحة (Reload). لمنع هذا السلوك واستلام البيانات برمجياً، نستدعي الدالة الشهيرة *event.preventDefault()* داخل حدث الـ *onSubmit* الخاص بالفورم نفسه.",
          },
        ],
        codes: {
          code1: {
            id: "6-sec23-code1",
            codeHeader: "التحكم بحدث الإرسال: FormSubmit.jsx",
            code: `// داخل وسم الـ <form> الرئيسي
<form
  onSubmit={(event) => {
    event.preventDefault(); // منع إعادة تحميل الصفحة الافتراضية
  }}
>
  {/* محتوى الفورم وأزرار الإرسال */}
</form>`,
          },
        },
      },
    ], // إغلاق مصفوفة الـ sections بشكل سليم
    summaryPoints: [
      "Controlled Component: تعني أن قيمة الحقل (value) تأتي دائماً من الـ State وتتحدث عبر الـ onChange.",
      "قاعدة الـ Spread Operator (...): مهمة جداً عند التعامل مع Object في الـ State لتجنب مسح باقي بيانات الحقول الأخرى أثناء تحديث حقل واحد.",
      "event.preventDefault(): دالة لا غنى عنها لمنع المتصفح من إعادة تحميل الصفحة عند إرسال الـ Form.",
    ],
  },
];

export default ContentCardList;
