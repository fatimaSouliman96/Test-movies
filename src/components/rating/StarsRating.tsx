import { BiStar } from "react-icons/bi";

type TProps = {
  rating: number;
  details?: boolean;
};

const StarsRating = ({ rating, details = false }: TProps) => {
  const stars = Array.from({ length: 5 }, (_, i) => {
    const index = i + 1;

    if (index <= Math.floor(rating)) {
      return (
        <div  key={`star-${index}`} >
          <BiStar size={20} color="#ffd900"  />
        </div>

      );
    } else {
      return (
        <div key={`star-white-${index}`} >
          <BiStar size={20} color="white" />
        </div>

      );
    }
  });

  return (
    <ul
      className="rating"
    >
      {stars.map((star, index) => (
        <li className="w-[20%] shrink-0" key={index}>{star}</li>
      ))}
    </ul>
  );
};

export default StarsRating;

