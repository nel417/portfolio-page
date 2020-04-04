import React from "react";
import Cardinfo from "./Cardinfo";
import "./App.css";

export default function Card(props) {
  return (
    <div
      className="d-inline-block n-card"
      // onClick={e => props.click(props.item)}
    >
      <img
        className="n-card-image imgSize"
        src={props.item.imgSrc}
        alt={props.item.imgSrc}
      />{" "}
      {props.item.selected && (
        <Cardinfo
          title={props.item.title}
          subTitle={props.item.subTitle}
          link={props.item.link}
        />
      )}{" "}
    </div>
  );
}
