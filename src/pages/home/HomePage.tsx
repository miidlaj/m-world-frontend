import { Link } from "react-router-dom";
import CommonHeader from "../../components/shared/common-header";


const HomePage = () => {
    const apps = [
        { name: "Login", link: "/login" },
        { name: "More Apps", link: "/more-apps" },
        { name: "New Expenses", link: "/new-expenses" },
        { name: "Financial Costs", link: "/new-expenses/financial-costs" },
        { name: "Fiscal Costs", link: "/new-expenses/fiscal-costs" },
        { name: "Operating Costs", link: "/new-expenses/operating-costs" },
        { name: "New Revenue", link: "/new-revenue" },
      ];
    
      return (
        <>
          <CommonHeader breadcrumbs={["Home"]}>
            <div className="h-max">
              <div className="shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-md max-w-screen-md m-auto my-5 md:my-20">
                <div className="bg-primary p-5 w-full rounded-t-md text-center">
                  <span className="font-medium text-white text-xl">All Links</span>
                </div>
    
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8 bg-white rounded-b-md">
                  {apps.map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-center py-2 rounded-xl`}
                    >
                      <Link className="text-primary hover:underline underline-offset-2" to={item.link}>{item.name}</Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CommonHeader>
        </>
      );
    };
    

export default HomePage;