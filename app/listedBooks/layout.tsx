import ListedBooksHeader from "../components/ListedBooksHeader";
import SortBooks from "../components/Sorted";

const ListedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>
        <SortBooks />
      </div>
      <ListedBooksHeader />
      {children}
    </div>
  );
};

export default ListedLayout;
