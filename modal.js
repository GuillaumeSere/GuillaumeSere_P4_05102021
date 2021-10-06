
// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelectorAll("#close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal
modalClose.forEach(Element=>Element.addEventListener("click", closeModal));

/* function */
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal
function closeModal() {
  modalbg.style.display = "none";
}

// récupération de l'élément id="form"
var form_inscription = document.getElementById("form");

function valider (event) {
  // code a exécuter lorsque le formulaire sera validé
}

// ajoute l’événement 
form_inscription.addEventListener('submit', valider);

// Récupération des champs du formulaire par leurs name
var champ_prenom = form_inscription.elements["first"];
var champ_nom = form_inscription.elements["last"];
var champ_email = form_inscription.elements["email"];
var champ_birthdays = form_inscription.elements["birthdate"];
var champ_tournois = form_inscription.elements["quantity"];
var champ_villes = form_inscription.elements["location"];

// le formulaire est-il OK?
var form_OK = true;

// Au final, on empeche l'envoi du formulaire si form_OK est faux
if(!form_OK){
  event.preventDefault();
}

// REGEX pour la validation d'email
var regex = /^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]­{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$/ ;
if (regex.exec(champ_email.value) == null) {
    form_OK = false;
}

if(champ_nom.value == ""){
  form_OK = false;
  champ_nom.classList.add("erreur");
}else{
  champ_nom.classList.remove("erreur");
}





