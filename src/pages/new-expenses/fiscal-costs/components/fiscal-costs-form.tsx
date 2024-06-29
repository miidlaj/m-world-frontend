import { Mic } from "lucide-react";

export default function FiscalCostsForm() {
  return (
    <div className="mx-auto p-4 md:p-8 space-y-5 w-full text-sm md:text-base">
      <div className="flex items-center">
        <label className="w-1/3 font-medium text-gray-600">Amount:</label>
        <input
          type="text"
          className="w-2/3 border-b-2 border-gray-300/50 focus:outline-none focus:border-black/30"
        />
      </div>
      <div className="flex items-center">
        <label className="w-1/3 font-medium text-gray-600">Date:</label>
        <input
          type="text"
          className="w-2/3 border-b-2 border-gray-300/50 focus:outline-none focus:border-black/30"
        />
      </div>
      <div className="flex items-center">
        <label className="w-1/3 font-medium text-gray-600">Time:</label>
        <input
          type="text"
          className="w-2/3 border-b-2 border-gray-300/50 focus:outline-none focus:border-black/30"
        />
      </div>
      
      <div className="flex items-start">
        <label className="w-1/3 font-medium text-gray-600">Text note:</label>
        <textarea
        rows={3}
          className="w-2/3 border-b-2 border-gray-300/50 focus:outline-none focus:border-black/30"
        />
      </div>
      <div className="flex flex-col gap-4">
        <label className="w-1/3 font-medium text-gray-600">Vocal note:</label>
        <button className="p-2 w-max flex items-center justify-center border-[3px] border-primary/10 text-primary rounded">
          <Mic className="size-6 md:size-8" />
        </button>
      </div>
     
    </div>
  );
}
