import { useSelector } from "react-redux";
import SavedList from "./SavedList";

const SavedItem = () => {
  const saved = useSelector((state) => state.saved.items);
  console.log(saved);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Saved Items</h1>

      <div className="">
        {!saved.length ? (
          <p className="text-gray-500">No saved item.</p>
        ) : (
          saved.map((item) => <SavedList key={item.id} item={item} />)
        )}
      </div>
    </div>
  );
};

export default SavedItem;
