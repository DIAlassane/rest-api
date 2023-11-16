export default function Validation(values) {
  
    const errors = {}
  
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    const numero_pattern = /^(?:(?:(?:\+|00)33[ ]?(?:\(0\)[ ]?)?)|0){1}[1-9]{1}([ .-]?)(?:\d{2}\1?){3}\d{2}$/;
    const number_pattern = /^(?:(?:(?:\+|00)33[ ]?(?:\(0\)[ ]?)?)|0){1}[1-9]{1}([ .-]?)(?:\d{2}\1?){3}\d{2}$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  
    if(values.nom === "") {
      errors.nom = "Un nom est Requis !";
    }
  
    if(values.prenom === "") {
      errors.prenom = "Un prénom est Requis !";
    }
  
    if(values.numero === "") {
      errors.numero = "Un numéro est Requis !";
    }else if (!numero_pattern.test(values.numero)) {
      errors.numero = "Le numéro est incorrect"
    }

    if(values.number === "") {
      errors.number = "Un numéro est Requis !";
    }else if (!number_pattern.test(values.number)) {
      errors.number = "Le numéro est incorrect"
    }

    if(values.lastname === "") {
      errors.lastname = "Un nom est Requis !";
    }
  
    if(values.name === "") {
      errors.name = "Un prénom est Requis !";
    }
  
    if(values.email === "") {
      errors.email = "Un email est Requis !"
    } else if (!email_pattern.test(values.email)) {
      errors.email = "L'email est incorrect"
    }

    if(values.password === "") {
      errors.password = "Un Mot-de-passe est Requis !"
    } else if (!password_pattern.test(values.password)) {
      errors.password = "Le Mot-de-passe est incorrect (A;-;p; et 8 caractères minimum)"
    }
  
    return errors;
  }
  
  
  //   const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
  // if(values.password === "") {
  //     errors.email = "Un Mot-de-passe est Requis !"
  //   } else if (!password_pattern.test(values.password)) {
  //     errors.email = "Le Mot-de-passe est incorrect"
  //   }