/*
  Singleton is a creational patterns
  It is useful when we want to limit the number of instances created for a object to utmost one
*/

function Process(state){
  this.state = state
}

//IIFE Function
const Singleton = (function(){
  function ProcessManager(){
    this.numProcess = 0
  }

  let pManager

  function createProcessManager(){
    pManager = new ProcessManager()
    return pManager
  }

  return {
    getProcessManager : () => {
      if(!pManager){
        pManager = createProcessManager()
      }else{
        return pManager
      }
    }
  }
})()

const processManager = Singleton.getProcessManager();
const processManager2 = Singleton.getProcessManager();

console.log(processManager === processManager2)
//it returns true because it points to same instance and we are not creating two seperate instances
