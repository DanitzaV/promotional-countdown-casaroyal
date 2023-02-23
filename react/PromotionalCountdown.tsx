import React, { useEffect, useState } from "react";
import { useCssHandles } from "vtex.css-handles";
import "./typings/storefront";



const CSS_HANDLES = ["container"];
const PromotionalCountdown = ({ isActive }: PromotionalCountdown) => {

  const handles = useCssHandles(CSS_HANDLES);

  useEffect(() => {
    console.log("isActive: ", isActive)
  }, []);


  return (
    <div className={handles.container}>
      <p>
        test
      </p>
    </div>
  )

};

PromotionalCountdown.schema = {
  title: 'Promotional Countdown',
  description: 'Promotional Countdown props',
  type: 'object',
  properties: {
    isActive: {
      title: 'Activar',
      type: 'boolean',
    },
  },
};

export default PromotionalCountdown;
