import { Play } from "lucide-react";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

export default function CommonHeader({
  children,
  breadcrumbs,
}: {
  children: ReactNode;
  breadcrumbs?: string[];
}) {
  return (
    <>
      <div className="min-h-screen flex flex-col w-full bg-gradient-to-br from-white to-primary/30 to-80%">
        <header className="flex flex-col lg:flex-row items-center justify-between mx-5 md:mx-20">
          <div className="bg-[#81DA6C] rounded-b-lg py-4 flex flex-col gap-1 items-center w-max px-5">
            <img src="/logo-temp.png" alt="logo" className="w-[90px] sm:w-[125px]" />
            <span className="font-light text-xs sm:text-base text-white">Micro EDB</span>
          </div>

          <div className="flex justify-center sm:justify-start items-center py-4 overflow-x-auto gap-3 sm:gap-5 flex-wrap text-base sm:text-lg md:text-xl xl:text-2xl whitespace-nowrap">
            {breadcrumbs?.map((item, index) => (
              <>
                <Link
                  key={index}
                  to="/"
                  className={`text-primary ${
                    index === breadcrumbs?.length - 1 && "font-medium"
                  }`}
                >
                  {item}
                </Link>

                {index !== breadcrumbs?.length - 1 && (
                  <Play className="size-2 sm:size-3 md:size-4 text-primary fill-primary" />
                )}
              </>
            ))}
          </div>

          <div className="bg-[#81DA6C] rounded-b-lg py-4 flex-col gap-1 items-center w-max px-5 opacity-0 hidden lg:flex">
            <img src="/logo-temp.png" alt="logo" width={125} />
            <span className="font-light text-base text-white">Micro EDB</span>
          </div>
        </header>

        {children}
      </div>
    </>
  );
}
