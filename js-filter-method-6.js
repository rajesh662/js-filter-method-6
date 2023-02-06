const employees2 = [
  { name: 'David Carlson', age: 30 },
  { name: 'John Cena', age: 34 },
  { name: 'Mike Sheridan', age: 25 },
  { name: 'John Carte', age: 50 }
];
let result5= employees2.filter(emply => emply.name.includes("John"));
console.log(result5);
