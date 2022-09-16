const aCar = {
  owner : 'Joe Bloggs',
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
  registration : '201WD1058'
};

console.log(aCar.owner);
console.log(aCar.owner+' drives a '+aCar.type.Make)
console.log("It is a " + aCar.type.colour.exterior+" car, " + aCar.type.milage +" milage, with "  + aCar.type.colour.interior.texture + " interior.")