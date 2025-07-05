import { useGetBooksQuery } from "@/redux/api/baseApi";
import FullScreenLoader from "@/components/FullScreenLoader";
import BookTable from "@/components/BookTable";
import AddNewBook from "@/components/AddNewBook";

const BooksPage = () => {
  const { data, isLoading } = useGetBooksQuery();

  if (isLoading) return <FullScreenLoader />;

  return (
    <div>
      <div className="flex justify-between items-center py-4 m-2">
        <h1 className="text-2xl">Books Table</h1>

        <AddNewBook />
      </div>

      <BookTable rows={data?.data || []} />
    </div>
  );
};

export default BooksPage;
