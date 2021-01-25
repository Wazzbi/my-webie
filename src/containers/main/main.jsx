import React, { Component } from "react";
import styles from "./main.module.scss";

import TitleBox from "../../components/title-box/title-box";
import FirstBubble from "../../components/first-bubble/first-bubble";
import SecondBubble from "../../components/second-bubble/second-bubble";
import ActionButton from "../../components/action-button/action-button";

import Typing from "react-typing-animation";
class Main extends Component {
  componentDidMount() {
    // Movement Animation to happen
    const target = document.querySelector(".anime_target");
    const container = document.querySelector(".anime_container"); // TODO: possibly bigger (see < 18.30)

    //Items
    const text = document.querySelector(".anime_item");

    // Moving Animation Event
    container.addEventListener("mousemove", (e) => {
      let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
      let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
      target.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    //Animate In
    container.addEventListener("mouseenter", (e) => {
      target.style.transition = "none";
      //Popout
      text.style.transform = "translateZ(30px)";
    });
    // Animate out
    container.addEventListener("mouseleave", (e) => {
      target.style.transition = "all 0.5s ease";
      target.style.transform = `rotateY(0deg) rotateX(0deg)`;
      //Popback
      text.style.transform = "translateZ(0px)";
    });
  }

  render() {
    return (
      <>
        <main
          className="uk-container"
          style={{ minWidth: "1000px", height: "100vh", position: "relative" }}
        >
          <section
            className={`${styles.title_box}`}
            uk-scrollspy="cls:uk-animation-fade; delay: 8000;"
          >
            <TitleBox></TitleBox>
          </section>

          <section
            className={`anime_container ${styles.bubble_first}`}
            uk-scrollspy="cls:uk-animation-fade"
          >
            <div
              className={`anime_target ${styles.anime}`}
              style={{ padding: "50px" }}
            >
              <FirstBubble>
                <div
                  className={`anime_item uk-flex uk-flex-center uk-flex-middle ${styles.bubble_text_box}`}
                >
                  <span className={`${styles.bubble_text}`}>
                    <Typing speed={100}>
                      <Typing.Delay ms={500} />I want my website.&nbsp;
                      <Typing.Delay ms={500} />
                      Who can help me?
                    </Typing>
                  </span>
                </div>
              </FirstBubble>
            </div>
          </section>

          <section
            className={`${styles.bubble_second}`}
            uk-scrollspy="cls:uk-animation-slide-bottom-small; delay: 5500;"
          >
            <SecondBubble>
              <div
                className={`uk-flex uk-flex-center uk-flex-middle ${styles.bubble_text_box}`}
              >
                <span className={styles.bubble_text_big}>
                  <Typing speed={100}>
                    <Typing.Delay ms={6000} />I can.
                  </Typing>
                </span>
                <img
                  src="/smily-face.png"
                  alt="smile-emoji"
                  className={styles.bubble_text_emoji_big}
                  uk-scrollspy="cls:uk-animation-reverse; delay: 7200;"
                ></img>
              </div>
            </SecondBubble>
          </section>

          <section
            className={`uk-flex uk-flex-column ${styles.action_buttons}`}
          >
            <div uk-scrollspy="cls:uk-animation-fade; delay: 11000;">
              <ActionButton marginLeft="0">
                <span>Can you make colorful pages?</span>
              </ActionButton>
            </div>

            <div uk-scrollspy="cls:uk-animation-fade; delay: 11500;">
              <ActionButton marginLeft="30px">
                <span>Can you make it more interactive?</span>
              </ActionButton>
            </div>

            <div uk-scrollspy="cls:uk-animation-fade; delay: 12000;">
              <ActionButton marginLeft="15px">
                <span>Can you make it more serious?</span>
              </ActionButton>
            </div>

            <div uk-scrollspy="cls:uk-animation-fade; delay: 12500;">
              <ActionButton marginLeft="80px">
                <span>How can I contact you?</span>
                <img
                  src="/love-face.png"
                  alt="love-face-emoji"
                  style={{
                    width: "15px",
                    height: "auto",
                    verticalAlign: "baseline",
                    marginLeft: "10px",
                  }}
                ></img>
              </ActionButton>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default Main;
