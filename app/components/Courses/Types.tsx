import React from 'react';
import Link from 'next/link';
import { CourseType } from '../../types';

type Props = {
    types: CourseType[];
    onTypeSelect: (type: string) => void;
};

const Types: React.FC<Props> = ({ types, onTypeSelect }) => {
    return (
        <div>
            <div className="filter accordion--open list-reset mb-2 | lg:mb-6 dropdown">
                <button
                    className=" w-full"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <div className=" relative flex items-center  mb-3 border-b-2 border-primary-100 cursor-pointer | accordion__header--open">
                        Level
                    </div>
                </button>
                <ul className="facets hidden dropdown-menu">
                    {types.map((type) => (
                        <li className="" key={type.id}>
                            <Link
                                href="#"
                                className="dropdown-item block w-full text-sm  truncate accordion__header--open"
                                onClick={() => onTypeSelect(type.name)}>
                                {type.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Types;
