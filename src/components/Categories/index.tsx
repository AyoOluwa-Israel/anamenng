import React, { useEffect } from "react";
import { backgroundPicker } from "../../lib/backgroundPicker";
import "./style.scss";

const Categories = ({ categoryData, filterCategory }: any) => {
  // const allCategories = ["all", ...categoryData];
  return (
    <div className="category">
      <div className="category__wrapper">
        {categoryData?.map((category: any) => {
          return (
            <p key={category} className={`${backgroundPicker(category)}`} onClick={() => filterCategory(category)}>
              {category.toUpperCase()}
            </p>
          );
        })}

        <p className={`${backgroundPicker(undefined)}`} onClick={() => filterCategory(undefined)}>
          UNCATEGORIZED
        </p>
      </div>
    </div>
  );
};

export default Categories;
