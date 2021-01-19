import React, { Component } from "react";
import styles from "./action-button.module.scss";

class ActionButton extends Component {
  state = {};
  render() {
    return (
      <>
        <button
          className={styles.action_btn}
          style={{ marginLeft: this.props.marginLeft }}
        >
          {this.props.children}
        </button>
      </>
    );
  }
}

export default ActionButton;
