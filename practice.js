//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?
  //to recall context
      //Answer

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
    //  .bind gives new function bound that takes function "bound" to an object context.

  // 3) What is the difference between call and apply?

      //Answer
      //call invokes
  // 4) What does .bind do?
  //bind allows an object to call/invoke another object's property.
      //Answer


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property.
  //*Don't use 'user' instead use the 'this' keyword*

    //Code Here
    var user = {
        username: "Brobbie",
        email:    "Brobbiethao@live.com",
        getUsername: function() {
          return this.username
        }
    }
//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
    getUsername();

//Next Problem


// Write a constructor function, including method definitions, which will make the following function invocations
//function properly.

  //Function Invocations Here

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.miles = 0;

  this.headline = this.maker + this.model;

  this.moveCar = function(distance) {
    this.miles += distance;
  }
}

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

//Hint, you'll need to add a move property, with a starting value of zero, and write a moveCar
//function which will increment the move property by 10. The move property will be added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).

prius.moveCar(10); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(10); //increments mustang' move property by 10. Returns the new move property.



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Call the getYear function with the prius then the mustang
//objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  //Code Here

//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername(); //Fix this

//Above you're given an object, and  a function. What will the getMyUsername function return?
//Note(no tests)
  //Answer Here

//In the example above, what is the 'this keyword' bound to when getMyUsername runs?

  //Answer Here


//Fix the getMyUsername invocation (stored in the userName variable, at the bottom of the above code) so that userName will be equal to 'iliketurtles'.
