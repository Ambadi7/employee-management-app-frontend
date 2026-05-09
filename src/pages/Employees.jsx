import { useEffect, useState } from "react";
import Table from "../components/Table";
import axios from "axios";
import { toast } from "sonner";

const Employees = () => {
  const API = import.meta.env.VITE_API_URL;

  const [employees, setEmployees] = useState([]);

  const getAllEmployees = async () => {
    try {
      const { data } = await axios.get(
        `${API}/all-employees`
      );

      if (data && data.success) {
        setEmployees(data.employees);
        console.log(data.employees);
      }

    } catch (error) {
      console.log(error);
      toast.error(`Error in fetching all employees ${error}`);
    }
  };

  useEffect(() => {
    getAllEmployees();
  }, [employees]);

  return (
  <div>
    {employees.length === 0 ? (
      <div className="text-center mt-10 text-gray-500 font-semibold">
        No Employees Found
      </div>
    ) : (
      <Table data={employees} />
    )}
  </div>
);
};

export default Employees;