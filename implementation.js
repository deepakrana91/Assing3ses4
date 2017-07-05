"use strict";
exports.__esModule = true;
var interface_1 = require("./interface");
var mycar = { model: "toyota", engine: "2000", horsepower: 1000 };
interface_1.VehicleNameSpace.carDetail(mycar);
console.log(interface_1.VehicleNameSpace.getCarName(mycar.model));
