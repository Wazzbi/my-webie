import React, { Component } from "react";

import styles from "./second-bubble.module.scss";

class SecondBubble extends Component {
  state = {};
  render() {
    return (
      <>
        <div className={styles.bubble}>{this.props.children}</div>
      </>
    );
  }
}

export default SecondBubble;
