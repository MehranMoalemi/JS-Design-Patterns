// Type by constructor

//  constructor(type) {
//     this.type = type;
// }


class Car {
    constructor(options) {
        this.wheels = options.wheels || 4;
        this.doors = options.doors || 4;
        this.color = options.color || "silver"; 
    }
}

class Truck {
    constructor(options) {
        this.wheels = options.wheels || 6;
        this.doors = options.doors || 2;
        this.color = options.color || "red"; 
    }
}


class Factory {

    constructor(type) {
        this.type = type;
    }

    create = (options) => {
        let vehicleType = this.type;
        let vehicle;
        
        if (vehicleType === "car") {
            vehicle = new Car(options);
        } else if (vehicleType === "truck") {
            vehicle = new Truck(options);
        } else if (vehicleType === "bus") {
            vehicle = new Bus(options);
        } else if (vehicleType === "motocycle") {
            vehicle = new Motocycle(options);
        }

		
        vehicle.vehicleType = vehicleType;

        vehicle.startEngine = ()=> console.log(`Reving ${vehicleType} engine`);

        vehicle.driveVehicle = ()=> console.log(`Driving ${vehicleType}...`);

        vehicle.stopEngine = ()=> console.log(`Stop ${vehicleType} engine`);

        return vehicle;
    }
	
};

const TruckFactory = new Factory("truck");
const truck = TruckFactory.create({
    wheels: 12,
    doors: 2,
    color: "yellow"
})


console.log(truck)

truck.startEngine();
truck.stopEngine();

// prints
// Truck {
//  wheels: 12,
//  doors: 2,
//  color: 'yellow',
//  vehicleType: 'truck',
//  startEngine: [Function],
//  driveVehicle: [Function],
//  stopEngine: [Function]
//}

// Reving truck engine
// Stop truck engine

const CarFactory = new Factory("car");
const car = CarFactory.create({
    wheels: 4,
    doors: 4,
    color: "white"
});

console.log(car);
car.startEngine();
car.stopEngine();

// Car {
//  wheels: 4,
//  doors: 4,
//  color: 'white',
//  vehicleType: 'car',
//  startEngine: [Function],
//  driveVehicle: [Function],
//  stopEngine: [Function]
//}

// Reving car engine
// Stop car engine// 
