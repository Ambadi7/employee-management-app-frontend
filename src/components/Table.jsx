import { Link } from "react-router-dom";

const Table = ({ data }) => {
  return (
    <div className="container p-2 mx-auto sm:p-4 text-gray-800">
      <h2 className="mb-4 text-2xl font-semibold leading-tight">
        Employees Management
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full text-xs">
          <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
            <col className="w-24" />
          </colgroup>

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
            {data.map((employee) => (
              <tr
                key={employee._id}
                className={`border-b border-opacity-20 ${employee.status ==="INACTIVE"?"border-red-700 bg-red-300":"border-gray-300 bg-gray-50"}`}
              >
                <td className="p-3">
                  <p>{employee.id}</p>
                </td>

                <td className="p-3">
                  <p>{employee.name}</p>
                </td>

                <td className="p-3">
                  <p>{employee.email}</p>
                </td>

                <td className="p-3">
                  <p>{employee.department}</p>
                </td>

                <td className="p-3 text-right">
                  <p>RS {employee.salary}</p>
                </td>

                <td className="p-3">
                  <p>{employee.status}</p>
                </td>

                <td className="p-3 text-right">
                  <div className="flex gap-3">
                    <Link
                      to={`/update/${employee.id}`}
                      className="px-2 py-1 md:px-6 md:py-2 font-semibold rounded lg:block bg-indigo-600 text-gray-50"
                    >
                      Edit
                    </Link>

                    <button
                      type="button"
                      className="px-2 py-1 md:px-6 md:py-2 font-semibold rounded lg:block bg-red-600 text-gray-50"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;