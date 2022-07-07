import useLazyloadImage from "../../hooks/useLazyLoadImage";
import SkeletonLoader from "../../assets/skeleton.gif";
import {
  BsGenderFemale,
  BsGenderMale,
  BsPersonCheck,
  BsPersonX,
} from "react-icons/bs";

export default function Character({ name, species, gender, image }) {
  const { ref } = useLazyloadImage(image);

  return (
    <div className="character">
      <img
        src={SkeletonLoader}
        alt={name}
        title={name}
        className="character-img"
        ref={ref}
      />
      <div className="character-info">
        <h3 className="character-name mb-1">{name}</h3>
        <p
          className="mt-2 mb-1 d-flex align-items-center"
          style={{ marginLeft: "2px" }}
        >
          {species === "Human" ? <BsPersonCheck /> : <BsPersonX />}
          <span className="ms-2">{species}</span>
        </p>
        <p className="m-0 d-flex align-items-center">
          {gender === "Female" ? <BsGenderFemale /> : <BsGenderMale />}
          <span className="ms-2">{gender}</span>
        </p>
      </div>
    </div>
  );
}
