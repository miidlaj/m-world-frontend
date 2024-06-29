import { Check, X } from "lucide-react";
import CommonHeader from "../../../components/shared/common-header";
import CommonFooter from "../../../components/shared/common-footer";
import Keypad from "../../../components/shared/keypad";
import OperatingCostsForm from "./components/operating-costs-form";

const OperatingCostsPage = () => {
  return (
    <>
      <CommonHeader breadcrumbs={["Home", "New Expenses", "Operating Costs"]}>
        <div className="relative flex-1">
          <div className="shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-md max-w-screen-xl mx-auto my-10 mb-40">
            <div className="bg-red-100 p-4 w-full rounded-t-md text-center">
              <span className="font-medium text-red-400 text-lg">
                Operating Costs
              </span>
            </div>

            <div className="grid grid-cols-4 bg-white rounded-b-md">
              <div className="col-span-4 lg:col-span-1 bg-primary/5 bg-opacity-10 border-r border-gray-300/50">
                <div className="flex flex-col gap-3 p-5 pb-6 font-medium text-sm">
                  {[
                    "Salaries",
                    "Advertising",
                    "Raw Material",
                    "Semi Raw Material",
                    "License Fees",
                    "Energy",
                    "Water",
                    "Telecommunication",
                    "Periodic Expenses",
                  ].map((item, index) => (
                    <>
                      {index === 1 ? (
                        <div
                          key={index}
                          className="w-full bg-primary text-center py-2 rounded-md cursor-pointer"
                        >
                          <span className="text-white">{item}</span>
                        </div>
                      ) : (
                        <div
                          key={index}
                          className="w-full border-2 border-primary/30 text-center py-2 rounded-md cursor-pointer"
                        >
                          <span className="text-primary">{item}</span>
                        </div>
                      )}
                    </>
                  ))}

                  <div className="w-full border-2 border-dashed border-primary/30 text-center py-2 rounded-md cursor-pointer opacity-75">
                    <span className="text-primary opacity-70">
                      + Add a new type
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-span-4 md:col-span-2 lg:col-span-2 p-4 flex justify-between flex-col w-full">
                <OperatingCostsForm />

                <div className="flex justify-end space-x-4 p-4">
                  <button className="px-4 py-2 flex items-center justify-center border-[3px] border-primary text-primary rounded-full">
                    <Check />
                  </button>
                  <button className="px-4 py-2 flex items-center justify-center border-red-500 border-[3px] text-red-500 rounded-full">
                    <X />
                  </button>
                </div>
              </div>

              <div className="col-span-4 md:col-span-2 lg:col-span-1 bg-primary/5 bg-opacity-10 border-l border-gray-300/50">
                <div className="p-12">
                  <Keypad />
                </div>

                <div className="w-full border-t border-gray-300/50 p-4">
                  <div className="flex flex-col gap-3 p-5 pb-6 bg-white rounded-b-md text-xs sm:text-sm font-medium">
                    {[
                      "View Reciept",
                      "Save Reciept in M'Doc",
                      "Print Reciept",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="w-full border-2 border-primary/30 text-center py-2 rounded-md cursor-pointer"
                      >
                        <span className="text-primary text-base">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <CommonFooter />
        </div>
      </CommonHeader>
    </>
  );
};

export default OperatingCostsPage;
