import NavList from "./components/NavList";
import { configDashboard } from "@/config/configDashboard";

function Navigation() {
    return (
    <nav className="flex flex-col sidebar-scrollbar z-30 w-[50px] bg-[#151c23] border-r border-r-gray-300">
    <div className="h-full w-full text-white">

        <div className="flex flex-col flex-1 h-full">
            <NavList data={configDashboard.navigation} />
            {/* <NavList data={configNavigationSecondary} className="justify-end" />                    */}
        </div>

    </div>
    </nav>
    )
}

export default Navigation;