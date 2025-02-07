import { SearchIcon } from "lucide-react";

export const SearchInput = () => {
  // TODO: Add Search Functionality
  return (
    <form className="flex w-full max-w-[600px]">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search"
          className="w-full rounded-l-full border py-2 pl-4 pr-12 focus:border-blue-500 focus:outline-none"
        />
        {/* TODO: Add Remove Search Button */}
      </div>
      <button
        type="submit"
        className="py2.5 rounded-r-full border border-l-0 bg-gray-100 px-5 hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <SearchIcon className="size-5" />
      </button>
    </form>
  );
};
