import { Search } from "lucide-react";

export default function CommonFooter() {
  return (
    <div className="absolute bottom-8 w-full">
      <div className="flex flex-wrap gap-4 justify-between px-8 md:px-36 py-4">
        <div className="flex-1 relative">
          <input
            type="text"
            name="search"
            className="w-full rounded-full focus:outline-none px-4 py-2 pl-12 h-full"
            placeholder="Search"
          />
          <Search className="text-neutral-400 absolute top-1/2 transform -translate-y-1/2 left-4 cursor-pointer" />
        </div>

        <div className="flex gap-4 justify-between w-full lg:w-max">
          <button className="md:px-20 w-full text-center rounded-full border-[3px] border-primary text-primary py-1 font-medium text-sm sm:text-base">
            More
          </button>

          <button className="md:px-20 w-full text-center rounded-full border-[3px] border-primary text-primary py-1 font-medium text-sm sm:text-base">
            Favourites
          </button>
        </div>
      </div>
    </div>
  );
}
