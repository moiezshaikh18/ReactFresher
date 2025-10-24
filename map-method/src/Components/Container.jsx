import React from "react";
import styles from "./item.module.css";

export const Container = ({ children, onClick }) => {
  return <div className={styles["item-container"]}>{children}</div>;
};
