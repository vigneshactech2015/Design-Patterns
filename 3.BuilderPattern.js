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



// Example 2

// Using JavaScript constructor pattern

class Address {
  constructor(zip,street){
    this.zip = zip
    this.street = street
  }
}

class User {
  constructor(name , {age,phone='1234567890',address} = {}){
    this.name = name
    this.age = age
    this.phone = phone
    this.address = address
  }
}

let user = new User('Bob',{age:10,phone:'1111',address: new Address('1','Main')})

console.log(user)
