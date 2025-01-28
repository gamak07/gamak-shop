import SavedList from "./SavedList";
import { useSaved } from "./useSaved";
import { useUser } from "../authentication/useUser";
import Loading from "../../ui/Loading";

const SavedItem = () => {
  const { user } = useUser()
  const userId = user?.id
  const { isPending, saved } = useSaved(userId)

  if(isPending) return <Loading />

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Saved Items</h1>

      <div className="">
        {!saved.length ? (
          <p className="text-gray-500">No saved item.</p>
        ) : (
          saved.map((item) => <SavedList key={item.id} item={item} userId={userId} />)
        )}
      </div>
    </div>
  );
};

export default SavedItem;
