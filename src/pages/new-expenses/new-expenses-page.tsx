import CommonHeader from "../../components/shared/common-header";
import CommonFooter from "../../components/shared/common-footer";
import { Link } from "react-router-dom";

const NewExpensesPage = () => {
  return (
    <>
      <CommonHeader breadcrumbs={["Home", "New Expenses"]}>
        <div className="relative flex-1">
          <div className="shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-md max-w-sm mx-auto my-20">
            <div className="bg-red-100 p-5 w-full rounded-t-md text-center">
              <span className="font-medium text-red-400 text-lg sm:text-xl">
                New Expenses
              </span>
            </div>

            <div className="flex flex-col gap-3 p-5 pb-6 bg-white rounded-b-md">
              {[
                { name: "Operating Costs", link: "operating-costs" },
                { name: "Fiscal Costs", link: "fiscal-costs" },
                { name: "Financial Costs", link: "financial-costs" },
              ].map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  className="w-full border-2 border-primary/30 text-center py-2 rounded-md cursor-pointer"
                >
                  <span className="text-primary text-sm sm:text-base">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <CommonFooter />
        </div>
      </CommonHeader>
    </>
  );
};

export default NewExpensesPage;
