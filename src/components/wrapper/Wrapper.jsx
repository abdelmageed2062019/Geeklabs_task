import "./Wrapper.css";
import Search from "./../search/Search";
import Table from "../table/Table";

const Wrapper = () => {
  return (
    <div className="wrapper">
      <Search />
      <Table />
    </div>
  );
};

export default Wrapper;
