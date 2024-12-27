import React from "react";

const Home = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: "linear-gradient(to right, #6a11cb, #2575fc)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      {/* Header Section */}
      <header
        className="text-center mb-5"
        style={{
          textAlign: "center",
        }}
      >
        <h1 className="display-4 fw-bold" style={{ fontSize: "3.5rem" }}>
          ยินดีต้อนรับสู่สาขา IT
        </h1>
        <p className="lead fs-4">
          “การสร้างอนาคตที่ยั่งยืนผ่านการพัฒนาทักษะด้านเทคโนโลยีและนวัตกรรม”
        </p>
      </header>

      {/* About Section */}
      <section
        className="text-center"
        style={{
          color: "white",
          marginBottom: "50px",
          maxWidth: "800px",
          fontSize: "1.2rem",
        }}
      >
        <h2
          className="fw-bold mb-4"
          style={{ color: "#f9a825", fontSize: "2rem", textDecoration: "underline" }}
        >
          เกี่ยวกับสาขา IT
        </h2>
        <p>
          สาขา IT ของเรามุ่งเน้นการพัฒนาทักษะในด้านเทคโนโลยีสารสนเทศ การพัฒนาโปรแกรม
          และนวัตกรรมใหม่ ๆ เพื่อเตรียมความพร้อมให้นักศึกษาก้าวทันโลกดิจิทัล
        </p>
      </section>

      {/* Activities Section */}
      <section
        className="text-center"
        style={{ maxWidth: "1000px", marginBottom: "50px" }}
      >
        <h2
          className="fw-bold mb-4"
          style={{ color: "#ffeb3b", fontSize: "2rem", textDecoration: "underline" }}
        >
          ภาพกิจกรรม
        </h2>
        <div className="row g-4 justify-content-center">
          <div className="col-md-4 d-flex flex-column align-items-center">
            <img
              src="https://www.lannapoly.ac.th/web/gallery/20241227-081713.jpg"
              alt="กิจกรรม 1"
              className="rounded shadow-lg"
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "15px",
                marginBottom: "10px",
              }}
            />
            <h5 style={{ color: "#e0f7fa", fontWeight: "bold" }}>
              
            </h5>
          </div>
          <div className="col-md-4 d-flex flex-column align-items-center">
            <img
              src="https://www.lannapoly.ac.th/web/gallery/20241226-064751.jpg"
              alt="กิจกรรม 2"
              className="rounded shadow-lg"
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "15px",
                marginBottom: "10px",
              }}
            />
            <h5 style={{ color: "#e0f7fa", fontWeight: "bold" }}>
              
            </h5>
          </div>
          <div className="col-md-4 d-flex flex-column align-items-center">
            <img
              src="https://www.lannapoly.ac.th/web/gallery/20241224-045441.jpg"
              alt="กิจกรรม 3"
              className="rounded shadow-lg"
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "15px",
                marginBottom: "10px",
              }}
            />
            <h5 style={{ color: "#e0f7fa", fontWeight: "bold" }}>
              
            </h5>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="text-center"
        style={{
          maxWidth: "800px",
          marginBottom: "30px",
          padding: "20px",
          color: "white",
        }}
      >
        <h2
          className="fw-bold mb-4"
          style={{ color: "#ff5722", fontSize: "2rem", textDecoration: "underline" }}
        >
          ติดต่อเรา
        </h2>
        <p style={{ fontSize: "1.2rem" }}>
          <strong>อีเมล:</strong> lannapoly@lannapoly.ac.th | <strong>โทร:</strong>{" "}
          053 213 061
        </p>
        <p style={{ fontSize: "1.2rem" }}>
          <strong>ที่อยู่:</strong> สาขาเทคโนโลยีสารสนเทศ, เชียงใหม่
        </p>
      </section>
    </div>
  );
};

export default Home;
