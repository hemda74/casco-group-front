// components/CourseDescription.tsx
import React from 'react';
interface CourseDescriptionProps {
    title: string;
    content: React.ReactNode;
}
const CourseDescription: React.FC<CourseDescriptionProps> = ({ title, content }) => {
    return (
        <div className="course-section">
            <b style={{ color: 'rgb(149, 55, 52)' }}>
                <span
                    className="text-primary-100"
                    style={{ fontSize: '30px' }}>
                    {title}
                </span>
            </b>
            <div className="content">
                {content}
            </div>
        </div>
    );
};

export default CourseDescription;
