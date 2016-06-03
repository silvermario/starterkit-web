'use strict';

//get cars data from JSON
//carsData.getCars('data/cars.json');


// for testing
navigation.showXMLHttpRequest()


carsData.getCars.then(function(response){
  console.log(response)
}, function(error) {
  console.error("Failed!", error);
});
