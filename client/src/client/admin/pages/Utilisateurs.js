import React from "react"
import { UtilsateursCard } from "../composants/UtilsateursCard"

import '../../style/Users.css';
import { Navbar } from "../../components/nav-footer/Navbar";

export const Utilisateurs = () => {
    
  return (
    <>
    <Navbar />
    <div className="userscontainer">
        <UtilsateursCard />
    </div>
    </>
  )
}
