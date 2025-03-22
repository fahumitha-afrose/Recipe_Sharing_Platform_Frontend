import React from "react";
const Home = () => {
  return (
    <div style={{ backgroundColor: "#0F172A", color: "white", minHeight: "100vh", paddingBottom: "30px" }}>
      <div id="carouselExampleAutoplaying" className="carousel slide pt-2" data-bs-ride="carousel">
        <div className="carousel-inner">
          <center>
            <div className="carousel-item active">
              <img src="./img.png" className="d-block" width="98%" height="550px" alt="..." style={{ borderRadius: "10px" }} />
            </div>
            <div className="carousel-item">
              <img src="./img2.jpg" className="d-block" width="98%" height="550px" alt="..." style={{ borderRadius: "10px" }} />
            </div>
            <div className="carousel-item">
              <img src="./img3.jpg" className="d-block" width="98%" height="550px" alt="..." style={{ borderRadius: "10px" }} />
            </div>
          </center>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

   
      <div className="container text-center mt-5 p-4"
        style={{
          width: "90%",
          borderRadius: "10px",
          background: "linear-gradient(135deg, #1E293B, #334155)",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.5)",
        }}>
        <h2 style={{ color: "skyblue", fontWeight: "bold", letterSpacing: "1px" }}>About Us</h2>
        <p className="typing-text" style={{ color: "#E2E8F0", fontSize: "1.1rem" }}>
          Welcome to <strong>Recipeidia</strong>, your ultimate destination for discovering, sharing, and creating delicious recipes! Whether you're a seasoned chef or a home cook exploring new flavors, Recipeidia provides a platform that makes cooking exciting, easy, and enjoyable.
        </p>
        <p style={{ fontSize: "1.2rem", fontStyle: "italic", color: "#A5B4FC" }}>
           A WORLD OF FLAVORS AT YOUR FINGERTIPS 
        </p>
      </div>

      
      <div className="container text-center mt-5 mb-5 p-4"
        style={{
          width: "90%",
          borderRadius: "10px",
          background: "linear-gradient(135deg, #1E293B, #334155)",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.5)",
        }}>
        <h2 style={{ color: "skyblue", fontWeight: "bold", letterSpacing: "1px" }}>Contact Us</h2>
        <p style={{ color: "#E2E8F0" }}>
          Email: 
          <a href="mailto:fahumithaafrose.16163@gmail.com" 
            style={{ color: "#A5B4FC", textDecoration: "none", fontWeight: "bold" }} 
            onMouseOver={(e) => e.target.style.color = "white"}
            onMouseOut={(e) => e.target.style.color = "#A5B4FC"}>
            fahumithaafrose.16163@gmail.com
          </a>
        </p>
        <p style={{ color: "#E2E8F0" }}>
          Phone: 
          <span style={{ fontWeight: "bold", color: "#A5B4FC" }}> +91 63845 80203</span>
        </p>
      </div>
    </div>
  );
};

export default Home;
