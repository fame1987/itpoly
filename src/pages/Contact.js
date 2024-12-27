import React from 'react';

const Contact = () => {
  return (
    <div className="container mt-5">
      <header className="text-center mb-4">
        <h1 className="display-4 text-primary">ติดต่อเรา</h1>
      </header>

      <section>
        <h2 className="text-secondary">ข้อมูลติดต่อ</h2>
        <p>โทรศัพท์: 053 213 061</p>
        <p>อีเมล: lannapoly@lannapoly.ac.th</p>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2670.495781979602!2d98.99121443698077!3d18.813684702870106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3bcb57f2cda3%3A0x5a42c69f9e85016a!2z4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LmA4LiX4LiE4LmC4LiZ4LmC4Lil4Lii4Li14LmC4Lib4Lil4Li04LmA4LiX4LiE4LiZ4Li04LiE4Lil4Liy4LiZ4LiZ4LiyIOC5gOC4iuC4teC4ouC4h-C5g-C4q-C4oeC5iA!5e0!3m2!1sth!2sth!4v1735272159056!5m2!1sth!2sth"  referrerpolicy="no-referrer-when-downgrade"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      <section className="mt-4">
        <h2 className="text-secondary">ส่งข้อความถึงเรา</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">ชื่อ</label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">อีเมล</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">ข้อความ</label>
            <textarea className="form-control" id="message" rows="4"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">ส่งข้อความ</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
