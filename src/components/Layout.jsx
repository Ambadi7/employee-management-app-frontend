import { Outlet } from "react-router-dom"
import Dashboard from "./Dashboard"
import Navbar from "./Navbar"
import { Toaster } from "sonner"

const Layout = () => {
  return (
    <>
        <Navbar/>
        <Dashboard/>
        <div className="min-h-[65vh]">
            <Outlet/>
        </div>
        <Toaster position="top-right" richColors/>
    </>
  )
}

export default Layout