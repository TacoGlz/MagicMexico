//Constants Declaration
//Card Options
const cards = [{
  image: "https://images.pexels.com/photos/1143926/pexels-photo-1143926.jpeg",
  name: "Fishing",
}, {
  image: "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg",
  name: "Hiking",
}, {
  image: "https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg",
  name: "Camping",
}];

//Traveler Details
const travelerProfileDetails = document.querySelector(".traveler-profile__details");
//Name of the Traveler
const travelerProfileName = travelerProfileDetails.querySelector(".traveler-profile__name");
//Traveler Bio
const travelerProfileBio = travelerProfileDetails.querySelector(".traveler-profile__bio");
//Edit Profile
const travelerProfileEditBtn = document.querySelector(".traveler-profile__edit-btn");
//Add Places
const travelerProfileAddPlaceBtn = document.querySelector(".traveler-profile__add-place-btn");
//List of Images
const placesGalleryList = document.querySelector(".places-gallery__list");
const modalProfile = document.querySelector("#modal-id-profile");
const modalNewPlace = document.querySelector("#modal-new-place");
const modalImage = document.querySelector("#modal-image-view");
const modalCloseBtns = document.querySelectorAll(".modal__close-btn");
const modalInputs = Array.from(document.querySelectorAll(".modal__input"));
const modalForms=Array.from(document.querySelectorAll(".modal__form"));

//Profile Modal
const formEditProfile = document.querySelector("#form-edit-profile");
const profileNameInput = document.querySelector("#profile-name");
const profileBioInput = document.querySelector("#profile-description");

//New Place Modal
const formNewPlace = document.querySelector("#form-new-place");
const placeTitleInput = document.querySelector("#place-title");
const placeImageUrlInput = document.querySelector("#place-image-url");

//Open/Close Modals
function toggleModal(modal) {
  modal.classList.toggle("modal_is-opened");
}

//Close Modals Event Listener
modalCloseBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal");
    toggleModal(modal);
  });
});

//Stop Update
modalNewPlace.addEventListener("submit",(evt)=> {
  evt.preventDefault();
});

//Edit Profile Modal
travelerProfileEditBtn.addEventListener("click", () => {
  profileNameInput.value = travelerProfileName.textContent;
  profileBioInput.value = travelerProfileBio.textContent;
  toggleModal(modalProfile);
});

//Save Changes
formEditProfile.addEventListener("submit", (evt) => {
  evt.preventDefault();
  travelerProfileName.textContent = profileNameInput.value;
  travelerProfileBio.textContent = profileBioInput.value;
  toggleModal(modalProfile);
});

//Add a New Place Modal
travelerProfileAddPlaceBtn.addEventListener("click", () => {
  formNewPlace.reset();
  toggleModal(modalNewPlace);
});

//Add a New Place
formNewPlace.addEventListener("submit", (evt) => {
  evt.preventDefault();
  
  const newCard = {
    image: placeImageUrlInput.value,
    name: placeTitleInput.value
  };
  
  createCard(newCard);
  toggleModal(modalNewPlace);
});

//Create New Cards
function createCard(card) {
  const templatePlaceCard = document.querySelector("#template-place-card").content.cloneNode(true);
  const placeCardImage = templatePlaceCard.querySelector(".place-card__image");
  const placeCardTitle = templatePlaceCard.querySelector(".place-card__title");
  const placeCardDeleteBtn = templatePlaceCard.querySelector(".place-card__delete-button");

  placeCardImage.src = card.image;
  placeCardImage.alt = card.name;
  placeCardTitle.textContent = card.name;

  placeCardDeleteBtn.addEventListener("click", (evt) => {
    evt.target.closest(".place-card").remove();
  });

  placesGalleryList.appendChild(templatePlaceCard);
}

//Starting Cards
cards.forEach(card => {
  createCard(card);
});

//Modal INputs
modalForms.forEach((modalForm)=>{
  const modalButton=modalForm.querySelector(".modal__button");
  modalInputs.forEach((modalInput)=>{
    modalInput.addEventListener("input", ()=>{
       console.log("Escribiendo"); 
        const modalError = document.querySelector("#" + modalInput.id + "-error");  
       if (!modalInput.validity.valid){
        modalError.textContent = "Hay un error"
        modalError.classList.add("modal__error_visible");
       }else{
      modalError.textContent = "";
      modalError.classList.remove("modal__error_visible");
        
       }
    });
  });
});

//Profile Name
travelerProfileName.textContent = "Axel De Lara";
