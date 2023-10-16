const student = {
    name: "ALmaz Berhe",
    age: 20,
    address: {
      street: "3134 fairland Street",
      city: "burtonsvile",
      zipCode: "20940"
    },
    greet: function() {
      console.log(`Hello, my name is ${student.name}.`);
    },
    changeAddress: function(newStreet, newCity, newZipCode) {
      student.address.street = newStreet;
      student.address.city = newCity;
      student.address.zipCode = newZipCode;
    }
  };
  
  
  student.greet();
  

  console.log("Original Address:");
  console.log(student.address);
  
  // Change the address using the changeAddress method
  student.changeAddress("4583 ally st", "Arlington", "54431");
  
  // Call the greet method again
  student.greet();
  
  // Log the updated address
  console.log("Updated Address:");
  console.log(student.address);
  