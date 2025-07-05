import { useGetBooksQuery } from "@/redux/api/baseApi";
import FullScreenLoader from "@/components/FullScreenLoader";
import BookTable from "@/components/BookTable";

const BooksPage = () => {
  const { data, isLoading } = useGetBooksQuery();

  if (isLoading) return <FullScreenLoader />;

  return (
    <div>
      <div className="">
        <h1 className="text-2xl py-2 pt-5">Books Table</h1>
      </div>

      <BookTable rows={data?.data || []} />
    </div>
  );
};

export default BooksPage;
