//Builder Design Pattern
//Dynamically create object with optional field and you can chain the method
//using Builder Design Pattern you can intercommunicate between different object

class User {
  constructor(name){
    this.name =  name 
  }
}

class UserBuilder { 
  constructor(name){
    this.user = new User(name)
  }

  setAge(age){
    this.user.age = age
    return this
  }

  setPhone(phone){
    this.user.phone = phone
    return this
  }

  build(){
    return this.user
  }
}

let usertest = new UserBuilder('Vignesh').setPhone("9876543210").build()
console.log('>>user',usertest)
