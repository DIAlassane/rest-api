import React, { useContext } from "react";
import '../../style/users/EditProfile.css';
import { AuthContext } from "../../components/protection/AuthContext";
import ContactForm from "../../components/ContactForm";

export const EditProfile = () => {
    const { currentUser } = useContext(AuthContext);

  return (
    <div>
      <div>
        <div className="containerep">
          <div className="row">

            <div className="childone">
              <div className="headerchild">
                <img
                  className="rounded-circle mt-5"
                  width="150px"
                  src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                />
                <div className="block">
                    <span className="font-weight-bold">{currentUser?.name} </span>
                    <span className="text-black-50">{currentUser?.email}</span>
                </div>
                
                
              </div>
            </div>

            {/* -------------------------------------------------------------------------------- */}

            <div className="setprofile">
              <div className="setchildone">

                <div className="content">
                  <h4 className="text-right">Profile Settings</h4>
                </div>

                <div className="rowchild">
                  <div className="childtow">
                    <label>Nom</label>
                    <input
                      type="text"
                      classNameName="control"
                      placeholder={currentUser?.name}
                      value=""
                    />
                  </div>
                  <div className="childtow">
                    <label>Prénom</label>
                    <input
                      type="text"
                      className="control"
                      value=""
                      placeholder={currentUser?.firstname}
                    />
                  </div>
                </div>

                <div className="parentow">
                  <div className="childtree">
                    <label>Numéro de téléphone</label>
                    <input
                      type="text"
                      className="control"
                      placeholder="Entrer un numéro de téléphone"
                      value=""
                    />
                  </div>
                  <div className="childtree">
                    <label>Addresse</label>
                    <input
                      type="text"
                      className="control"
                      placeholder="Enter une addresse"
                      value=""
                    />
                  </div>
                  <div className="childtree">
                    <label>Complément d'addresse</label>
                    <input
                      type="text"
                      className="control"
                      placeholder="Entrer un complément"
                      value=""
                    />
                  </div>
                  <div className="childtree">
                    <label>Code postale</label>
                    <input
                      type="text"
                      className="control"
                      placeholder="00 000"
                      value=""
                    />
                  </div>
                  <div className="childtree">
                    <label>Pays</label>
                    <input
                      type="text"
                      className="control"
                      placeholder="Pay"
                      value=""
                    />
                  </div>
                  <div className="childtree">
                    <label>Ville</label>
                    <input
                      type="text"
                      className="Ville"
                      placeholder="Entrer une ville"
                      value=""
                    />
                  </div>
                  <div className="childtree">
                    <label>Email</label>
                    <input
                      type="text"
                      className="control"
                      placeholder={currentUser?.email}
                      value=""
                    />
                  </div>
                  <div className="childtree">
                    <label>Mot-de-passe</label>
                    <input
                      type="password"
                      className="control"
                      placeholder="Mot de passe"
                      value=""
                    />
                  </div>
                </div>

                <div className="buttonsave">
                  <button className="button" type="button">
                    Save Profile
                  </button>
                </div>
              </div>
            </div>

            {/* -------------------------------------------------------------------------------- */}

            <div className="lastparent">
                <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
