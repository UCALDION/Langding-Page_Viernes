var cartModal = document.getElementById("cartModal");
var messageModal = document.getElementById("messageModal");

// Get the buttons that open the modals
var cartBtn = document.getElementById("cartBtn");
var messageBtn = document.getElementById("messageBtn");

// Get the <span> elements that close the modals
var closeCart = document.getElementById("closeCart");
var closeMessage = document.getElementById("closeMessage");

// When the user clicks the button, open the modal 
cartBtn.onclick = function() {
    cartModal.style.display = "block";
}

messageBtn.onclick = function() {
    messageModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeCart.onclick = function() {
    cartModal.style.display = "none";
}

closeMessage.onclick = function() {
    messageModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == cartModal) {
        cartModal.style.display = "none";
    }
    if (event.target == messageModal) {
        messageModal.style.display = "none";
    }
}