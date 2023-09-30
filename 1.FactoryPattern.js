/*
  Factory Pattern is a constructor category where we can
  create new object keeping the new keyword at centralized place.
  This way the code is more clean and scalable
*/


function Developer(name){
  this.name = name
  this.type = "Developer"
}

function Tester(name){
  this.name = name
  this.type = "Tester"
}

function EmployeeFactory(){
  this.create = (name,type) => {
    switch(type){
      case 1:
        return new Developer(name)
        break;
      case 2:
        return new Tester(name)
        break;
    }
  }
}

function say(){
  console.log("Hi, I am " + this.name + " and I am a" + this.type)
}

const employeeFactory = new EmployeeFactory()
const employees = []

employees.push(employeeFactory.create("Vignesh",1)) 
employees.push(employeeFactory.create("John",2)) 
employees.push(employeeFactory.create("Vicky",1)) 

employees.forEach((employee)=>{
  say.call(employee)
})
