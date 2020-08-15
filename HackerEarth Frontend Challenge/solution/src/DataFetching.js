import React from "react";
import Card from "./Card";
import Datas from "./Data";

export default function DataFetching() {
  var datas = Datas();
  return (
    <div className="flex-container">
      {datas.map((data) => (
        <Card
          key={data.id}
          id={data.id}
          name={data.name}
          price={data.price}
          description={data.description}
          image={data.image}
        />
      ))}
    </div>
  );
}
