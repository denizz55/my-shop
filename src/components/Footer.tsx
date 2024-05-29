import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYear(currentYear);
  }, []);

  return (
    <div className="footer">
      &copy; <span id="year">{year}</span> <span>Your Company Name. All rights reserved.</span>
    </div>
  );
};

export default Footer;