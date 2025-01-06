import Button from "./Button";

const ItemCount = ({ handleDecrement, handleIncrement, count }) => {
  return (
    <div>
      <Button
        className="bg-gray-200 hover:bg-gray-300"
        onClick={handleDecrement}
      >
        −
      </Button>
      <span className="text-lg">{count}</span>
      <Button
        className="bg-gray-200 hover:bg-gray-300"
        onClick={handleIncrement}
      >
        +
      </Button>
    </div>
  );
};

export default ItemCount;
