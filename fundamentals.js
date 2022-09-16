const aCar = {
  owner : 'Joe Bloggs',
  address : '3 Walkers Lane',
  privious_owners: [
    { name : ' pat Smith', address : '1 Main Street'},
    { name : ' Sheila Dwyer', address : '2 High Street'}
  ],
  type :{
    Make: 'Toyota',
    Model: 'Corolla',
    CC: 1.8,
    milage: 10000,
    colour:{
      exterior: "red",
      interior: {texture: "leather",shade: "cream"}
    },

  },
  features : ['Parking assist', 'Alarm', 'Tow-bar'],
  registration : '201WD1058'
};
for(let i = 0; i < aCar.features.length; i++){
  console.log(aCar.features[i]);
}
for(let i = 0; i < aCar.privious_owners.length; i++){
  j = i+1
  console.log('privious owner '+ j + ':' +aCar.privious_owners[i].name)
}

console.log(aCar.owner);
console.log(aCar.owner+' drives a '+aCar.type.Make);
console.log("It is a " + aCar.type.colour.exterior+" car, " + aCar.type.milage +" milage, with "  + aCar.type.colour.interior.texture + " interior.");
console.log('First owner is '+ aCar.privious_owners[0]);