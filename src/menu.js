import React from "react";
import "./App.css"

export default function Menu({ menu }) {
  return (
      <div className="outer-container">
      {menu.map((item) => {
          const { id, title, price, img, desc } = item;
        return( 
        <section key={id} className="container">
<img src={img} alt="" className="image"/>
<div className="inner-container">
<div className="title-container">
<h4 className="title">{title}</h4>
<h4 className="price">{price}</h4>
 </div>
<p>{desc}</p>
</div>

        </section>
)
      })}
      </div>
  );
}
