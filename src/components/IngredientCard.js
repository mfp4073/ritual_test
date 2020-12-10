import React from "react";
import { Link } from "react-router-dom";

const IngredientCard = ({ ingredient: {name, dosage, location, id}, url }) => {
  return (
    <li key={id}>
      <Link to={`${url}/${id}`}>
        <h2>{name}</h2>
        {dosage}<br/><br/>
        {location}
        <hr/>
      </Link>
    </li>
  );
};

export default IngredientCard;

