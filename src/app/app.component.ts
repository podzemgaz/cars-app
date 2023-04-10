import {Component, HostListener} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
},)

export class AppComponent {

  priceForm = this.fb.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    car: ['', Validators.required]
  })

  carsData = [
    {
      image: "1.png",
      name: "Lamborghini Huracan Spyder",
      engine: 5.2,
      gear: null,
      transmission: "автомат",
      places: 0,
      year: 2019,
    }
    ,
    {
      image: "2.png",
      name: "Chevrolet Corvette",
      engine: 6.2,
      gear: null,
      transmission: "автомат",
      places: 0,
      year: 2017,
    }
    ,
    {
      image: "3.png",
      name: "Ferrari California",
      engine: 3.9,
      gear: null,
      transmission: "автомат",
      places: 0,
      year: 2010,
    }
    ,
    {
      image: "4.png",
      name: "Lamborghini Urus",
      engine: 4.0,
      gear: null,
      transmission: "автомат",
      places: 0,
      year: 2019,
    }
    ,
    {
      image: "5.png",
      name: "Audi R8",
      engine: 5.2,
      gear: null,
      transmission: "автомат",
      places: 0,
      year: 2018,
    }
    ,
    {
      image: "6.png",
      name: "Chevrolet Camaro",
      engine: 2.0,
      gear: null,
      transmission: "автомат",
      places: 0,
      year: 2019,
    }
    ,
    {
      image: "7.png",
      name: "Maserati Quattroporte",
      engine: 3.0,
      gear: null,
      transmission: "автомат",
      places: 0,
      year: 2018,
    }
    ,
    {
      image: "8.png",
      name: "Dodge Challenger",
      engine: 6.4,
      gear: null,
      transmission: "автомат",
      places: 0,
      year: 2019,
    }
    ,
    {
      image: "9.png",
      name: "Nissan GT-R",
      engine: 3.8,
      gear: null,
      transmission: "автомат",
      places: 0,
      year: 2019,
    }
  ];

  constructor(private fb: FormBuilder) {
  }

  /*goScroll(target: HTMLElement) {
    target.scrollIntoView({behavior: "smooth"})
  }*/
  goScroll(target: HTMLElement, car?: any) {
    let duration = 1200;
    let targetPos = target.getBoundingClientRect().top;
    let startPos = window.scrollY;
    //console.log(`startPos: ${startPos}, targetPos: ${targetPos}`);
    //console.log(`target: ${target}`)
    let distance = targetPos;
    let startTime: number | null = null;

    function step(currentTime: number) {
      if (startTime === null) {
        startTime = currentTime;
      }

      const timeElapsed = currentTime - startTime;
      const scrollY = easeInOutQuad(timeElapsed, startPos, distance, duration);
      window.scrollTo(0, scrollY);

      if (timeElapsed < duration) {
        requestAnimationFrame(step);
      }
    }

    function easeInOutQuad(t: number, b: number, c: number, d: number) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(step);

    if (car) {
      this.priceForm.patchValue({car: car.name});
    }
  }

  trans: any;
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.trans = {transform: 'translate3d(' + ((e.clientX * 0.3) / 8) + 'px,' + ((e.clientY * 0.3) / 8) + 'px,0px)'};
  }

  bgPos: any;
  @HostListener('document:scroll', ['$event'])
  onScroll() {
    this.bgPos = {backgroundPositionX: '0' + (0.3 * window.scrollY) + 'px'};
  }
  onSubmit() {
    let name, phone, car;
    name = this.priceForm.get('name')?.value;
    phone = this.priceForm.get('phone')?.value;
    car = this.priceForm.get('car')?.value;

    if (this.priceForm.valid) {
      alert(`${name}, Здравствуйте!

Вы выбрали автомобиль: ${car}.
Мы свяжемся с вами в ближайшее время по телефону: ${phone}.
Спасибо за вашу заявку!`);
    }
    this.priceForm.reset();
  }
}
