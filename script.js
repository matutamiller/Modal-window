// Get modal element
var modal = document.getElementById('simpleModal');

// Get open modal button
var modalBtn = document.getElementById('modalBtn');

// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for open click
modalBtn.addEventListener('click', openModal);

// Function to open modal
function openModal(){
  modal.style.display = 'block';
}

// Listen for close click
closeBtn.addEventListener('click', closeModal);

// Function to close modal
function closeModal(){
  modal.style.display = 'none';
}


// Listen for outside click
window.addEventListener('click', outsideClick);

// Function to close modal if outside click
function outsideClick(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
}