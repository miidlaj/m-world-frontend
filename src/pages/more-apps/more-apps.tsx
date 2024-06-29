import CommonHeader from "../../components/shared/common-header";

const MoreAppsPage = () => {
  const apps = [
    { name: "Event", color: "bg-pink-100" },
    { name: "Media", color: "bg-blue-100" },
    { name: "Network", color: "bg-orange-100" },
    { name: "FRM", color: "bg-teal-400" },
    { name: "Buy-Sell", color: "bg-blue-200" },
    { name: "Project", color: "bg-red-200" },
    { name: "Government", color: "bg-gray-200" },
    { name: "Finance", color: "bg-green-200" },
    { name: "CFD", color: "bg-cyan-100" },
    { name: "Butic", color: "bg-green-400" },
  ];

  return (
    <>
      <CommonHeader breadcrumbs={["Home", "More"]}>
        <div className="h-max">
          <div className="shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-md max-w-screen-md mx-auto mt-0 lg:mt-20">
            <div className="bg-primary p-5 w-full rounded-t-md text-center">
              <span className="font-medium text-white text-xl">More Apps</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8 bg-white rounded-b-md">
              {apps.map((app, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-center py-2 rounded-xl ${app.color}`}
                >
                  <img src="/logo-temp.png" alt="logo" width={150} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </CommonHeader>
    </>
  );
};

export default MoreAppsPage;
