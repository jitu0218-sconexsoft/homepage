import Image from "next/image";
import Link from "next/link";

const PortfolioCard = ({ portfolio, tagets, isLarge }) => {
  const { title, img, dep, duration } = portfolio;
  
  return (
    <div
      className={`${
        isLarge ? "col-xl-3" : "col-xl-4"
      } col-lg-4 col-md-6 col-sm-6 col-12 single__transform filterDiv ${tagets}`}
      data-aos="fade-up"
      data-aos-duration={duration}
    >
      <div className="portfolio__single">
        <div className="portfolio__img" style={{ width: "300px", height: "200px", overflow: "hidden" }}>
          <Image
            src={img}
            alt={title}
            width={300} 
            height={350} 
            className="img-fluid"
            style={{ objectFit: "cover" }}
          />
          <div className="portfolio__content">
            <h6>
              <Link href="#">{title}</Link>
            </h6>
            <span>{dep}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
