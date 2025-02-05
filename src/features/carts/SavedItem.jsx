import SavedList from "./SavedList";
import { useSaved } from "./useSaved";
import { useUser } from "../authentication/useUser";
import Loading from "../../ui/Loading";

const SavedItem = () => {
  const { user } = useUser();
  const userId = user?.id;
  const { isPending, saved } = useSaved(userId);

  if (isPending) return <Loading />;

  return (
    <div className="relative flex flex-col lg:flex-row p-6 gap-6 max-w-7xl mx-auto">
      <div className="w-full lg:w-3/4">
        <h1 className="text-2xl font-bold mb-4">Saved Items</h1>
        {saved.length === 0 ? (
          <p className="text-gray-500">No saved items.</p>
        ) : (
          saved.map((item) => <SavedList key={item.id} item={item} userId={userId} />)
        )}
      </div>
    </div>
  );
};

export default SavedItem;