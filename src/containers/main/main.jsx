import React, { Component } from "react";
import styles from "./main.module.scss";

import TitleBox from "../../components/title-box/title-box";
import FirstBubble from "../../components/first-bubble/first-bubble";
import SecondBubble from "../../components/second-bubble/second-bubble";
import ActionButton from "../../components/action-button/action-button";

class Main extends Component {
  state = {};
  render() {
    return (
      <>
        <main
          className="uk-container"
          style={{ minWidth: "1000px", height: "100vh", position: "relative" }}
        >
          <section className={styles.title_box}>
            <TitleBox></TitleBox>
          </section>

          <section className={styles.bubble_first}>
            <FirstBubble>
              <div
                className={`uk-flex uk-flex-center uk-flex-middle ${styles.bubble_text_box}`}
              >
                <span className={styles.bubble_text}>
                  I want my website. Who can help me ?
                </span>
              </div>
            </FirstBubble>
          </section>

          <section className={styles.bubble_second}>
            <SecondBubble>
              <div
                className={`uk-flex uk-flex-center uk-flex-middle ${styles.bubble_text_box}`}
              >
                <span className={styles.bubble_text_big}>I can.</span>
                <img
                  src="/smily-face.png"
                  alt="smile-emoji"
                  className={styles.bubble_text_emoji_big}
                ></img>
              </div>
            </SecondBubble>
          </section>

          <section
            className={`uk-flex uk-flex-column ${styles.action_buttons}`}
          >
            <ActionButton marginLeft="0">
              <span>Can you make colorful pages ?</span>
            </ActionButton>
            <ActionButton marginLeft="30px">
              <span>Can you make it more interactive ?</span>
            </ActionButton>
            <ActionButton marginLeft="15px">
              <span>Can you make it more serious ?</span>
            </ActionButton>
            <ActionButton marginLeft="80px">
              <span>How can I contact you ?</span>
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
          </section>
        </main>
      </>
    );
  }
}

export default Main;
