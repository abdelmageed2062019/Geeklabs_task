import React, { useState, useEffect } from "react";

import "./Filter.css";
import SearchIcon from "../../assets/icons/search.svg";

import { ReactComponent as Health } from "../../assets/icons/Group 56.svg";
import { ReactComponent as Chat } from "../../assets/icons/Page-1.svg";
import { ReactComponent as Card } from "../../assets/icons/cart.svg";
import { ReactComponent as Financials } from "../../assets/icons/Group 57.svg";
import { ReactComponent as Matrials } from "../../assets/icons/Vector-3.svg";
import { ReactComponent as Utilities } from "../../assets/icons/uti.svg";
import { ReactComponent as It } from "../../assets/icons/it.svg";
import { ReactComponent as Discretionary } from "../../assets/icons/Group (6).svg";
import { ReactComponent as Energy } from "../../assets/icons/lightning.svg";
import { ReactComponent as Industry } from "../../assets/icons//XMLID_931_.svg";
import { ReactComponent as Estate } from "../../assets/icons//Group 58.svg";

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenFilters = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClickOutside = (event) => {
    if (
      event.target !== callFiltersRef.current &&
      !callFiltersRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  const callFiltersRef = React.createRef();

  return (
    <div className="filter" ref={callFiltersRef}>
      <div className="filterWrapper">
        <h2>Filters</h2>

        <div className="filtersAdded">
          <div className="clear">
            <p>Filters Applaied</p>
            <button>Clear All</button>
          </div>

          <ul class="filtersAdded-List">
            <li>
              Health Care
              <span>x</span>
            </li>
          </ul>
        </div>

        <div className="filterStock">
          <h5>Stock</h5>
          <div className="stockWrapper">
            <div className="stockSearch">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="$ TICKER"
              />

              <img src={SearchIcon} alt="search" />
            </div>

            <div className="stockIndustry">
              <div className="stockIndustry-list">
                <h6>Industry</h6>
                <ul>
                  <li>
                    <Health />
                    Health Care
                  </li>

                  <li>
                    <Chat />
                    Communication
                  </li>

                  <li>
                    <Card />
                    Consumer
                  </li>

                  <li>
                    <Financials />
                    Financials
                  </li>

                  <li>
                    <Matrials />
                    Matrials
                  </li>

                  <li>
                    <Utilities />
                    Utilities
                  </li>

                  <li>
                    <It />
                    It
                  </li>

                  <li>
                    <Discretionary />
                    Discretionary
                  </li>

                  <li>
                    <Energy />
                    Energy
                  </li>

                  <li>
                    <Industry />
                    Industry
                  </li>

                  <li>
                    <Estate />
                    Real Estate
                  </li>
                </ul>
              </div>
            </div>

            <div className="filterCheck">
              <div className="cap">
                <h6>Market Cap</h6>
                <ul>
                  <li>
                    <input
                      type="radio"
                      id="micro"
                      name="marketCap"
                      value="Micro"
                    />
                    <label for="micro">Micro</label>
                  </li>

                  <li>
                    <input
                      type="radio"
                      id="small"
                      name="marketCap"
                      value="Small"
                    />
                    <label for="small">Small</label>
                  </li>

                  <li>
                    <input
                      type="radio"
                      id="large"
                      name="marketCap"
                      value="Large"
                    />
                    <label for="large">Large</label>
                  </li>
                </ul>
              </div>

              <div className="risk">
                <h6>Risk Level</h6>
                <ul>
                  <li>
                    <input type="radio" id="low" name="risk" value="Low" />
                    <label for="low">Low Risk</label>
                  </li>

                  <li>
                    <input type="radio" id="mid" name="risk" value="Mid" />
                    <label for="mid">Mid Risk</label>
                  </li>

                  <li>
                    <input type="radio" id="high" name="risk" value="High" />
                    <label for="high">High Risk</label>
                  </li>
                </ul>
              </div>
            </div>

            <div class="d-flex justify-content-around">
              <div class="filter-by-strategy">
                <span class="filter-by-strategy-asset-head d-flex justify-content-center align-items-center flex-column fw-bold">
                  Strategy
                </span>
                <div class="d-flex flex-column align-items-center">
                  <span class="Wheel-choice first-choice">Big Option Buys</span>
                  <span class="Wheel-choice active-choice">Short Reports</span>
                  <span class="Wheel-choice last-choice">Merger Arbitrage</span>
                </div>
              </div>
              <div class="filter-by-asset">
                <span class="filter-by-strategy-asset-head d-flex justify-content-center align-items-center flex-column fw-bold">
                  Asset
                </span>
                <div class="d-flex flex-column align-items-center">
                  <span class="Wheel-choice first-choice">Stocks</span>
                  <span class="Wheel-choice active-choice">Options</span>
                  <span class="Wheel-choice last-choice">Futures</span>
                </div>
              </div>
            </div>

            <div className="apply text-center my-4">
              <button className="apply">Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
