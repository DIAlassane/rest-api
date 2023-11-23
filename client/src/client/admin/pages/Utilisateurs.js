import React from "react"
import { UtilsateursCard } from "../composants/UtilsateursCard"
import { AjouterUtilisateurs } from "../composants/AjouterUtilisateurs";

import '../../style/Users.css';

export const Utilisateurs = () => {
    
  return (
    <>
    <div className="addusers">
      <AjouterUtilisateurs />
    </div>
    <div className="userscontainer">
        <UtilsateursCard />
    </div>
    </>
  )
}
