import axios from "axios";
import { toast } from "sonner";
import { useState } from "react";

const AddEmployee = () => {

  const API = import.meta.env.VITE_API_URL;
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!id || !name || !email || !department || !salary || !status) {
        return toast.error("Please fill all fields");
      }

      const employeeData = {
        id,
        name,
        email,
        department,
        salary,
        status,
      };

      const { data } = await axios.post(
        `${API}/create-employee`,
        employeeData
      );

      if (data && data.success) {
        toast.success(data.message);

        // reset form
        setId("");
        setName("");
        setEmail("");
        setDepartment("");
        setSalary("");
        setStatus("");

        // optional navigation
        // navigate("/employees");
      } else {
        toast.error(data.message || "Failed to add employee");
      }
    } catch (error) {
      console.log(error);
      toast.error(
        `Error while adding employee: ${
          error?.response?.data?.message || error.message || error
        }`
      );
  }
  };

  return (
    <div className="max-w-4xl p-6 mx-auto bg-gray-50 rounded-lg shadow">
      <h2 className="mb-6 text-2xl font-bold text-black">
        Employee Form
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-6 md:grid-cols-2"
      >

        {/* ID */}
        <div>
          <label className="block mb-2 text-sm font-semibold text-black">
            ID
          </label>

          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Enter ID"
            className="w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
        </div>

        {/* Name */}
        <div>
          <label className="block mb-2 text-sm font-semibold text-black">
            Name
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
            className="w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 text-sm font-semibold text-black">
            Email
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            className="w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
        </div>

        {/* Department */}
        <div>
          <label className="block mb-2 text-sm font-semibold text-black">
            Department
          </label>

          <input
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            placeholder="Enter Department"
            className="w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
        </div>

        {/* Salary */}
        <div>
          <label className="block mb-2 text-sm font-semibold text-black">
            Salary
          </label>

          <input
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            placeholder="Enter Salary"
            className="w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
        </div>

        {/* Status */}
        <div>
          <label className="block mb-2 text-sm font-semibold text-black">
            Status
          </label>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          >
            <option value="">Select Status</option>
            <option value="ACTIVE">Active</option>
            <option value="INACTIVE">Inactive</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full px-6 py-3 font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;