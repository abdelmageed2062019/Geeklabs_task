import "./Item.css";
import i4 from "../../assets/icons/risk.svg";
import i3 from "../../assets/icons/Vector-2.svg";
import i2 from "../../assets/icons/Vector.svg";
import i1 from "../../assets/icons/AMZN.svg";

import $ from "jquery";

const Item = ({ title, no, risk, change, idx }) => {
  const toggleCollapse = () => {
    $(`.itemCollapse_${idx}`).slideToggle();
  };

  return (
    <div className="Item">
      <ul
        className="tableItem d-flex align-items-center justify-content-around"
        onClick={toggleCollapse}
      >
        <li>
          <img src={i1} alt="AMZN" />
          <p>{title}</p>
        </li>

        <li>
          <img src={i2} alt="paper" />
          <p>{no}</p>
        </li>

        <li>
          <img src={i3} alt="pers" />
          {change.startsWith("-") ? (
            <p className="text-danger">{change}</p>
          ) : (
            <p className="text-success">{change}</p>
          )}
        </li>

        <li>
          <img src={i4} alt="Risk" />
          <p>{risk}</p>
        </li>
      </ul>

      <div className={`itemCollapse_${idx}`}>
        <p>
          <span>$AMZN</span> just announced an acquisition of <span>$NFLX</span>
          at <span>$200 B</span>.
        </p>

        <p>
          This is an <a href="">arbitage opportunity</a>, with the max gain
          being %X if the deal closes, but the possible risk is %Y if the deal
          success is % and therebefore the recommended play
          <a href="">long/short</a> $ABC
        </p>
      </div>
    </div>
  );
};

export default Item;
