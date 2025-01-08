import Button from "./Button";

const ItemCount = ({handleDecrement, handleIncrement, count}) => {
  
  return (
    <div className="flex items-center">
      <Button
        className="bg-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-400 "
        onClick={handleDecrement}
      >
        −
      </Button>
      <span className="text-[20px] font-bold px-3">{count}</span>
      <Button
        className="bg-indigo-600 hover:bg-indigo-400 rounded-md px-4 py-2"
        onClick={handleIncrement}
      >
        +
      </Button>
    </div>
  );
};

export default ItemCount;
