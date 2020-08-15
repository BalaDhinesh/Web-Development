import React, { useState, useEffect } from "react";
import axios from "axios";
function Datas() {
  const URL = "http://starlord.hackerearth.com/recipe";
  const [datas, setData] = useState([]);
  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return datas;
}

export default Datas;
