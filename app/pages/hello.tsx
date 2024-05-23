import React from 'react';
import { Category } from '../types';
import axios from 'axios';

const YourComponent: React.FC<{ categories: Category[] }> = ({
  categories,
}) => {
  return (
    <div className="container">
      <div className="row">
        {categories.map(category => (
          <div key={category.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-black">{category.name}</h5>
                <p className="card-text text-black">{category.name_ar}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourComponent;

export async function getServerSideProps() {
  const URL = `http://localhost:3000/api/cdd3614b-ed1e-4f99-bc0e-7d715d630f7b/courses-categories`;

  try {
    const response = await axios.get(URL);
    const categories = response.data;

    return {
      props: {
        categories,
      },
    };
  } catch (error) {
    console.error('Error fetching categories:', error);
    return {
      props: {
        categories: [],
      },
    };
  }
}
