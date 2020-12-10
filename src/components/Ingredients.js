import React from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import IngredientDetail from './IngredientDetail'
import IngredientCard from './IngredientCard'

const Ingredients = (props) => {
  const { url } = useRouteMatch();
  const linkList = props.ingredients.map((ingredient) => {
    return (
      <IngredientCard ingredient={ingredient} url={url} />
    );
  });

  return (
    <div>
      <div style={{ display: "block", justifyContent: "space-between" }}>
        <div
          style={{
            float: "left",
            padding: "10px",
            width: "30%",
            background: "#f0f0f0",
            marginLeft: "auto"
          }}
        >
          <ul style={{ listStyleType: "none", padding: 0, fontSize: "15px" }}>
            {linkList}
          </ul>
        </div>
      </div>

      <Route path={`${url}/:ingredientId`}>
        <IngredientDetail data={props.ingredients} />
      </Route>
      <Route exact path={url}>
        <p style={{ textAlign: "center" }}>Please select a ingredient.</p>
      </Route>
    </div>
  );
};

export default Ingredients;



// import React, { useState, useEffect } from 'react';

// const Ingredients = (props) => {
//   const [title, setTitle] = useState('')
//   const [content, setContent] = useState('')

//   useEffect(() => {
//     let IngredientsRef = db
//       .collection('posts')
//       .doc(props.id)

//     postRef
//       .get()
//       .then(doc => {
//         let { content, title } = doc.data();
//         setTitle(title)
//         setContent(content)
//       })

//   }, [])

//   return (
//     <div className="post_container">
//       <div className="page_header_container">
//         <PageHeader
//           style={{
//             border: '1px solid rgb(235, 237, 240)'
//           }}
//           className="site-page-header"
//           //onBack={() => null}
//           title={title}
//           subTitle="Today's post"
//         />

//         <div className="post_content_container">
//           <Card style={{ marginTop: '20px' }}>
//             {
//               content.split('\n').map((item, i) => {
//                 return <p key={i}>{item}</p>;
//               })
//             }
//           </Card>,
//                 </div>
//       </div>
//     </div>
//   )
// }

// export default Post;