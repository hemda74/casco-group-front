"use client";
const changeLang = () => {
  let lang: string | null = localStorage.getItem('lang');
  if (lang === 'en') {
    localStorage.setItem('lang', 'ar');
  } else if (lang === 'ar') {
    localStorage.setItem('lang', 'en');
  
  }
};

export default changeLang;