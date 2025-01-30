import React, { useState } from "react";
import { createPortal } from 'react-dom';
import "./style.css";

export const Popup = ({ closeModel }) => {
  return <div className="model">
    <div className="model-content">
        <div className="model-title">Model Confirmation</div>
        <div className="model-description">
          <p>Do you confirm?</p>
          <div className="model-confirmation">
          <button onClick={() => closeModel()}>Yes</button>
          <button onClick={() => closeModel()}>No</button>
          </div>
        </div>
    </div>
  </div>
}
