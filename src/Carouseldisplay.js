import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";

export default Carouseldisplay = () => {
  const arr1 = [
    "https://picsum.photos/100/100",
    "https://picsum.photos/100/100",
    "https://picsum.photos/100/100",
    "https://picsum.photos/100/100",
    "https://picsum.photos/100/100"
  ];

  const [arr, setArr] = useState(arr1);
  const labels = ["Id 1", "Id 2", "Id 3", "Id 4", "Id 5"];
  return (
    <Carousel
      onChange={(e) => {
        console.log(e, typeof e);
        if (e === 4) {
          let demoArr = arr;
          demoArr[e] = "https://picsum.photos/100/200";
          setArr(demoArr);
        }
      }}
    >
      {arr.map((value, index) => (
        <div>
          <img alt="" src={value} />
          {labels.map((label) => (
            <span> {label} </span>
          ))}
        </div>
      ))}
    </Carousel>
  );
};
