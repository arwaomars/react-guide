import "./ContentCardsStyle/StepsSection.css";
import React from "react";

export default function StepsSection({ steps }) {
  // دالة مساعدة لمعالجة النص العادي وتحويل النجوم والـ badge إلى JSX
  const parseBodyText = (text) => {
    if (!text) return null;

    // 1. فصل النص عند كلمة "مثال:" وما بعدها ليصبح في سطر منفصل كـ Badge
    // التعبير المنتظم يبحث عن كلمة "مثال:" وكل ما يأتي بعدها في النص
    const badgeRegex = /(مثال:.*)$/;
    const hasBadge = text.match(badgeRegex);

    let mainText = text;
    let badgeText = "";

    if (hasBadge) {
      badgeText = hasBadge[0]; // استخراج نص الـ badge
      mainText = text.replace(badgeRegex, "").trim(); // إزالة الـ badge من النص الأساسي
    }

    // 2. معالجة النص الأساسي للبحث عن الكلمات بين النجمتين *كلمة*
    // نستخدم التعبير المنتظم للفصل مع الحفاظ على الكلمات المحددة بالنجمتين
    const highlightRegex = /(\*[^*]+\*)/g;
    const parts = mainText.split(highlightRegex);

    return (
      <p>
        {parts.map((part, index) => {
          if (part.startsWith("*") && part.endsWith("*")) {
            // إزالة النجمتين وإضافة كلاس التمييز
            const cleanText = part.slice(1, -1);
            return (
              <span key={index} className="highlight-text">
                {cleanText}
              </span>
            );
          }
          // نص عادي
          return part;
        })}

        {/* إذا كان هناك badge، نطبعه في سطر منفصل */}
        {badgeText && (
          <>
            <br />
            <span className="example-text">{badgeText}</span>
          </>
        )}
      </p>
    );
  };

  return (
    <div className="StepSection">
      <ol className="guide-steps">
        {steps &&
          steps.map((step, index) => {
            // الفصل عند أول نقطتين رأسيتين فقط لعزل العنوان
            const colonIndex = step.indexOf(":");

            let title = "";
            let body = step;

            if (colonIndex !== -1) {
              title = step.substring(0, colonIndex).trim();
              body = step.substring(colonIndex + 1).trim();
            }

            return (
              <li key={index}>
                {title ? (
                  <>
                    <strong>{title}:</strong>
                    {parseBodyText(body)}
                  </>
                ) : (
                  parseBodyText(step)
                )}
              </li>
            );
          })}
      </ol>
    </div>
  );
}
