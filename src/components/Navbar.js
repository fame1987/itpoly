import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        {/* โลโก้ */}
        <Link className="navbar-brand fw-bold text-primary" to="/">
          <i className="bi bi-laptop"></i> สาขาเทคโนโลยีสารสนเทศ
        </Link>
        {/* ปุ่ม Toggle (สำหรับมือถือ) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* ลิงก์เมนู */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-dark fw-semibold" to="/">
                หน้าแรก
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark fw-semibold" to="/about">
                เกี่ยวกับเรา
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark fw-semibold" to="/courses">
                หลักสูตร
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark fw-semibold" to="/contact">
                ติดต่อเรา
              </Link>
            </li>
          </ul>
          {/* ปุ่มพิเศษ */}
          <Link
            to="/apply"
            className="btn btn-primary ms-lg-3 fw-bold px-4"
          >
            สมัครเรียน
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
