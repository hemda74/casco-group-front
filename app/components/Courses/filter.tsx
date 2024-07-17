import React from 'react';
import qs from 'query-string';
import { useRouter } from 'next/router';
import { Category, CourseType } from '../../types';
import Button from '../Button'; // Adjust the import path for your Button component

interface FilterProps {
  data: (Category | CourseType)[];
  name: string;
  valueKey: string;
  onSelect: (id: string) => void;
}

const Filter: React.FC<FilterProps> = ({
  data,
  name,
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
      <h3 className="mb-2">{name}</h3>
      <div className="btn-group">
        {data?.map(filter => (
          <Button
            key={filter.id}
            className={`btn ${filter.id === selectedValue ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => onClick(filter.id)}
          >
            {filter.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Filter;
