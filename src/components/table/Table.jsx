import React, { useContext } from "react";
import Item from "../item/Item";
import "./Table.css";
import { AlertsContext } from "../../context/AlertContext";

const Table = () => {
  const { alerts } = useContext(AlertsContext);

  return (
    <div className="dataTable">
      <div className="DataTableWrapper">
        {alerts.map((item, i) => {
          const { title, no, change, risk } = item;
          return (
            <Item
              key={i}
              title={title}
              no={no}
              change={change}
              risk={risk}
              idx={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Table;
