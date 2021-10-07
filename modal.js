/* function */
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const modal = {
  // Liste sur tout les liens des modals
  modalLink: document.querySelectorAll("[data-modal]"),
  modal: {},
  init() {
    // boucle sur chaque lien de modal
    this.modalLink.forEach(link => {
      // Récupère id de la modal
      let mid = link.dataset.modal;
      // stock la modal dans un tableau
      this.modal[mid] = document.getElementById(mid);
      if (this.modal[mid] === null) {
        return;
      }
      // Evénement sur chaque modal
      link.addEventListener("click", () => this.open(mid));
      this.modal[mid].getElementsByClassName("close")[0].addEventListener("click", () => this.close(mid));
    } )
  },
  open(mid) {
    this.modal[mid].style.display = "block";
  },
  close(mid) {
    this.modal[mid].style.display = "none";
  }
}

modal.init();


const form_inscription = {
  error_msg: [],
  inputs: {
    first_name: {
      require: true,
      error_msg: "Le champ Prénom est requis"
    },
    last_name: {
      require: true,
      error_msg: "Le champ Nom est requis"
    },
    email: {
      require: true,
      error_msg: "Veuillez saisir une adresse email valide",
      regex: /^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]­{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$/
    },
    birthdate: {
      require: true,
      error_msg: "Veuillez saisir une date de naissance valide",
      regex:  /^(19|20)\d{2}[-](0?[1-9]|1[012])[-](0[1-9]|[12]\d|3[01])$/
    }
  },
  onSubmit(event) {
    event.preventDefault();
    form_inscription.validateInputs();
    if (form_inscription.error_msg.length > 0) {
      form_inscription.error_msg.forEach(msg => {
        document.getElementsByClassName("error_msg")[0].innerHTML += msg + "<br>";
      });
    }
    console.log("error_message", form_inscription);
  },
  validateInputs() {
    const form_inscription = document.getElementById("form_inscription");
    this.error_msg = [];
    document.getElementsByClassName("error_msg")[0].innerHTML = "";
    for (const [name, input] of Object.entries(this.inputs)) {
      form_inscription.elements[name].classList.remove("erreur");
      if (
          (input.require === true && form_inscription.elements[name].value.length === 0) ||
          (input.require === true && input.regex && input.regex.exec(form_inscription.elements[name].value) === null)
        ) {
        this.error_msg.push(input.error_msg);
        form_inscription.elements[name].classList.add("erreur");
      }
    }
  }
}

document.getElementById("form_inscription").addEventListener("submit", form_inscription.onSubmit);











