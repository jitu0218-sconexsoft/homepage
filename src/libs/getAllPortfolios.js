import portfolioImage1 from "@/assets/img/poartfolio/portfolio-1.png";
import portfolioImage2 from "@/assets/img/poartfolio/portfolio-2.webp";
import portfolioImage3 from "@/assets/img/poartfolio/portfolio-3.png";
import portfolioImage4 from "@/assets/img/poartfolio/portfolio-4.png";
import portfolioImage5 from "@/assets/img/poartfolio/portfolio-5.png";
import portfolioImage6 from "@/assets/img/poartfolio/portfolio-6.jpeg";
import portfolioImage7 from "@/assets/img/poartfolio/portfolio-7.png";
import portfolioImage8 from "@/assets/img/poartfolio/portfolio-8.png";

const getAllPortfolios = () => {
  const portfolios = [
    {
      id: 1,
      title: "GROUND CHAKKAR",
      img: portfolioImage1,

      duration: "1500",
    },
    {
      id: 2,
      title: "FLOWER POTS",
      img: portfolioImage2,

      duration: "1700",
    },
    {
      id: 3,
      title: "BOMBS",
      img: portfolioImage3,

      duration: "1900",
    },
    {
      id: 4,
      title: "WALA'S",
      img: portfolioImage4,

      duration: "2100",
    },
    {
      id: 5,
      title: "ROCKETS",
      img: portfolioImage5,

      duration: "2300",
    },
    {
      id: 6,
      title: "SPARKLES",
      img: portfolioImage6,

      duration: "2500",
    },
    {
      id: 7,
      title: "FANCY & AERIAL SHOTS",
      img: portfolioImage7,

      duration: "2700",
    },
    {
      id: 8,
      title: "GIFT PACK",
      img: portfolioImage8,

      duration: "2900",
    },
  ];
  return portfolios;
};

export default getAllPortfolios;
