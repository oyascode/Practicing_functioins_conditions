


// EXAMPLE OF AN OBJECT
// const firstAidBox = {}; //an empty object stored in a variable named firstAid

const firstAid = {
  color: "green",    // object populated with properties-using key-value pairs
  material: "metal",
  lidClosed: true,
  toggleLid: function(lidStatus) {
    this.lidClosed = lidStatus; // the "this" keyword refers to the instance of that object
  }
}


// ACCESSING THE OBJECT PROPERTIES
const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

// You can not change the value of the object variable above by reassigning it .

backpack  = 10; //outputs error..assignment to const variable
// Dot notation
backpack.material  = "Leather"; //  But you can create new properties

backpack.color = "Red" // You can also mutate the iexisting properties

// Bracket Notation

console.log(backpack["pocketNum"]) // outputs the 15 

// PRACTICE ASSIGNMENT 1

const phone = {
  name: {
    brandName: "Infinix",
    brandType: "s4"
  },
  color: black,
  storage: "64G"
}

// To access the value of brandName using dot notation
console.log(phone.name.brandName);

// To access the value of color using bracket notation

console.log(phone["color"]);


//OBJECT METHODS
//Object methods are functions within an object

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

// To access the method in the above
backpack.toggleLid();

// CLASSES
//classes are used to create object blueprints
//Any changes effected on the blueprint will automatically affect every instance of that object template.

// Example of a contructor below

class Backpack {
  constructor(
    // Defines parameters:
    name,
    volume,
    color,
    pocketNum,
    strapLengthL,
    strapLengthR,
    lidOpen
  ) {
    // Define properties:
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.pocketNum = pocketNum;
    this.strapLength = {
      left: strapLengthL,
      right: strapLengthR,
    };
    this.lidOpen = lidOpen;
  }
  // Add methods like normal functions outside of the constructor but inside the object block
  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
  }
  newStrapLength(lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  }
}

// to create instance of our backpack class

//Declare a variable and assign the new keyword and our object name having the values called as argument

const newBackPack = new Backpack("Stroller", 10, "Red", 6, 5, 6, false);
export default Backpack;





 