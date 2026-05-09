import { Link,useNavigate } from "react-router-dom"
import { useState } from "react";


const Dashboard = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

     const handleSubmit = (e) => {
        e.preventDefault();

        if (!query.trim()) return;

        
        navigate(`/search-employee/${query}`);
    };
  return (
    <div className="flex items-center p-1 h-16 px-8 md:px-0 bg-black text-gray-100 justify-center">
        <div className="container flex justify-center space-x-6 h-auto mx-auto">
            <Link to={"/"} type="button" className=" px-6 py-2 font-semibold rounded lg:block bg-indigo-600 text-gray-50">All Employees</Link>
            <Link to={"add-employee"} type="button" className="px-2 py-1 md:px-6 md:py-2 font-semibold rounded lg:block bg-indigo-600 text-gray-50">Add employee</Link>
            <Link to={"active-employees"}  type="button" className=" px-6 py-2 font-semibold rounded lg:block bg-indigo-600 text-gray-50">Active Employee</Link> 
            <form onSubmit={handleSubmit}>
                <div className="flex items-center md:space-x-4">
                    <div className="relative">
                        <span className="absolute inset-y-0 right-0 flex items-center pl-2">
                            <button type="submit" title="Search" className="p-1 focus:outline-none focus:ring">
                                <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 text-gray-800">
                                    <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                                </svg>
                            </button>
                        </span>
                        <input type="search" name="Search" placeholder="Search Employee ID" 
                        value={query} 
                        onChange={(e) => setQuery(e.target.value)}  
                        className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none bg-gray-100 text-gray-800 focus:bg-gray-50" />
                </div>
                
                </div>
            </form>
        </div>
    
    </div>
  )
}

export default Dashboard