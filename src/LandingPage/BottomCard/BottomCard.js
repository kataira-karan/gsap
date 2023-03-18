import { React, useRef, useEffect } from "react";
import "./BottomCardStyle.css";
import { gsap } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { Power2 } from "gsap";
import { Timeline } from "gsap/gsap-core";

const BottomCard = (props) => {
  const { imgSrc, title, description } = props;

  const imageContainer = useRef(null);
  const image = useRef(null);

  const t = new Timeline();

  useEffect(() => {}, []);

  return (
    <div className="bottom-card-container">
      <div className="bottom-card-image-container">
        <img className="bottom-card-image" src={imgSrc}></img>
      </div>
      <div className="bottom-card-content">
        <span className="bottom-card-title">{title ? title : "Title"}</span>
        <span>{description ? description : "Description"}</span>
      </div>
    </div>
  );
};

export default BottomCard;
