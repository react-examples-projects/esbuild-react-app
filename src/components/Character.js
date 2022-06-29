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
        <h2 className="character-name">{name}</h2>
        <p>{species}</p>
        <p>{gender}</p>
      </div>
    </div>
  );
}
