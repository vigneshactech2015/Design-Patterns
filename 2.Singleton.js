/*
  Singleton is a creational patterns
  It is useful when we want to limit the number of instances created for a object to utmost one
*/

//It is also example of IIFE function
const Singleton = (function(){
  let pManager

  function ProcessManager() { /*...*/ }

  function createProcessManager()
  {
    pManager = new ProcessManager()
    return pManager
  }

  return {
      getProcessManager: () =>
      {
        if(!pManager)
          pManager = createProcessManager()
        return pManager
      }
  }
})()

const singleton = Singleton.getProcessManager()
const singleton2 = Singleton.getProcessManager()

console.log(singleton === singleton2) // true
