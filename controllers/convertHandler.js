function ConvertHandler() {
  this.getNum = function (input) {
    let num = [];
    let fractions = [];
    const array = input.split("");
    array.map((element, index) => {
      if ([".", "/"].includes(element) || isNaN(parseInt(element)) === false) {
        return num.push(element);
      }
    });

    num.map((element) => (element === "/" ? fractions.push(element) : element));

    return fractions.length > 1
      ? "invalid number"
      : num.length === 0
      ? 1
      : eval(num.join(""));
  };

  this.getUnit = function (input) {
    let result;
    let unit = [];
    const array = input.split("");
    array.map((element) =>
      isNaN(parseInt(element)) === true && ![".", "/"].includes(element)
        ? unit.push(element)
        : element
    );
    result = unit.join("").toLowerCase();
    return result;
  };

  this.getReturnUnit = function (initUnit) {
    let unit;
    if (initUnit === "gal") {
      unit = "L";
    } else if (initUnit === "l") {
      unit = "gal";
    } else if (initUnit === "lbs") {
      unit = "kg";
    } else if (initUnit === "kg") {
      unit = "lbs";
    } else if (initUnit === "mi") {
      unit = "km";
    } else if (initUnit === "km") {
      unit = "mi";
    }
    return unit;
  };

  this.spellOutUnit = function (unit) {
    let spell;
    if (unit.toLowerCase() === "gal") {
      spell = "gallons";
    } else if (unit.toLowerCase() === "l") {
      spell = "liters";
    } else if (unit.toLowerCase() === "lbs") {
      spell = "pounds";
    } else if (unit.toLowerCase() === "kg") {
      spell = "kilograms";
    } else if (unit.toLowerCase() === "mi") {
      spell = "miles";
    } else if (unit.toLowerCase() === "km") {
      spell = "kilometers";
    }
    return spell;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let number;
    if (initUnit === "gal") {
      number = initNum * galToL;
    } else if (initUnit === "l") {
      number = initNum / galToL;
    } else if (initUnit === "lbs") {
      number = initNum * lbsToKg;
    } else if (initUnit === "kg") {
      number = initNum / lbsToKg;
    } else if (initUnit === "mi") {
      number = initNum * miToKm;
    } else if (initUnit === "km") {
      number = initNum / miToKm;
    }
    return number;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`;
  };
}

module.exports = ConvertHandler;
