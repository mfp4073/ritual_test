import React from "react";
import { useParams } from "react-router-dom";

const IngredientDetail = ({ data }) => {
  const { ingredientId } = useParams();
  const ingredient = data.find((p) => p.id === Number(ingredientId));
  let ingredientData;

  if (ingredient) {
    ingredientData = (
      <div>
        <h3>{ingredient.name}</h3>
        <p>{ingredient.description}</p>
        <hr />
        <h4>{ingredient.dosage}</h4>
      </div>
    );
  } else {
    ingredientData = <h2>Sorry. Ingredient doesn't exist</h2>;
  }

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: "80%",
          margin: "auto",
          background: "#ffffff"
        }}
      >
        {ingredientData}
      </div>
    </div>
  );
};

export default IngredientDetail;
