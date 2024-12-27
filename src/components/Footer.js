import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white text-center py-4 mt-5">
      <div className="container">
        <p className="mb-2">&copy; {new Date().getFullYear()} สาขาเทคโนโลยีสารสนเทศ. All rights reserved.</p>
        <p className="mb-0">
          ติดต่อเรา: <a href="mailto:example@itbranch.com" className="text-white text-decoration-underline">lannapoly@lannapoly.ac.th</a> | โทร: 053 213 061
        </p>
      </div>
    </footer>
  );
};

export default Footer;
