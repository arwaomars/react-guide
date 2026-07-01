import React from "react";
import ContentCardList from "./ContentCardList";
import Cards from "./Cards";
import BodyCard from "./ContentCards/BodyCard";
import Introduction from "./ContentCards/Introduction";
import Section from "./ContentCards/Section";
import TitleSection from "./ContentCards/TitleSection";
import StepsSection from "./ContentCards/StepsSection";
import CodeSection from "./ContentCards/CodeSection";
import SummarySection from "./ContentCards/SummarySection";

// =========================================================
// استيراد المكونات الحية التفاعلية هنا
import Form from "./Form";

// =========================================================
// التعديل الثاني: قاموس المكونات التفاعلية (Registry)
// نربط الكلمة النصية القادمة من اللستة بالمكون الفعلي
const interactiveComponentsRegistry = {
  Form: <Form />,
};

export default function GetCards() {
  // دالة مساعدة لمعالجة الـ Introduction سواء كان نصاً عادياً أو كائناً (Object)
  const renderIntroText = (intro) => {
    if (!intro) return "";

    if (typeof intro === "string") return intro;

    // إذا كان كائناً يحتوي على نصوص مفرقة وتغميق (مثل العنصر الثاني)
    return (
      <>
        {intro.text1} <strong>{intro.boldText}</strong>
        {intro.text2} <strong>{intro.boldText2}</strong>
        {intro.text3}
      </>
    );
  };

  return (
    <div className="cards-container">
      {ContentCardList.map((cardData) => {
        return (
          <Cards key={cardData.id} title={cardData.title}>
            <BodyCard
              // 1. تمرير مكون المقدمة
              Introduction={
                <Introduction
                  introText={renderIntroText(cardData.introduction)}
                />
              }
              // 2. تمرير مكونات الأقسام بعد معالجتها برمجياً
              Sections={
                <div className="sections-wrapper">
                  {cardData.sections.map((sec) => {
                    // تحويل الكود إلى مصفوفة ليسهل عمل فانكشن ماب عليها
                    const codesArray = sec.codes
                      ? Object.values(sec.codes)
                      : [];

                    // استخراج مصفوفة الخطوات فقط من اوبجكت الستيب لـ StepsSection
                    const stepsList = sec.steps
                      ? sec.steps.map((s) => s.step)
                      : [];

                    return (
                      <Section
                        key={sec.id}
                        title={<TitleSection title={sec.heading} />}
                        steps={<StepsSection steps={stepsList} />}
                        code={
                          codesArray.length > 0 && (
                            <div className="codes-wrapper">
                              {codesArray.map((codeItem) => (
                                <CodeSection
                                  key={codeItem.id}
                                  header={codeItem.codeHeader}
                                  code={codeItem.code}
                                />
                              ))}
                            </div>
                          )
                        }
                        // مرير المكون التفاعلي إلى السكشن بشكل ديناميكي
                        // يبحث في القاموس بأعلى الملف عن الاسم المكتوب في اللستة (sec.componentName)
                        //
                        interactiveComponent={
                          interactiveComponentsRegistry[sec.componentName] ||
                          null
                        }
                      />
                    );
                  })}
                </div>
              }
              // 3. تمرير مكون الخلاصة الديناميكي
              Summary={<SummarySection summary={cardData.summaryPoints} />}
            />
          </Cards>
        );
      })}
    </div>
  );
}
