import React from 'react';

const Courses = () => {
  const courses = [
    { name: 'ปวช. สาขาเทคโนโลยีสารสนเทศ', description: 'หลักสูตร 3 ปี เน้นพื้นฐานเทคโนโลยีและการเขียนโปรแกรม' },
    { name: 'ปวส. สาขาเทคโนโลยีสารสนเทศ', description: 'หลักสูตร 2 ปี สำหรับพัฒนาทักษะเฉพาะด้าน IT' },
    { name: 'การพัฒนาเว็บแอปพลิเคชัน', description: 'อบรมระยะสั้นสำหรับนักพัฒนาที่ต้องการอัปเกรดความรู้' },
  ];

  return (
    <div className="container mt-5">
      <header className="text-center mb-4">
        <h1 className="display-4 text-primary">หลักสูตรของเรา</h1>
      </header>

      <section>
        <div className="row">
          {courses.map((course, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 shadow">
                <div className="card-body">
                  <h5 className="card-title">{course.name}</h5>
                  <p className="card-text">{course.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Courses;
