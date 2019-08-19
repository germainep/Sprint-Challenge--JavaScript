// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(params) {
//   this.length = params.length;
//   this.width = params.width;
//   this.height = params.height;
// }

// CuboidMaker.prototype.volume = function() {
//   return this.length * this.width * this.height;
// };

// CuboidMaker.prototype.surfaceArea = function() {
//   return 2 * (this.length * this.width+ this.length * this.height + this.width * this.height);
// };

class CuboidMaker {
  constructor(params) {
    this.length = params.length;
    this.width = params.width;
    this.height = params.height;
  }

  volume() {
    return this.length * this.width * this.height;
  }

  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

const cuboid2 = new CuboidMaker({
  height: 5,
  width: 5,
  length: 4,
});
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
  constructor(params) {
    super(params);
    this.sides = params.sides;
  }

  volume() {
    return Math.pow(this.sides, 3);
  }

  surfaceArea() {
    return 6 * Math.pow(this.sides, 3);
  }
}

const cube = new CubeMaker({ sides: 4 });

console.log(cube.volume());
console.log(cube.surfaceArea());
