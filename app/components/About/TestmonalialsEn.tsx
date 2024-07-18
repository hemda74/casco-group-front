import React from 'react';
import { Test } from '../../types';
type Props = {
  test: Test[];
};
const TestimonialsEn: React.FC<Props> = ({ test }) => {
  return (
    <div className="grid-testimonials">
      {test.map((t, index) => (
        <div
          key={index}
          className={`grid-card grid-card--testimonial white-color red-5-background`}>
          <div className="grid-card__container">
            <blockquote className="intro intro--medium">{t.text}</blockquote>
            <div className="author-card">
              <div
                className="author-card__image"
                style={{ backgroundImage: `url(${t.imageUrl})` }}
              ></div>
              <div className="author-card__info">
                <cite>{t.name}</cite>
                <p>{t.title}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialsEn;
