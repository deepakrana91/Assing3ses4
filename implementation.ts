import { VehicleNameSpace } from './interface';

// creating a object of namespace and then calling both the fucntions defined there

let mycar:VehicleNameSpace.Car = {model:"toyota",engine:"2000",horsepower:1000};
VehicleNameSpace.carDetail(mycar);
console.log(VehicleNameSpace.getCarName(mycar.model))

