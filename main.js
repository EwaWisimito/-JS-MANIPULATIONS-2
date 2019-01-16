
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
    }
});


const selectSize = document.querySelector('.select-size');
 selectSize.addEventListener('click', (e)=>{
    this.size = e.target.value;
    
 }, false);
  
const selectColor = document.querySelector('.select-color');
 selectColor.addEventListener('click', (e)=>{
   this.color = e.target.value;
    
 }, false);

 const selectPosition = document.querySelector('.select-position');
 selectPosition.addEventListener('click', (e)=>{
  
    this.position = e.target.value;
    
 }, false);


class Rectangles {
    constructor(size, color, position){
        this.size = size;
        this.color = color;
        this.position = position;
        this.render()
    };
render(){
 let rectArray = [];
 if(this.size && this.color && this.position)
 rectArray.push(Rectangles(size, color, position))
 const modalContent = document.querySelector('#modal-container')
 modalContent.innerHTML = ''
 rectArray.forEach(function() {
    if (this.position === "start") {
        modalContent.insertBefore(this, modalContent.childNodes[0])
    } else {
        modalContent.appendChild(this);
    }}, this)

}
init(){
    this.render()
}
addRectangles(){
    const addBtn = document.querySelector('.add-rec-btn');
    addBtn.addEventListener('click', this.render()
    )
}


  };



  const newRect = new Rectangles;

  
newRect.addRectangles()