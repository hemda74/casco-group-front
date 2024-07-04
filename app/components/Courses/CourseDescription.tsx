// components/CourseDescription.tsx
import React from 'react';

interface CourseDescriptionProps {
    title: string;
    content: React.ReactNode;
}

const CourseDescription: React.FC<CourseDescriptionProps> = ({ title, content }) => {
    return (
        <div className="course-section">
            <h2 className="text-xl font-bold">{title}</h2>
            <div className="content">
                {content}
            </div>
        </div>
    );
};

export default CourseDescription;
