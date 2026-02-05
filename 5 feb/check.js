function myFunction(){
  console.log("Starting a task..");
  let sum=0;
  for(let i=0;i<1000000;i++){
    sum+=i;
  }
  console.log("Task finished");
  return sum;
}
console.log("Before the function call");
let result= myFunction();
console.log("after the function call");
console.log("result:",result);