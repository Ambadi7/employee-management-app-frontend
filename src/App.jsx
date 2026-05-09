
import Layout from "./components/Layout"
import ActiveEmployees from "./pages/ActiveEmployees"
import AddEmployee from "./pages/AddEmployee"
import Employees from "./pages/Employees"
import SearchEmployee from "./pages/SearchEmployee"
import UpdateEmpolyee from "./pages/UpdateEmpolyee"
import { Route, Routes } from "react-router-dom"


function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          
          <Route index element={<Employees/>}/>
          <Route path="active-employees" element={<ActiveEmployees/>}/>
          <Route path="search-employee/:id" element={<SearchEmployee/>}/>
          <Route path="add-employee" element={<AddEmployee/>}/>
          <Route path="update/:id" element={<UpdateEmpolyee/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
