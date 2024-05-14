import { useContext, useState, useEffect } from "react";
import SearchIcon from "../../assets/icons/search.svg";
import { ReactComponent as Alert } from "../../assets/icons/alert.svg";
import "./Search.css";
import { AlertsContext } from "../../context/AlertContext";

const Search = () => {
  const { setSearchText } = useContext(AlertsContext);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="searchBar">
      <h2>Alert</h2>
      <div className="searchInput">
        <input
          type="text"
          id="search"
          placeholder="Search By..."
          onChange={(e) => setSearchText(e.target.value)}
        />
        <img src={SearchIcon} alt="search" />
      </div>
      <div className="position-relative alertIcon-wrapper">
        {viewportWidth > 1200 ? (
          <>
            <Alert className="alertIcon" />
            <span className="position-absolute top-0 translate-middle badge rounded-circle  bg-success">
              9
            </span>
          </>
        ) : (
          <button className="filterBtn">Filter</button>
        )}
      </div>
    </div>
  );
};

export default Search;
