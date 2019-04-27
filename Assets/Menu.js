class menu {
    constructor(element) {
      
        this.element = element;

        this.button = this.element.querySelector('.menu-button');
      
        this.content = this.element.querySelector('.menu-content');
      
        this.button.addEventListener('click', () => {
        this.toggleContent()
        })
    }
  
    toggleContent() {
        this.content.classList.toggle('menu-hidden');
    }
}
  


let menu = document.querySelectorAll('.menu').forEach( menu => new menu(menu));