import React from 'react';
import { Course } from '../../types';

type Props = {
    course: Course;
};

const CourseDescriptionAr: React.FC<Props> = ({ course }) => {
    return (
        <div className="relative">
            <div className="w-full bg-gray-200 rounded-lg overflow-hidden mb-4 lg:mb-6">
                <div className="h-64 relative overflow-hidden">
                    <div className="w-full absolute">
                        <img
                            src={course.imageUrl}
                            alt={course.c_title_ar}
                            className="w-full lazyloaded"
                        />
                    </div>
                </div>
            </div>
            <div className="product__description">
                <Section title="المقدمة">
                    {course.c_intro_ar.map((i) => (
                        <p key={i.id}>{i.text}</p>
                    ))}
                </Section>
                <Section title="المدة">
                    <p>{course.c_duration_ar}</p>
                </Section>
                <Section title="من يجب ان يحضر الدورة">
                    <p>ومن المتوقع أن يكون لدى المشاركين في هذه الدورة المعرفة من التالي:</p>
                    <ul>
                        {course.c_who_should_ar.map((i) => (
                            <li key={i.id}><p className='me-1'>{i.text}</p></li>
                        ))}
                    </ul>
                </Section>
                <Section title="اهداف الدورة">
                    <ul>
                        {course.c_objective_ar.map((i) => (
                            <li key={i.id}><p className='me-1'>{i.text}</p></li>
                        ))}
                    </ul>
                </Section>
                <Section title="محتوى الدورة">
                    <ul>
                        {course.c_content_ar.map((i) => (
                            <li key={i.id}><p className='me-1'>{i.text}</p></li>
                        ))}
                    </ul>
                </Section>
                <Section title="ما هي المنافع من الدورة">
                    <ul>
                        {course.c_benefit_ar.map((i) => (
                            <li key={i.id}><p className='me-1'>{i.text}</p></li>
                        ))}
                    </ul>
                </Section>
                <Section title="الدورات الداخلية">
                    <p>{course.c_in_house_ar}</p>
                </Section>
                <Section title="أسلوب التسليم وقادة الدورة">
                    <p>{course.c_delv_and_leaders_ar}</p>
                </Section>
                <Section title="شهادة الدورة">
                    <ul>
                        {course.c_content2_ar.map((i) => (
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

export default CourseDescriptionAr;
