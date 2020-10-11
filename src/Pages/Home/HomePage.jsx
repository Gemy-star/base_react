import React from 'react';
import Landing from "../landing_pages/landing";
import DrawerNavbar from "../../Components/DrawerNavbar/DrawerNavbar";

const HomePage = props =>  {
    return (<div>
    <DrawerNavbar title = "Home">
        <Landing />

    </DrawerNavbar>

    </div>)
}

export default HomePage;