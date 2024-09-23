import { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoHeart } from "react-icons/io5";

interface prop {
  onClick: () => void;
}

const Like = ({ onClick }: prop) => {
  let [liked, setLiked] = useState(true);
  const handleClick = () => {
    setLiked(!liked);
    if (onClick) onClick();
  };
  return (
    <>
      {liked ? (
        <IoMdHeartEmpty
          onClick={handleClick}
          color="red "
          size={40}
        ></IoMdHeartEmpty>
      ) : (
        <IoHeart color="red" onClick={handleClick} size={40}></IoHeart>
      )}
    </>
  );
};

export default Like;
