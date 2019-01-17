
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('close-btn');
const plus = document.getElementById('plus');

plus.addEventListener('click', function () {
  modal.style.display = "block";
})

closeModalBtn.addEventListener('click', function () {
  modal.style.display = "none";
})

window.addEventListener('click', function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});


class Rectangles {

  constructor() {
    this.rectArray = [];
    this.size = null;
    this.position = null;
    this.color = null;
  };

  registerEvents() {

    const selectSize = document.querySelector('.select-size');
    selectSize.addEventListener('click', (e) => {
      this.size = e.target.dataset.value;
    });

    const selectColor = document.querySelector('.select-color');
    selectColor.addEventListener('click', (e) => {
      this.color = e.target.dataset.value;
    });

    const selectPosition = document.querySelector('.select-position');
    selectPosition.addEventListener('click', (e) => {
      this.position = e.target.dataset.value;
    });

    const addBtn = document.querySelector('.add-rec-btn');
    addBtn.addEventListener('click', this.addRectangle()
    );
  }

  render(){
    const modalContent = document.querySelector('.blackboard')
      modalContent.innerHTML = ''
      this.rectArray.forEach(function () {
        if (this.position === "start") {
          modalContent.insertBefore(this, modalContent.childNodes[0])
        } else {
          modalContent.appendChild(this);
        }
      }, this)
     
  }

  init() {
    this.registerEvents();
  }

  addRectangle() {
    if (this.size !== null && this.position !== null && this.color !== null) {
      this.rectArray.push(Rectangles(size, color, position));
      modal.style.display = 'none';
      this.render()
    } else {
      alert('wybierz wszysktie wartosci')
    }
  }


};

const newRect = new Rectangles();
newRect.init();



