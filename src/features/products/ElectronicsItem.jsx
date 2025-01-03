import Button from '../../ui/Button';
import Rating from '../../ui/Rating';

const ElectronicsItem = ({ product }) => {
  const { name, image, price } = product;

  return (
    <div className="bg-white rounded-lg shadow-md flex flex-col h-[400px] p-4">
      <div className="flex-grow flex justify-center items-center mb-3">
        <img src={image} alt={name} className="h-full object-contain max-h-[200px]" />
      </div>
      <div className="flex flex-col justify-between h-full">
        <div>
          <h1 className="text-lg font-bold text-gray-800">{name}</h1>
          <p className="text-md text-gray-600">#{price}</p>
          <Rating />
        </div>
        <Button className="bg-indigo-600 text-white py-2 mt-2 rounded-md hover:bg-indigo-500 transition duration-300 w-full">
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ElectronicsItem;
