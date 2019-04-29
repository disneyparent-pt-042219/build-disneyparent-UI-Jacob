class Carousel {
    
    constructor(element) {
        this.element = element;
        this.images = [...document.querySelectorAll('.carousel img')]
            .map(img => new CarouselImage(img));
        this.buttons = [...document.querySelectorAll('[class$="button"]')]
            .map(button => new CarouselButton(button));
        this.current = 0;
 
        this.images[this.current].show();
        this.registerEventHandlers();
        this.timer = this.autoSlide();
    }
 
    registerEventHandlers() {
        this.buttons.forEach(button => {
            button.element.addEventListener('click', (event) => {
                this.slideImage(button.direction);
            });
        });
 
        this.element.addEventListener('mouseenter', event => clearInterval(this.timer));
        this.element.addEventListener('mouseleave', event => {
            this.timer = this.autoSlide()
        });
    }
 
    slideImage(direction) {
        let next;
        if (direction === 'left') {
            next = (this.current < this.images.length - 1) ? this.current + 1 : 0;
        } else {
            next = (this.current > 0) ? this.current - 1 : this.images.length - 1;
        }
 
        this.images[this.current].hide();
        this.images[next].show();
        this.current = next;
    }
 
    autoSlide() {
        return setInterval(() => {
            this.slideImage('left');
        }, 2500)
    }
 }
 
 class CarouselImage {
 
    constructor(img) {
        this.img = img;
    }
 
    show() {
        this.img.style.display = 'inline-block';
    }
 
    hide() {
        this.img.style.display = 'none';
    }
 }
 
 class CarouselButton {
    
    constructor (element) {
        this.element = element;
        this.direction = this.getButtonDirection()
    }
 
    getButtonDirection() {
        return this.element.className.split('-')[0];
    }
 }
 
 let carousel = new Carousel(document.querySelector('.carousel'));