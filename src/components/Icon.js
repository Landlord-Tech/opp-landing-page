import React from "react"
import IcomoonReact from "icomoon-react";
import iconSet from "../assets/fonts/selection.json";

const Icon = ({ color = '#FCC425', size, icon, className='' }) => {

  return (
    <IcomoonReact
      className={`icon ${className}`}
      iconSet={iconSet}
      color={color}
      size={size}
      icon={icon}
    />
  );
}

export default Icon
