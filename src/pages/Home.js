import React from 'react';

const Home = () => {
  return (
    <div className="container mt-5">
      {/* Header Section */}
      <header className="text-center mb-4">
        <h1 className="display-4 text-primary">ยินดีต้อนรับสู่สาขาของเรา</h1>
        <p className="lead text-muted">
          “ปรัชญาของสาขา: การสร้างอนาคตที่ดีผ่านความรู้และคุณธรรม”
        </p>
      </header>

      {/* Content Section */}
      <section className="mb-5">
        <h2 className="text-secondary">ข้อมูลทั่วไปของสาขา</h2>
        <p>
          สาขาของเรามุ่งเน้นการพัฒนาทักษะและความรู้ในด้านต่าง ๆ พร้อมสนับสนุน
          การเรียนรู้ที่สร้างสรรค์และยั่งยืน
        </p>
      </section>

      {/* Gallery Section */}
      <section className="mb-5">
        <h2 className="text-secondary">ภาพกิจกรรมของสาขา</h2>
        <div className="row">
          <div className="col-md-4 mb-3">
            <img
              src="/images/activity1.jpg"
              alt="กิจกรรม 1"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-4 mb-3">
            <img
              src="/images/activity2.jpg"
              alt="กิจกรรม 2"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-4 mb-3">
            <img
              src="/images/activity3.jpg"
              alt="กิจกรรม 3"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="text-center text-muted">
        <p>ติดต่อเรา: example@branch.com | โทร: 012-345-6789</p>
      </footer>
    </div>
  );
};

export default Home;
