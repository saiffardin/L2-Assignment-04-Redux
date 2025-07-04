import { getBookCols } from "@/pages/BooksPage/columns";
import { Table } from "antd";
import { IBook } from "./types";

const data: IBook[] = [
  {
    _id: "6857c5c938f9962a86b957d4",
    title: "Huge miss whether",
    author: "Christopher Walker",
    genre: "SCIENCE",
    isbn: "817-24-142268-6",
    description:
      "Short computer structure near lawyer those mouth. Than financial worry huge.",
    copies: 0,
    available: false,
    createdAt: "2025-06-22T07:34:18.853Z",
    updatedAt: "2025-07-03T18:48:07.672Z",
  },
  {
    _id: "6857c5c938f9962a86b957d5",
    title: "Up give",
    author: "Nicholas West",
    genre: "SCIENCE",
    isbn: "441-25-167492-3",
    description:
      "Find long itself factor. Maybe make single hundred. Religious if indeed production sister positive sit sport.",
    copies: 0,
    available: false,
    createdAt: "2025-06-22T07:34:18.853Z",
    updatedAt: "2025-07-03T18:53:46.909Z",
  },
  {
    _id: "6857c5c938f9962a86b957d0",
    title: "Check standard officer town",
    author: "Jeffrey Jimenez",
    genre: "HISTORY",
    isbn: "623-95-814988-2",
    description:
      "Small employee enough fast bag environment. Style institution ok whether top sign. Together significant career loss.",
    copies: 3,
    available: false,
    createdAt: "2025-06-22T07:34:18.853Z",
    updatedAt: "2025-06-22T07:34:18.853Z",
  },
  {
    _id: "6857c5c938f9962a86b957d3",
    title: "Sure key role",
    author: "Veronica Elliott",
    genre: "FICTION",
    isbn: "812-97-385777-7",
    description:
      "By budget system television responsibility knowledge plant. Analysis green when order hear weight. Rise eight spring health executive wide listen.",
    copies: 1,
    available: true,
    createdAt: "2025-06-22T07:34:18.853Z",
    updatedAt: "2025-06-22T07:34:18.853Z",
  },
  {
    _id: "6857c5c938f9962a86b957d1",
    title: "Doctor be often sell",
    author: "Daniel Cross",
    genre: "NON_FICTION",
    isbn: "624-26-677892-6",
    description:
      "Real think away suddenly meet. Fund community pattern window lead recognize agree. Toward likely born executive call.",
    copies: 14,
    available: true,
    createdAt: "2025-06-22T07:34:18.853Z",
    updatedAt: "2025-06-22T07:34:18.853Z",
  },
  {
    _id: "6857c5c938f9962a86b957cf",
    title: "High reality",
    author: "John Young",
    genre: "SCIENCE",
    isbn: "312-89-511698-3",
    description:
      "Scientist later summer beyond. Fight admit stock general interest prove until. When movement toward.",
    copies: 4,
    available: false,
    createdAt: "2025-06-22T07:34:18.853Z",
    updatedAt: "2025-06-22T07:34:18.853Z",
  },
  {
    _id: "6857c5c938f9962a86b957cd",
    title: "Make address",
    author: "Gregory Oconnor",
    genre: "NON_FICTION",
    isbn: "924-27-507215-8",
    description:
      "Suddenly true husband job her position. Ground contain experience crime prove.",
    copies: 9,
    available: true,
    createdAt: "2025-06-22T07:34:18.853Z",
    updatedAt: "2025-06-22T07:34:18.853Z",
  },
  {
    _id: "6857c5c938f9962a86b957cc",
    title: "Seem pay window",
    author: "Brandi Garcia",
    genre: "FANTASY",
    isbn: "247-10-803138-6",
    description:
      "They environmental second conference eight set likely. Yourself Republican benefit family read. Cell very play if treatment for final artist. Social then than head wish land official.",
    copies: 5,
    available: false,
    createdAt: "2025-06-22T07:34:18.853Z",
    updatedAt: "2025-06-22T07:34:18.853Z",
  },
  {
    _id: "6857c5c938f9962a86b957ce",
    title: "Any size as level",
    author: "Christine Walker",
    genre: "FANTASY",
    isbn: "615-54-572679-9",
    description:
      "President know nature her series whole art drug. Customer authority vote sea race especially avoid.",
    copies: 5,
    available: true,
    createdAt: "2025-06-22T07:34:18.853Z",
    updatedAt: "2025-06-22T07:34:18.853Z",
  },
  {
    _id: "6857c5c938f9962a86b957d2",
    title: "Fill cold specific",
    author: "Bradley Walker",
    genre: "NON_FICTION",
    isbn: "829-46-746672-9",
    description:
      "Economy beat fact source national some camera. Only most town machine carry contain movement. Pick money television kind return.",
    copies: 14,
    available: false,
    createdAt: "2025-06-22T07:34:18.853Z",
    updatedAt: "2025-06-22T07:34:18.853Z",
  },
];

const BooksPage = () => {
  const handleEditBook = (row: IBook) => {
    console.log("================ EDIT");
    console.log(row);
  };

  const handleDeleteBook = (row: IBook) => {
    console.log("================ delete");
    console.log(row);
  };

  const handleBorrowBook = (row: IBook) => {
    console.log("================ Borrow");
    console.log(row);
  };

  return (
    <div>
      <div className="">
        <h1 className="text-2xl py-2 pt-5">Books Table</h1>
      </div>

      <Table<IBook>
        columns={getBookCols({
          onBookBorrow: handleBorrowBook,
          onBookEdit: handleEditBook,
          onBookDelete: handleDeleteBook,
        })}
        dataSource={data}
      />
    </div>
  );
};

export default BooksPage;
