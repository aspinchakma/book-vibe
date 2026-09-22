import ListedBooksHeader from "../components/ListedBooksHeader";

const ListedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ListedBooksHeader />
      {children}
    </div>
  );
};

export default ListedLayout;
