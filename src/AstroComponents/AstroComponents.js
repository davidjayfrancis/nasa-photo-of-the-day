import React from "react";
import AstroCard from "./AstroCard.js";
import axios from "axios";

export default function AstroComponents() {
  {
    /* 1. do the axios call in a effect hook
    2. have a AstroCard tag */
  }
  const [img, setImg] = React.useState([]);

  React.useEffect(() => {
    async function getData() {
      try {
        const imgData = await axios.get(
          "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-07-22"
        );
        console.log(imgData);
        setImg(imgData.data);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  return (
    <div>
      <AstroCard
        title={img.title}
        date={img.date}
        url={img.url}
        description={img.explanation}
      />
    </div>
  );
}
