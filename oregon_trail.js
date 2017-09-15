(function () {
    /*
    * Interfaces
    */
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    /*
    * Classes
    */
    //The traveler class that implements the ITraveler interface
    //This is currently in violation of its contract with the interface. 
    //Create the code required to satisfy the contract with the interface
    var Traveler = /** @class */ (function () {
        function Traveler(food, name, isHealthy) {
            this.food = food;
            this.name = name;
            this.isHealthy = isHealthy;
        }
        //when implemented, There should be 50% chance to increase the traveler's food by 100.
        //return the travelers new food value
        Traveler.prototype.hunt = function () {
            var chance = getRandomIntInclusive(0, 100);
            if (chance > 50) {
                this.food = (this.food + 100);
            }
            return this.food;
        };
        //when implemented, we should check to see if the traveler has a food supply of 20
        //If they do then we should consume 20 of the available food supply
        //If they don't have 20 food then we should change isHealthy to false
        //return the travelers health after attempting to eat
        Traveler.prototype.eat = function () {
            if (this.food >= 20) {
                this.food = (this.food - 20);
                if (this.food < 20) {
                    this.isHealthy = false;
                }
                return this.isHealthy;
            }
            else {
                this.isHealthy = false;
                return this.isHealthy;
            }
        };
        return Traveler;
    }());
    //The wagon class that implements the IWagon interface
    //This is currently in violation of its contract with the interface.
    //Create the code required to satisfy the contract with the interface 
    var Wagon = /** @class */ (function () {
        function Wagon(capacity, passengerArray) {
            this.capacity = capacity;
            this.passengerArray = passengerArray;
        }
        //when implemented, we should add the traveler to the wagon if the capacity permits
        //this function should return the string "added" on success and "sorry" on failure
        Wagon.prototype.addPassenger = function (traveler) {
            if (this.passengerArray.length < this.capacity) {
                this.passengerArray.push(traveler);
                return "added";
            }
            else {
                return "sorry";
            }
        };
        //this should return true if there is at least one unhealthy person in the wagon
        //if everyone is healthy false should be returned
        Wagon.prototype.isQuarantined = function () {
            for (var i = 0; i < this.passengerArray.length; i++) {
                if (this.passengerArray[i].isHealthy === false) {
                    return true;
                }
            }
            return false;
        };
        //Return the total amount of food among all passengers of the wagon.
        Wagon.prototype.getFood = function () {
            var totalFood = 0;
            for (var i = 0; i < this.passengerArray.length; i++) {
                totalFood = totalFood + this.passengerArray[i].food;
            }
            return totalFood;
        };
        return Wagon;
    }());
    /*
    * Play the game
    *
    * Create 5 healthy travelers object with a random amount of food between 0 and 100 (inclusive)
    *
    * Create wagon with an empty passenger list and a capacity of 4.
    *
    * Make 3 of 5 the travelers eat by calling their eat methods
    *
    * Make the remaining 2 travelers hunt
    *
    * Create an array of your travelers, loop over the array of travelers and give each traveler a 50% chance
    * of attempting to be being added to the wagon using the wagons addPassenger method.
    *
    * Run the isQuarantined method for the wagon
    *
    * Run the getFood method for the wagon
    *
    * the return values of all the methods should be displayed in the console using console.log()
    * the console.log statements should not live inside any methods on the objects
    *
    */
    var Jose = new Traveler(getRandomIntInclusive(0, 100), "Jose", true);
    var Juan = new Traveler(getRandomIntInclusive(0, 100), "Juan", true);
    var Henrietta = new Traveler(getRandomIntInclusive(0, 100), "Henrietta", true);
    var Maria = new Traveler(getRandomIntInclusive(0, 100), "Maria", true);
    var Geronimo = new Traveler(getRandomIntInclusive(0, 100), "Geronimo", true);
    var scallywag = new Wagon(4, []);
    Jose.eat();
    Geronimo.eat();
    Maria.eat();
    Juan.hunt();
    Henrietta.hunt();
    var riders = [Jose, Juan, Geronimo, Maria, Henrietta];
    for (var i = 0; i < riders.length; i++) {
        var join = getRandomIntInclusive(0, 100);
        if (join > 50) {
            // if(scallywag.passengerArray.length < scallywag.capacity){
            //     scallywag.addPassenger(riders[i])     
            // }
            scallywag.addPassenger(riders[i]);
        }
    }
    var pass = scallywag.passengerArray;
    var quar = scallywag.isQuarantined();
    var allFood = scallywag.getFood();
    console.log(pass);
    console.log(quar);
    console.log(allFood);
    console.log(Jose.eat());
    console.log(Geronimo.eat());
    console.log(Maria.eat());
    console.log(Juan.hunt());
    console.log(Henrietta.hunt());
})();
