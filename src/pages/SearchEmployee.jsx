import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";

const SearchEmployee = () => {
  const API = import.meta.env.VITE_API_URL;
  const { id } = useParams();

  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);

  const getEmployee = async () => {
    try {
      setLoading(true);

      const { data } = await axios.get(`${API}/employee/${id}`);

      if (data?.employee) {
        setEmployee(data.employee);
      } else {
        setEmployee(null);
        toast.error("Employee not found");
      }
    } catch (error) {
      console.log(error);
      setEmployee(null);
      toast.error("Employee not found");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getEmployee();
  }, [id]);

  return (
    <div className="container p-2 mx-auto sm:p-4 text-gray-800">
      <h2 className="mb-4 text-2xl font-semibold leading-tight">
        Employees Management
      </h2>

      {loading ? (
        <div className="text-center mt-10">Loading...</div>
      ) : employee ? (
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <thead className="bg-black">
              <tr className="text-left text-white">
                <th className="p-3">Id</th>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Department</th>
                <th className="p-3 text-right">Salary</th>
                <th className="p-3">Status</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>

            <tbody>
              <tr
                className={`border-b ${
                  employee.status === "INACTIVE"
                    ? "border-red-700 bg-red-300"
                    : "border-gray-300 bg-gray-50"
                }`}
              >
                <td className="p-3">{employee.id}</td>
                <td className="p-3">{employee.name}</td>
                <td className="p-3">{employee.email}</td>
                <td className="p-3">{employee.department}</td>
                <td className="p-3 text-right">RS {employee.salary}</td>
                <td className="p-3">{employee.status}</td>

                <td className="p-3 text-right">
                  <div className="flex gap-3">
                    <Link
                      to={`/update/${employee.id}`}
                      className="px-2 py-1 md:px-6 md:py-2 font-semibold rounded bg-indigo-600 text-gray-50"
                    >
                      Edit
                    </Link>

                    <button
                      type="button"
                      className="px-2 py-1 md:px-6 md:py-2 font-semibold rounded bg-red-600 text-gray-50"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center mt-10 text-red-600 font-semibold">
          No Employee Found
        </div>
      )}
    </div>
  );
};

export default SearchEmployee;