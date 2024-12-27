import React from 'react';

const About = () => {
  return (
    <div className="container mt-5">
      <header className="text-center mb-4">
        <h1 className="display-4 text-primary">เกี่ยวกับเรา</h1>
      </header>

      <section>
        <h2 className="text-secondary">วิทยาลัยเทคนิค</h2>
        <p>
          วิทยาลัยเทคนิคล้านนาเชียงใหม่ เป็นสถาบันที่มุ่งเน้นการสร้างบุคลากร
          ที่มีความรู้และทักษะด้านเทคโนโลยี พร้อมทั้งปลูกฝังคุณธรรมและจริยธรรม
        </p>
      </section>

      <section>
        <h2 className="text-secondary">เป้าหมายของเรา</h2>
        <p>
          เรามุ่งหวังให้บัณฑิตจากสาขา IT สามารถนำความรู้ไปพัฒนา
          เทคโนโลยีและสร้างนวัตกรรมเพื่อประโยชน์ต่อสังคม
        </p>
      </section>
    </div>
  );
};

export default About;
