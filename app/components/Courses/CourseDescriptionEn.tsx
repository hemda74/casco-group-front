import React from 'react';
import { Course } from '../../types';

type Props = {
    course: Course;
};

const CourseDescriptionEn: React.FC<Props> = ({ course }) => {
    return (
        <div className="relative">
            <div className="w-full bg-gray-200 rounded-lg overflow-hidden mb-4 lg:mb-6">
                <div className="h-64 relative overflow-hidden">
                    <div className="w-full absolute">
                        <img
                            src={course.imageUrl}
                            alt={course.c_title}
                            className="w-full lazyloaded"
                        />
                    </div>
                </div>
            </div>
            <div className="product__description">
                <Section title="Introduction">
                    {course.c_intro_en.map((i) => (
                        <p className='ms-2' key={i.id}>{i.text}</p>
                    ))}
                </Section>
                <Section title="Duration
">
                    <p className='ms-2'>{course.c_duration_en}</p>
                </Section>
                <Section title="Who should attend?
">
                    <ul>
                        {course.c_who_should_en.map((i) => (
                            <li key={i.id}><p className='me-1'>{i.text}</p></li>
                        ))}
                    </ul>
                </Section>
                <Section title="Course objectives
">
                    <ul>
                        {course.c_objective_en.map((i) => (
                            <li key={i.id}><p className='me-1'>{i.text}</p></li>
                        ))}
                    </ul>
                </Section>
                <Section title="Course content
">
                    <ul>
                        {course.c_content_en.map((i) => (
                            <li key={i.id}><p className='me-1'>{i.text}</p></li>
                        ))}
                    </ul>
                </Section>
                <Section title="What are the benefits
">
                    <ul>
                        {course.c_benefit_en.map((i) => (
                            <li key={i.id}><p className='me-1'>{i.text}</p></li>
                        ))}
                    </ul>
                </Section>
                <Section title="In-House Courses
">
                    <p className='ms-2'>{course.c_in_house_en}</p>
                </Section>
                <Section title="Style of Delivery and Course Leaders
">
                    <p className='ms-2'>{course.c_delv_and_leaders_en}</p>
                </Section>
                <Section title="Certification">
                    <ul>
                        {course.c_content2_en.map((i) => (
                            <li key={i.id}><p className='me-1'>{i.text}</p></li>
                        ))}
                    </ul>
                </Section>
            </div>
        </div>
    );
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <>
        <p>
            <b style={{ color: 'rgb(149, 55, 52)' }}>
                <span className="text-primary-100" style={{ fontSize: '30px' }}>
                    {title}
                </span>
            </b>
        </p>
        {children}
    </>
);

export default CourseDescriptionEn;
