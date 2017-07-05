
//Defining the namespace ,its member functions and interface 
//exporting them so to import in other files
export namespace VehicleNameSpace {

    export interface Car {
        model:string;
        engine:string;
        horsepower:number;
     }

     export function carDetail(car:Car) {   
          console.log(` The car details are : Model ${car.model} ,     
          Engine ${car.engine} and the horespower is ${car.horsepower}`);  
         }; 

    export function getCarName(car:string) {

     return (`car model is ${car}`)

    }


}