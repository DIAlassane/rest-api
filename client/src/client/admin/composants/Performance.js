import React from 'react'
import { FcCurrencyExchange } from "react-icons/fc";
import { AiFillDollarCircle } from "react-icons/ai";
import { FcDoughnutChart } from "react-icons/fc";

import '../../style/admin/Performance.css'

export const Performance = () => {
  return (
    <div>
        <div className="compremier">
          <h3>Performance</h3>

          <div className="credit">
            <div className="card produit">
                <FcCurrencyExchange/>
                <p>Produits</p>
            </div>

            <div className="card charge">
                <AiFillDollarCircle fill="red"/>
                <p>Charges</p>
            </div>

            <div className="card prevision">
                <FcDoughnutChart/>
                <p>Prévisions</p>
            </div>
          </div>
          <a href="/allusers">Voir plus en détail</a>
        </div>
    </div>
  )
}
