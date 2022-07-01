import useLazyloadImage from "../hooks/useLazyLoadImage";
import SkeletonLoader from "../assets/skeleton.gif";

export default function Character({ name, species, gender, image }) {
  const isLoaded = useLazyloadImage({ src: image });
  return (
    <div className="character">
      <img
        src={isLoaded ? image : SkeletonLoader}
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
