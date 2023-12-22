"use client";
import React from "react";
import transScript from "@/helper/transScript";
import indexTrans from "@/localization/index.trans";
// Define styles as props alias.
type Props = {
  readonly [key: string]: string;
};
// changing language function used when localization button is clicked.
const changeLang = () => {
  let lang: string | null = localStorage.getItem("lang");
  if (lang === "en") {
    localStorage.setItem("lang", "ar");
    transScript(indexTrans);
  } else if (lang === "ar") {
    localStorage.setItem("lang", "en");
    transScript(indexTrans);
  }
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
