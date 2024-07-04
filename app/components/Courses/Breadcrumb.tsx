import Link from 'next/link';
import React from 'react';

type BreadcrumbItem = {
    href?: string;
    label: string;
};

type BreadcrumbProps = {
    items: BreadcrumbItem[];
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
    return (
        <ul className="list-reset">
            {items.map((item, index) => (
                <li key={index} className="text-sm hidden lg:inline-block align-middle">
                    {item.href ? (
                        <Link href={item.href} className="lg:hover:underline align-middle inline-block">
                            <span className="inline-block align-middle">{item.label}</span>
                        </Link>
                    ) : (
                        <span className="inline-block align-middle">{item.label}</span>
                    )}
                    {index < items.length - 1 && (
                        <span className="me-1 ms-1 lg:inline-block align-middle">/</span>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default Breadcrumb;
