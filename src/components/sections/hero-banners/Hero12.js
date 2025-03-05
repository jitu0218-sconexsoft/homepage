import heroVectorImage1 from "@/assets/img/herobaner/vector__1.png";
import heroVectorImage4 from "@/assets/img/herobaner/vector__4.png";
import heroBgImage1 from "@/assets/img/bg__cracker.jpeg"; // Ensure this is fireworks-related
import Image from "next/image";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const Hero12 = ({ bgImg, title, desc, isNotTag }) => {
  return (
    <div className="herobanner">
      <video autoPlay loop muted playsInline className="video-bg">
        <source src="assets/video/background_1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay text */}
      <div className="video-overlay">
        <h1 className="hero-title">Celebrate with Joy, Light Up the Sky!</h1>
        <p className="hero-desc">
          Discover the best fireworks for every occasion.
        </p>
        <ButtonPrimary text="Explore Now" link="/shop" />
      </div>

      <div className="container">
        <div className="herobanner__wrapper">
          <div className="herobanner__single position-relative">
            <div className="row align-items-center height__950">
              <div
                className="col-xl-10 col-lg-12 col-md-12 col-sm-12 text-center m-auto"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                {/* You can add more content here if needed */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .video-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -1;
        }

        .video-overlay {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          color: #ffd700; /* Gold color */
          text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
          z-index: 2;
          background: rgba(0, 0, 0, 0.4); /* Optional dark overlay */
          padding: 20px;
          border-radius: 10px;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: bold;
          color:#FFD700;
        }

        .hero-desc {
          color:#D3D3D3;
          font-size: 1.5rem;
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
};

export default Hero12;
