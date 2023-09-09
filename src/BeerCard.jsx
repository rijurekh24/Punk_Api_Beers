import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";

const BeerCard = ({ beer }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="beer-card">
      <div className="imgContaier">
        <img
          className={!loaded ? "hidden" : ""}
          src={beer.image_url}
          alt={beer.name}
          onLoad={() => {
            setLoaded(true);
            console.log("loaded");
          }}
        />
      </div>

      <Skeleton
        height={"12rem"}
        width={200}
        className={loaded ? "hidden" : ""}
      />

      <div className="content">
        <h2>{beer.name}</h2>
        <h4>{beer.tagline}</h4>
        <p>First Brewed: {beer.first_brewed}</p>
        <p>ABV: {beer.abv}%</p>
        <p>pH: {beer.ph}</p>
      </div>
    </div>
  );
};

export default BeerCard;
