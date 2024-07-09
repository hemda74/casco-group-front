import React from 'react'
import Link from 'next/link'
const Types = () => {
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
                    <li className="">
                        <Link
                            href="/coursess/foundation"
                            className="dropdown-item block w-full text-sm  truncate accordion__header--open">
                            Foundation
                        </Link>
                    </li>
                    <li className="">
                        <Link
                            href="/coursess/practitioner"
                            className="dropdown-item block w-full text-sm  truncate accordion__header--open">
                            Practitioner
                        </Link>
                    </li>
                    <li className="">
                        <Link
                            href="/coursess/professional"
                            className="dropdown-item block w-full text-sm  truncate accordion__header--open">
                            Professional
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Types
