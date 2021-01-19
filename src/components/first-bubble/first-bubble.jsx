import React, { Component } from "react";

import styles from "./first-bubble.module.scss";

class FirstBubble extends Component {
  state = {};
  render() {
    return (
      <>
        <div className={styles.bubble}>{this.props.children}</div>
      </>
    );
  }
}

export default FirstBubble;
