import { useState } from "react";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import { setBooks, setList } from "app/store/main.slice";
import { IStore } from "app/config/@interfaces/redux.interface";
import { IBook } from "app/config/@interfaces/data.interface";
import { LoadingContext } from "app/components/LoadingProvider";
import { ToastrContext } from "app/components/ToastrProvider";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon as BookmarkDoneIcon } from "@heroicons/react/24/solid";

const Dashboard = () => {
  const [query, setQuery] = useState<string>("");
  const books = useSelector((state: IStore) => {
    return state.main.books;
  });
  const list = useSelector((state: IStore) => {
    return state.main.list;
  });
  const { setLoading } = useContext(LoadingContext);
  const notify = useContext(ToastrContext);
  const dispatch = useDispatch();

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=5`
      );
      const data = await response.json();
      if (data.items) {
        const result: IBook[] = data.items.map((item: any) => {
          return {
            id: item.id,
            author: item.volumeInfo.authors?.join(", "),
            title: item.volumeInfo.title,
            thumbnail: item.volumeInfo.imageLinks
              ? item.volumeInfo.imageLinks.thumbnail
              : "https://jsoifjie",
            company: item.volumeInfo.publisher,
          };
        });
        dispatch(setBooks(result));
      } else {
        dispatch(setBooks([]));
      }
      setLoading(false);
    } catch (error) {
      notify.error("Internet Error occurred.");
      console.error("Error occurred during search:", error);
    }
  };
  const handleSave = (item: IBook) => {
    dispatch(setList([...list, item]));
  };
  const handleDelete = (itemDelete: IBook) => {
    dispatch(
      setList(
        list.filter((item) => {
          return item !== itemDelete;
        })
      )
    );
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Book Search</h1>
      <div className="flex items-center gap-2">
        <input
          placeholder="Search index..."
          className="w-full py-2.5 pl-4 pr-10 rounded-md bg-red-200 dark:bg-neutral-950/50 border-2 border-neutral-950/10 outline-none placeholder:text-neutral-600/70 dark:placeholder:text-neutral-800 focus:border-red-400/80 m-color-transition"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button
          className="flex items-center gap-2 outline-none bg-red-300 p-2.5 px-4 rounded-md dark:bg-neutral-950"
          onClick={handleSearch}
        >
          <Icon icon={"mdi:search"} className="w-6 h-6" />
          Search
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 text-sm md:text-base flex-wrap mt-6 min-h-[60vh]">
        {books.length ? (
          books.map((book) => {
            return (
              <div
                key={"book-" + book.id}
                className="flex items-start border border-red-100 dark:border-neutral-500/10 relative w-full max-w-[400px]"
              >
                <div className="w-1/2 flex-none aspect-[2/3] border-r border-red-100 dark:border-neutral-500/10 relative">
                  <img
                    src={book.thumbnail}
                    className="w-full h-full"
                    alt="book thumbnail"
                  />
                  {list.includes(book) ? (
                    <div
                      onClick={() => {
                        handleDelete(book);
                      }}
                      className="absolute top-2 left-2 cursor-pointer p-2 rounded-full shadow-md bg-red-200"
                    >
                      <BookmarkDoneIcon className="w-6 h-6 text-neutral-900/70" />
                    </div>
                  ) : (
                    <div
                      onClick={() => {
                        handleSave(book);
                      }}
                      className="absolute top-2 left-2 cursor-pointer p-2 rounded-full shadow-md bg-red-200"
                    >
                      <BookmarkIcon className="w-6 h-6 text-neutral-900/70" />
                    </div>
                  )}
                </div>
                <div className="p-4 px-2 md:px-4 flex flex-col gap-2">
                  <div className="text-red-400">
                    <div className="text-neutral-500/50">Title</div>
                    {book.title}
                  </div>
                  <div>
                    <div className="text-neutral-500/50">Authors</div>
                    {book.author || "unknown"}
                  </div>
                  <div>
                    <div className="text-neutral-500/50">Publisher</div>
                    {book.company || "unknown"}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div>No result</div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
