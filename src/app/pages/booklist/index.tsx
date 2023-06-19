import { useDispatch, useSelector } from "react-redux";
import { IStore } from "app/config/@interfaces/redux.interface";
import { IBook } from "app/config/@interfaces/data.interface";
import { BookmarkIcon } from "@heroicons/react/24/solid";
import { setList } from "app/store/main.slice";

const BookList = () => {
  const list = useSelector((state: IStore) => {
    return state.main.list;
  });
  const dispatch = useDispatch();
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
      <h1 className="text-3xl font-bold mb-4">Reading List</h1>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 text-sm md:text-base flex-wrap mt-6 min-h-[60vh]">
        {list.length ? (
          list.map((book) => {
            return (
              <div className="flex items-start border border-red-100 dark:border-neutral-500/10 relative w-full max-w-[400px]">
                <div className="w-1/2 flex-none aspect-[2/3] border-r border-red-100 dark:border-neutral-500/10 relative">
                  <img src={book.thumbnail} className="w-full h-full" alt="book thumbnail"/>
                  <div
                    onClick={() => {
                      handleDelete(book);
                    }}
                    className="absolute top-2 left-2 cursor-pointer p-2 rounded-full shadow-md bg-red-200"
                  >
                    <BookmarkIcon className="w-6 h-6 text-neutral-900/70" />
                  </div>
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

export default BookList;
