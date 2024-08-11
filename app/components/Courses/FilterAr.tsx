import React from 'react';
import qs from 'query-string';
import { useRouter } from 'next/router';
import { Category, CourseType } from '../../types';
import Button from '../Button'; // Adjust the import path for your Button component

interface FilterProps {
  data: (Category | CourseType)[];
  name_ar: string;
  valueKey: string;
  onSelect: (id: string) => void;
}

const FilterAr: React.FC<FilterProps> = ({
  data,
  name_ar,
  valueKey,
  onSelect,
}) => {
  const router = useRouter();
  const { query } = router;

  const selectedValue = query[valueKey];

  const onClick = (id: string) => {
    const current = { ...query };

    const updatedQuery = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      delete updatedQuery[valueKey];
    }

    const url = {
      pathname: router.pathname,
      query: updatedQuery,
    };

    router.push(url, undefined, { shallow: true }).then(() => onSelect(id));
  };
  return (
    <div className="mb-4">
      <span className="mb-2 fs-6 relative flex items-center border-b-2 border-primary-100 ">{name_ar}</span>
      <div className="btn-group row ms-1">
        {data?.map(filter => (
          <Button
            key={filter.id}
            className={`w-full text-sm text-no-wrap me-1 block text-white text-center myPrimary cursor-pointer mt-2 ${filter.id === selectedValue ? 'btn-primary' : 'btn-secondary'}`}

            onClick={() => onClick(filter.id)}
          >
            {filter.name_ar}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default FilterAr;
