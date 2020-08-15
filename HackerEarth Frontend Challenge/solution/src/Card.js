import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  const image_url = props.image;

  return (
    <div
      className="card bg-dark"
      style={{ width: "18rem", display: "flex", justifyContent: "center" }}
    >
      <Link classname="link" to={`/${props.id}`}>
        <img className="card-img-top" src={image_url} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <h2 className="card-text">{props.price}</h2>
          <p>{props.description}</p>
        </div>
      </Link>
    </div>
  );
}
