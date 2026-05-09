import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";

const UpdateEmpolyee = () => {
  const API = import.meta.env.VITE_API_URL;
  const { id } = useParams();
  const navigate = useNavigate();

  const [employeeId, setEmployeeId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");
  const [status, setStatus] = useState("");
  const [updateId,setUpdateId] = useState("")

  // 🔥 GET SINGLE EMPLOYEE (fill form)
  const getEmployee = async () => {
    try {
      const { data } = await axios.get(`${API}/employee/${id}`);

      if (data?.employee) {
        const emp = data.employee;

        setEmployeeId(emp.id);
        setName(emp.name);
        setEmail(emp.email);
        setDepartment(emp.department);
        setSalary(emp.salary);
        setStatus(emp.status);
        setUpdateId(emp._id)
      } else {
        toast.error("Employee not found");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error fetching employee");
    }
  };

  useEffect(() => {
    getEmployee();
  }, [id]);

  // 🔥 UPDATE EMPLOYEE
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedEmployee = {
        id: employeeId,
        name,
        email,
        department,
        salary,
        status,
      };

      const { data } = await axios.put(
        `${API}/update-employee/${updateId}`,
        updatedEmployee
      );

      if (data?.success) {
        toast.success("Employee updated successfully");

        navigate("/"); // redirect after update
      } else {
        toast.error(data.message || "Update failed");
      }
    } catch (error) {
      console.log(error);
      toast.error(
        error?.response?.data?.message || "Error updating employee"
      );
    }
  };

  return (
    <div className="max-w-4xl p-6 mx-auto bg-gray-50 rounded-lg shadow">
      <h2 className="mb-6 text-2xl font-bold text-black">
        Edit Employee
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-6 md:grid-cols-2"
      >
        {/* ID */}
        <input
          type="text"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
          className="w-full p-3 bg-gray-100 border rounded-md"
          placeholder="Employee ID"
        />

        {/* Name */}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border rounded-md"
          placeholder="Name"
        />

        {/* Email */}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border rounded-md"
          placeholder="Email"
        />

        {/* Department */}
        <input
          type="text"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="w-full p-3 border rounded-md"
          placeholder="Department"
        />

        {/* Salary */}
        <input
          type="number"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          className="w-full p-3 border rounded-md"
          placeholder="Salary"
        />

        {/* Status */}
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full p-3 border rounded-md"
        >
          <option value="">Select Status</option>
          <option value="ACTIVE">Active</option>
          <option value="INACTIVE">Inactive</option>
        </select>

        {/* Buttons */}
        <div className="flex gap-4 md:col-span-2">
          <button
            type="submit"
            className="w-full px-6 py-3 font-semibold text-white bg-indigo-600 rounded-md"
          >
            Update
          </button>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="w-full px-6 py-3 font-semibold text-white bg-red-600 rounded-md"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateEmpolyee;