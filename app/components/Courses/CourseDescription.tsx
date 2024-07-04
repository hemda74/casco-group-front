// components/CourseDescription.tsx
import React from 'react';

type Section = {
    title: string;
    content: React.ReactNode;
};

type CourseDescriptionProps = {
    sections: Section[];
};

const CourseDescription: React.FC<CourseDescriptionProps> = ({ sections }) => {
    return (
        <div className="product__description">
            {sections.map((section, index) => (
                <div key={index}>
                    <h1>
                        <b style={{ color: 'rgb(149, 55, 52)' }}>
                            <span className="text-primary-100" style={{ fontSize: '30px' }}>
                                {section.title}
                            </span>
                        </b>
                    </h1>
                    {section.content}
                    <div style={{ height: '22px' }}></div>
                </div>
            ))}
        </div>
    );
};

export default CourseDescription;
