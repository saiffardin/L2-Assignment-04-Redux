import BorrowSummaryTable from "@/components/BorrowSummaryTable";
import FullScreenLoader from "@/components/FullScreenLoader";
import { useGetBorrowedSummaryQuery } from "@/redux/api/baseApi";

const BorrowSummaryPage = () => {
  const { data, isLoading } = useGetBorrowedSummaryQuery();

  if (isLoading) return <FullScreenLoader />;

  return (
    <div>
      <h1 className="text-2xl py-4">Borrowed Books Summary Table</h1>

      <BorrowSummaryTable rows={data || []} />
    </div>
  );
};

export default BorrowSummaryPage;
