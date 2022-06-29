import React from "react";

export default function Character({ name, species, gender, image }) {
  return (
    <div className="character">
      <img
        src={image}
        loading="lazy "
        alt={name}
        title={name}
        className="character-img"
      />
      <div className="character-info">
        <h3 className="character-name mb-1">{name}</h3>
        <p className="m-0">{species}</p>
        <p className="m-0">{gender}</p>
      </div>
    </div>
  );
}
