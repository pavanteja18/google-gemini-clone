import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCircleQuestion,
  faClockRotateLeft,
  faGear,
  faPlus,
  faCircle,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";
import { useState } from "react";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);

  return (
    <>
      <div className="sidebar" style={{ width: extended ? "225px" : "60px" }}>
        <div className="top">
          <FontAwesomeIcon
            icon={faBars}
            className="bars"
            onClick={() => {
              setExtended(!extended);
            }}
          />
          <div className="content">
            <a className="btn">
              <FontAwesomeIcon icon={faPlus} className="btn-logo" />
              {extended ? <p>New Chat</p> : null}
            </a>
            {extended ? (
              <div className="recent">
                <h5>Recent</h5>
                <div className="items">
                  <a>
                    <FontAwesomeIcon icon={faMessage} className="img" />
                    <p>Hello, What can I d...</p>
                  </a>
                  <a>
                    <FontAwesomeIcon icon={faMessage} className="img" />
                    <p>Hello, What can I d...</p>
                  </a>
                  <a>
                    <FontAwesomeIcon icon={faMessage} className="img" />
                    <p>Hello, What can I d...</p>
                  </a>
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <div className="bottom">
          <a>
            <FontAwesomeIcon icon={faCircleQuestion} className="img" />
            {extended ? <p>Help</p> : null}
          </a>
          <a>
            <FontAwesomeIcon icon={faClockRotateLeft} className="img" />
            {extended ? <p>Activity</p> : null}
          </a>
          <a>
            <FontAwesomeIcon icon={faGear} className="img" />
            {extended ? <p>Settings</p> : null}
          </a>
          {extended ? (
            <div className="location">
              <div className="loc">
                <FontAwesomeIcon icon={faCircle} className="dot" />
                <div className="info">
                  <p>Telangana, India</p>
                  <p>Based on your places (home) • Update location</p>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
