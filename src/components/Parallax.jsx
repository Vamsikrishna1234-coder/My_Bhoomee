import React from 'react';
import img1 from "../assets/images/wooden/wooden-villa1.jpg"

const Parallax = () => {
  return (
    <>
      {/* Bootstrap CSS (via CDN) */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossOrigin="anonymous"
      />

      {/* Parallax Section */}
      <div
        className="parallax-bg min-vh-100 d-flex align-items-center justify-content-center position-relative overflow-hidden"
        style={{
          backgroundImage: `url(${img1})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          transition: 'background-position 0.3s ease-out',
        }}
      >
        {/* Dark Overlay */}
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-10"></div>

        {/* Content */}
        <div className="container position-relative text-center text-white px-4">
          <h1 className="display-3 fw-bold mb-4 animate__animated animate__fadeInDown">
            Welcome to MyBhoomee
          </h1>
          <h2>
            Perfect Land to Invest for Future 
          </h2>
          
        </div>
      </div>

      
    </>
  );
};

export default Parallax;