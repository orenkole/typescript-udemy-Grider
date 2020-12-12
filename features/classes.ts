class Vehicle {
  // color: string;
  constructor(public color: string) {}
  protected honk() {
    console.log("beep");
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);


class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log("vroom");
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}
const car = new Car(4, "red");
console.log(car.color);
