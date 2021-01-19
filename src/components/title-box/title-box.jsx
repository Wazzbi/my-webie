import React, { Component } from "react";

import styles from "./title-box.module.scss";

class TitleBox extends Component {
  state = {};
  render() {
    return (
      <>
        <h1
          className={`uk-heading-medium uk-text-bold uk-text-secondary ${styles.shadow}`}
          style={{ marginBottom: "0" }}
        >
          David
        </h1>
        <h1
          className={`uk-heading-medium uk-text-light uk-text-muted ${styles.shadow}`}
          style={{ paddingLeft: "5px", marginTop: "0" }}
        >
          Web Developer
        </h1>
      </>
    );
  }
}

export default TitleBox;
