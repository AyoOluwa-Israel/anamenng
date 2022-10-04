import React, { useEffect } from "react";
import { backgroundPicker } from "../../lib/backgroundPicker";
import "./style.scss";

const Categories = ({ categoryData }: any) => {
  return (
    <div className="category">
      <div className="category__wrapper">
        {categoryData?.map((category: any) => {
          console.log(backgroundPicker(category));
          return (
            <p key={category} className={`${backgroundPicker(category)}`}>
              {category}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
