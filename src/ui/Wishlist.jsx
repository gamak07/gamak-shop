import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import Button from "./Button";

const Wishlist = ({ handleAddToSaved, handleRemove, isSaved }) => {
  const handleToggleSave = () => {
    if (isSaved) {
      handleRemove(); // Remove from saved
    } else {
      handleAddToSaved(); // Add to saved
    }
  };

  return (
    <Button
      className="absolute right-0 text-[25px] text-indigo-600"
      onClick={handleToggleSave}
    >
      {isSaved ? <IoMdHeart /> : <IoMdHeartEmpty />}
    </Button>
  );
};

export default Wishlist;
