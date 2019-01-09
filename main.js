
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('close-btn');
const plus = document.getElementById('plus');

plus.addEventListener('click', function() {
    modal.style.display = "block";
}  )

closeModalBtn.addEventListener('click', function(){
    modal.style.display = "none";
})

window.addEventListener('click', function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }});
