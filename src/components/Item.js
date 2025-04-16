import React,{useState}from "react";

function Item({ name, category }) {
   const [isAdded, setIsAdded] = useState(false);
  const toggleBtn = (e) => { 
    setIsAdded(!isAdded);
   }
  return (
    <li className={isAdded ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
         onClick={toggleBtn} 
         className={isAdded?'remove':'add'}>
         {isAdded ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
