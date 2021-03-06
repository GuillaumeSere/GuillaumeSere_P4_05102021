/* function */
function topNavToggle() {
   document.getElementById("myTopnav").classList.toggle("responsive");
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
            Object.values(this.modal[mid].getElementsByClassName("closeModal")).forEach(e => e.addEventListener("click", () => this.close(mid)));
        })
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
    error: false,
    inputsConf: {
        first_name: {
            require: true,
            regex: /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,}$/
        },
        last_name: {
            require: true,
            regex: /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,}$/
        },
        email: {
            require: true,
            regex: /^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]­{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$/
        },
        birthdate: {
            require: true,
            regex: /^(19|20)\d{2}[-](0?[1-9]|1[012])[-](0[1-9]|[12]\d|3[01])$/
        },
        quantity: {
            require: true,
        },
        location: {
            require: true,
        },
        cgu: {
            require: true,
        }
    },
    onSubmit(event) {
        event.preventDefault();
        form_inscription.validateInputs();
        // Submit faill
        if (form_inscription.error) {
           
        }
        // Submit success
        else {
            modal.close("modal_inscription");
            modal.open("modal_success_inscription");
            document.getElementById("form_inscription").reset();
        }
    },
    validateInputs() {
        // Retourne les éléments du formulaire
        const form_inscription = document.getElementById("form_inscription");
        this.error = false;
        // Boucle sur la configuration des inputs
        for (const [name, inputConf] of Object.entries(this.inputsConf)) {
            // Cherche le parent du champ (form-group)
            let formGroup = form_inscription.elements[name].length ? form_inscription.elements[name][0].parentElement : form_inscription.elements[name].parentElement;
            // Controle des champs soumit par rapport à la configuration des champs
            if (
                (inputConf.require === true && form_inscription.elements[name].value.length === 0) ||
                (inputConf.require === true && form_inscription.elements[name].type === "checkbox" && ! form_inscription.elements[name].checked) ||
                (inputConf.require === true && inputConf.regex && inputConf.regex.exec(form_inscription.elements[name].value) === null)
            ) {
                this.error = true;
                formGroup.classList.add("error");
            } else {
                formGroup.classList.remove("error"); 
            }
        }
    }  
}

document.getElementById("form_inscription").addEventListener("submit", form_inscription.onSubmit);

















