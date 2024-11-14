import React from "react";
import categoryInfo from "../../Components/Category/categoryInfo";
import CategoryCard from "./CategoryCard";
import classes from "./Category.module.css";

const Category =()=> {
  return (
    <>
      
        <section className={classes.category__container}>
          {categoryInfo.map((ItemList) => (
            <CategoryCard key={ItemList.name} data={ItemList} />
          ))}
        </section>
      
    </>
  );
}

export default Category;
// render into pages in 'Landing'
