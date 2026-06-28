import "./ContentCardsStyle/SummarySection.css";

export default function SummarySection({ summary }) {
  // فحص للتأكد من أن الـ summary موجودة وهي مصفوفة لتجنب الأخطاء البرمجية
  if (!summary || !Array.isArray(summary)) return null;

  return (
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
          {summary.map((point, index) => {
            // فحص ما إذا كان النص يحتوي على نقطتين رأسيتين ":"
            if (point.includes(":")) {
              // تقسيم النص إلى جزأين: الكلمة الأولى (مع ما قبل النقطتين) وباقي النص
              const indexOfTheFirstColon = point.indexOf(":");
              const firstPart = point.substring(0, indexOfTheFirstColon + 1); // تشمل النقطتين الرأسيتين
              const secondPart = point.substring(indexOfTheFirstColon + 1);

              return (
                <li key={index}>
                  <strong>{firstPart}</strong>
                  {secondPart}
                </li>
              );
            }

            // إذا لم يحتوي النص على نقطتين رأسيتين، يعرض النص بشكل عادي
            return <li key={index}>{point}</li>;
          })}
        </ul>
      </div>
    </footer>
  );
}
