const fs=require('fs').promises;
async function readFileExample(){
  try{
    const data=await fs.readFile('myFile.txt','utf8');
    console.log('file content:',data);
  }
  catch(err){
    console.log('Error reading file:',err);
  }
}
readFileExample();

const {promisify}=require('util');
const readFileAsync =promisify(require('fs').readFile);

async function readWithPromisify(){
  try{
    const data=await readFileAsync('myFile.txt','utf8');
    console.log(data);
  }
  catch(err){
    console.log(err);
  }
}
readWithPromisify(); 