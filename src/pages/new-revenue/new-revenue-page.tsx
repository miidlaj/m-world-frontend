import { Check, X } from "lucide-react";
import CommonHeader from "../../components/shared/common-header";
import CommonFooter from "../../components/shared/common-footer";
import Keypad from "../../components/shared/keypad";
import NewRevenueForm from "./components/new-revenue-form";

const products = [
  { name: "Pineapple", price: "$3.4", image: "/temp-products/pineapple.png" },
  { name: "Apple", price: "$2.4", image: "/temp-products/apple.webp" },
  { name: "Banana", price: "$3.6", image: "/temp-products/banana.jpeg" },
  { name: "Orange", price: "$1.9", image: "/temp-products/orange.png" },
  { name: "Mango", price: "$9.3", image: "/temp-products/mango.jpg" },
  { name: "Cherry", price: "$8.7", image: "/temp-products/cherry.jpg" },
];

const NewRevenuePage = () => {
  return (
    <>
      <CommonHeader breadcrumbs={["Home", "New Expenses", "Fiscal Costs"]}>
        <div className="relative flex-1">
          <div className="shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-md max-w-6xl mx-auto my-10 mb-40">
            <div className="bg-primary/30 p-4 w-full rounded-t-md text-center">
              <span className="font-medium text-green-600 text-lg">
                List of Products
              </span>
            </div>

            <div className="grid grid-cols-7 bg-white rounded-b-md">
              <div className="col-span-7 lg:col-span-3 p-4 flex justify-between flex-col w-full">
                <div className="grid grid-cols-3 gap-6">
                  {products.map((product, index) => (
                    <>
                      {index === 1 ? (
                        <div
                          key={product.name}
                          className="bg-primary p-[3.5px] rounded-md cursor-pointer"
                        >
                          <div className="bg-white w-full rounded-md">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="size-24 object-cover mx-auto"
                            />
                          </div>

                          <div className="p-2">
                            <h3 className="text-sm text-white">
                              {product.name}
                            </h3>
                            <p className="text-white font-medium text-sm">
                              {product.price}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div
                          key={product.name}
                          className="bg-primary/30 p-[3.5px] rounded-md cursor-pointer"
                        >
                          <div className="bg-white w-full rounded-md">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="size-24 object-cover mx-auto"
                            />
                          </div>

                          <div className="p-2">
                            <h3 className="text-sm text-gray-700">
                              {product.name}
                            </h3>
                            <p className="text-gray-700 font-medium text-sm">
                              {product.price}
                            </p>
                          </div>
                        </div>
                      )}
                    </>
                  ))}
                  <div className="opacity-70 bg-white p-4 py-8 rounded-md border-2 border-primary/60 border-dashed flex justify-center items-center text-primary cursor-pointer">
                    <p className="text-sm text-center">
                      + Add a new Product or Service
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-span-7 lg:col-span-4 w-full bg-primary/5 bg-opacity-10 border-l border-gray-300/30">
                <div className="flex flex-col md:flex-row w-full">
                  <div className="w-full">
                    <NewRevenueForm />
                  </div>

                  <div className="w-full flex flex-col justify-between">
                    <div className="p-12">
                      <Keypad />
                    </div>

                    <div className="flex justify-end space-x-4 p-4 mt-24">
                      <button className="px-4 py-2 flex items-center justify-center border-[3px] border-primary text-primary rounded-full">
                        <Check />
                      </button>
                      <button className="px-4 py-2 flex items-center justify-center border-red-500 border-[3px] text-red-500 rounded-full">
                        <X />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="w-full border-t border-gray-300/50 p-2">
                  <div className="flex flex-col md:flex-row gap-3 p-2 rounded-b-md text-sm sm:text-sm font-medium">
                    {[
                      "View Invoice",
                      "Save Invoice in M'Doc",
                      "Print Invoice",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="w-full border-2 border-primary/30 text-center py-2 rounded-md cursor-pointer"
                      >
                        <span className="text-primary text-sm">{item}</span>
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

export default NewRevenuePage;
