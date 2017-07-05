"use strict";
exports.__esModule = true;
var VehicleNameSpace;
(function (VehicleNameSpace) {
    function carDetail(car) {
        console.log(" The car details are : Model " + car.model + " ,     \n          Engine " + car.engine + " and the horespower is " + car.horsepower);
    }
    VehicleNameSpace.carDetail = carDetail;
    ;
    function getCarName(car) {
        return ("car model is " + car);
    }
    VehicleNameSpace.getCarName = getCarName;
})(VehicleNameSpace = exports.VehicleNameSpace || (exports.VehicleNameSpace = {}));
