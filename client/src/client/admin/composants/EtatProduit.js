import React from 'react'
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import { AiOutlineFileDone } from "react-icons/ai";
import { AiOutlineFrown } from "react-icons/ai";
import { AiOutlineShake } from "react-icons/ai";

import '../../style/admin/EtatProduit.css'

export const EtatProduit = () => {
  return (
    <div>
        <div className="flex">
            <div className="etatproduit">
                <div className="etatglobal">
                    <AiOutlineShake fill='yellow'/>
                    Commande
                </div>
                <div className="etatglobal">
                    <AiOutlineFrown fill='red'/>
                    Retour
                </div>
                <div className="etatglobal">
                    <AiOutlineDeliveredProcedure fill='orange'/>
                    Expédié
                </div>
                <div className="etatglobal">
                    <AiOutlineFileDone fill='green'/>
                    Délivré
                </div>
            </div>
            <div className="soustraitant">
                sous-traitant
            </div>
        </div>
    </div>
  )
}
