import React from "react";
import { backgroundPicker } from "../../lib/backgroundPicker";
import "./style.scss";

const Categories = ({ categoryData, filterCategory }: any) => {
  // const allCategories = ["all", ...categoryData];
  return (
    <div className="category">
      <div className="category__wrapper">
        {categoryData?.map((category: any) => {
          return (
            <p
              data-aos="zoom-in"
              data-aos-duration="1500"
              key={category}
              className={`${backgroundPicker(category)}`}
              onClick={() => filterCategory(category)}
            >
              {category.toUpperCase()}
            </p>
          );
        })}

        <p
          data-aos="zoom-in"
          data-aos-duration="1500"
          className={`${backgroundPicker(undefined)}`}
          onClick={() => filterCategory(undefined)}
        >
          UNCATEGORIZED
        </p>
      </div>
    </div>
  );
};

export default Categories;
