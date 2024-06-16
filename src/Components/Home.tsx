import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faBolt,
  faGrip,
  faCircleUser,
  faImage,
  faMicrophone,
  faLightbulb,
  faUtensils,
  faCompass,
  faBaseball,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
import { useContext, useEffect, useState } from "react";
import { Context } from "./Context";
// import { marked } from "https://cdn.jsdelivr.net/npm/marked/marked.min.js";
// var marked = require("marked")
import { marked } from "marked";
// import { marked } from "marked";

const Home: React.FC = () => {
  const context = useContext(Context);

  if (!context) {
    throw new Error("Context must be used within a ContextProvider");
  }

  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = context;

  const [renderedMarkdown, setRenderedMarkdown] = useState<string>("");

  useEffect(() => {
    if (resultData) {
      const markdownHTML = marked(resultData);
      const markdownText = markdownHTML as string;
      setRenderedMarkdown(markdownText);
    }
  }, [resultData]);

  const handleSend = () => {
    onSent(input);
  };

  return (
    <>
      <div className="home">
        <div className="nav">
          <div className="title">
            <h1>Gemini</h1>
            <FontAwesomeIcon icon={faChevronDown} className="drop-down" />
          </div>
          <div className="profile-info">
            <div className="premeium-wrapper">
              <FontAwesomeIcon icon={faBolt} className="grad" />
              <p>Try Gemini Advanced</p>
            </div>
            <FontAwesomeIcon icon={faGrip} />
            <FontAwesomeIcon icon={faCircleUser} />
          </div>
        </div>
        <div className="main">
          {!showResult ? (
            <>
              <div className="header">
                <div className="text-wrap">
                  <h3>Hello, Pavan</h3>
                </div>
                <h3>How can I help you today?</h3>
              </div>
              <div className="cards">
                <div className="card">
                  <p>Help me compare these college majors</p>
                  <FontAwesomeIcon icon={faLightbulb} className="card-img" />
                </div>
                <div className="card">
                  <p>Help create a weekly meal plan for two</p>
                  <FontAwesomeIcon icon={faUtensils} className="card-img" />
                </div>
                <div className="card">
                  <p>Give me ways to add certain foods to my diet</p>
                  <FontAwesomeIcon icon={faCompass} className="card-img" />
                </div>
                <div className="card">
                  <p>Compare the difference between pickleball and tennis</p>
                  <FontAwesomeIcon icon={faBaseball} className="card-img" />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="response">
                <div className="result-title">
                  <FontAwesomeIcon icon={faCircleUser} />
                  <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                  <img
                    src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png"
                    width="20px"
                    height="auto"
                  />
                  {loading ? (
                    <>
                      <div className="loader">
                        <hr />
                        <hr />
                        <hr />
                      </div>
                    </>
                  ) : (
                    <p
                      dangerouslySetInnerHTML={{ __html: renderedMarkdown }}
                    ></p>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
        <div className="prompts">
          <div className="wrapper">
            <div className="inner-wrapper">
              <input
                onChange={(e) => setInput(e.target.value)}
                value={input}
                type="text"
                className="prompt"
                placeholder="Enter a prompt here"
              />
              <FontAwesomeIcon icon={faImage} className="search-img" />
              <FontAwesomeIcon icon={faMicrophone} className="search-img" />
              <a className="div" onClick={handleSend}>
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  beat
                  className="search-img"
                />
              </a>
            </div>
          </div>
          <p>
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy & Gemini Apps
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
