import React from "react"
import { UtilsateursCard } from "../composants/UtilsateursCard"

import '../../style/Users.css';
import { Navbar } from "../../components/nav-footer/Navbar";
import { AjouterUtilisateurs } from "../composants/AjouterUtilisateurs";

export const Utilisateurs = () => {
    
  return (
    <>
    <Navbar />
    <div className="addusers">
      <AjouterUtilisateurs />
    </div>
    <div className="userscontainer">
        <UtilsateursCard />
    </div>
    </>
  )
}
