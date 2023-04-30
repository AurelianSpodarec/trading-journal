import { Link } from "react-router-dom";
import { configApp } from "config/configApp";
import NavList from "./Nav/NavList";

function Navigation() {
    return (
    <nav className={`flex flex-col sidebar-scrollbar z-30 w-[50px] border-r border-[#2a2a2a]`} style={{ "userSelect": "none"}} >
    <div className="h-full w-full text-white">

        <div className="flex flex-col flex-1 h-full">
            <NavList />
            {/* <NavList data={configNavigationSecondary} className="justify-end" />                    */}
        </div>

    </div>
    </nav>
    )
}

export default Navigation;