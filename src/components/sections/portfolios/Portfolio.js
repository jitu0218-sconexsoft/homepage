"use client";
import ButtonFilter from "@/components/shared/buttons/ButtonFilter";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import PortfolioCard from "@/components/shared/cards/PortfolioCard";
import filter from "@/libs/filter";
import getAllPortfolios from "@/libs/getAllPortfolios";
import { useEffect, useState } from "react";

const Portfolio = ({ type, isLarge, isNotTag, isSmallContainer }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filterController, setFilterController] = useState(null);
  const allPortfolios = getAllPortfolios();
  const portfolios = allPortfolios.slice(0, isLarge ? 8 : 6);
  const filterButtons = [
    {
      text: "CATEGORIES",
      filterOption: filterController,
      filterText: "CATEGORIES",
    },
    {
      text: "PRODUCTS",
      filterOption: filterController,
      filterText: "PRODUCTS",
    },
    
  ];
  const allFilterTargets = [
    "finance startup",
    "business finance",
    "digital",
    "startup digital",
    "finance business",
    "business",
    "finance business",
    "business",
  ];
  const filterTargets = allFilterTargets.slice(0, isLarge ? 8 : 6);
  useEffect(() => {
    const filterControllerNew = filter();
    setFilterController(filterControllerNew);
  }, []);

  return (
    <div
      className="portfolio sp_top_120 sp_bottom_120 white__bg special__spacing"
      id="tb__portfolio"
    >
      <div
        className={`${
          isLarge && !isSmallContainer
            ? "container-fluid full__width__padding"
            : "container "
        }`}
      >
        <div className="row align-items-center sp_bottom_70">
          <div
            className="col-xxl-6 col-xl-5 col-lg-4 col-md-12 col-sm-12 col-12"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="section__title section__title--2">
              {isNotTag ? (
                ""
              ) : (
                <div className="section__title__small">
                  <span>{type === 2 ? "MY PORTFOLIO" : "OUR PORTFOLIO"}</span>
                </div>
              )}
              <div className="section__title__heading">
                <h3>
                  {" "}
                  {type === 2 || type === 3
                    ? "CATEGORIES"
                    : "OUR COMPLETE PROJECT"}
                </h3>
              </div>
            </div>
          </div>
          <div
            className="col-xxl-6 col-xl-7 col-lg-8 col-md-12 col-sm-12 col-12"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            <div
              className="gridFilter portfolio__filter text-end gridFilter"
              id="myBtnContainer"
            >
              {!filterController
                ? ""
                : filterButtons?.map((button, idx) => (
                    <ButtonFilter
                      option={button}
                      key={idx}
                      idx={idx}
                      setCurrentIndex={setCurrentIndex}
                      currentIndex={currentIndex}
                    />
                  ))}
            </div>
          </div>
        </div>
        <div className="row">
          {portfolios?.map((portfolio, idx) => (
            <PortfolioCard
              isLarge={isLarge}
              key={idx}
              portfolio={portfolio}
              tagets={filterTargets[idx]}
            />
          ))}

          
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
