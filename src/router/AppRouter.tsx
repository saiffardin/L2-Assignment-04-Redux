import { createBrowserRouter, RouterProvider } from "react-router";
import BooksPage from "@/pages/BooksPage";
import BorrowSummaryPage from "@/pages/BorrowSummaryPage";
import Layout from "@/pages/Layout";
import { PATHS } from "@/constants/paths";

const routes = [
  {
    path: PATHS.HOME,
    element: <Layout />,

    children: [
      { index: true, element: <BooksPage /> },
      {
        path: PATHS.BORROWED_BOOK_SUMMARY,
        element: <BorrowSummaryPage />,
      },
    ],
  },
];

const AppRouter = () => {
  return <RouterProvider router={createBrowserRouter(routes)} />;
};

export default AppRouter;
