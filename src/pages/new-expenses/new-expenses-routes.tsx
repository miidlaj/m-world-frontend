
import { Route, Routes } from "react-router-dom";
import NewExpensesPage from "./new-expenses-page";
import FinancialCostsPage from "./financial-costs/financial-costs-page";
import FiscalCostsPage from "./fiscal-costs/fiscal-costs-page";
import OperatingCostsPage from "./operating-costs/operating-costs-page";

const NewExpensesRoutes = () => {
  return (
    <>
     <Routes>

        <Route path="/" element={<NewExpensesPage/>} />
        <Route path="/financial-costs" element={<FinancialCostsPage/>} />
        <Route path="/fiscal-costs" element={<FiscalCostsPage/>} />
        <Route path="/operating-costs" element={<OperatingCostsPage/>} />

     </Routes>


    </>
  );
};

export default NewExpensesRoutes;
