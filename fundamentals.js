const aCar = {
  owner : 'Joe Bloggs',
  type :{
    Make: 'Toyota',
    Model: 'Corolla',
    CC: 1.8,
  },
  registration : '201WD1058'
};

console.log(aCar.owner);
console.log(aCar.owner+'drives a'+aCar.type.Make)