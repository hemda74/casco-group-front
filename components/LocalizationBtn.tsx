"use client";
import React from "react";
import changeLang from "../helper/changeLang";

// Define styles as props alias.
type Props = {
  readonly [key: string]: string;
};
// localization button is used in loginpage, forgetpass ..etc.
const LocalizationBtn = (props: Props) => {
  return (
    <div className="mt-4">
      <button
        className={`btn`}
        onClick={() => {
          // Changing language function.
          changeLang();
        }}
      >
        <span data-trans="langs">E</span>
      </button>
    </div>
  );
};

export default LocalizationBtn;
