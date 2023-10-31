const family = {
  // properties
  mother: "Sara",
  father: "Yosi",
  kids: {
    first: "Ivan",
    second: "Hulio",
    third: "Magomet",
    fourth: "Salo",
  },
  //  function that belongs to object or class is also called "method
  goToVacation: function (toWhere) {
    // "this" — keyword to point on this object
    console.log(`${this.mother} sais: \"Hello, ${toWhere}\"`);
  },
};

console.log(`The mom is called ${family.mother}`);
console.log(`The dad is called ${family.mother}`);
console.log(`One of the kids is called ${family.kids.first}`);

family.goToVacation("New Zeland");

const fourKids = family.kids;
family.kids.fourth = "Muhammad";
