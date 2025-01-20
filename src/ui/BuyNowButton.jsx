import Button from "./Button";
import {useNavigate} from 'react-router-dom'

const BuyNowButton = ({ price }) => {
  console.log(price)
  const navigate = useNavigate()
  return (
    <Button
      className="bg-indigo-600 text-white py-2 mt-2 rounded-md hover:bg-indigo-500 transition 
          duration-300 w-full"
          onClick={()=>navigate('/checkout', {state: {price}})}
    >
      Buy Now
    </Button>
  );
};

export default BuyNowButton;
