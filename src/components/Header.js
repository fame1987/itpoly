import React from 'react';

const Header = ({ title, subtitle }) => {
  return (
    <header className="bg-light py-5 text-center shadow-sm">
      <div className="container">
        <h1 className="display-4 text-primary fw-bold">{title}</h1>
        {subtitle && <p className="lead text-secondary mt-3">{subtitle}</p>}
      </div>
    </header>
  );
};

export default Header;
