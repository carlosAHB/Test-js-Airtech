const person = Object.freeze({
    name: 'Carlos',
    hello: function () {
      console.log(`Hello ${this.name}`);
    },
  });
  
  person.hello(); // 
  
  
  person.name = 'Andres';
  console.log(person.name); 