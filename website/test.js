//web API with fetch website
const baseURL = 'https://home.openweathermap.org/api_keys'
const apiKey = '8ad44efe14a3afa0848a7fee4bcb634a';
const zipCode =  document.getElementById('zip').value;

const d = new Date();
const newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
    getTempData(baseURL,zipCode,apiKey)

}

const getTempData = async (baseURL, zip, key)=>{
    
    const res = await fetch('/realTempData');
  
    try {

      const data = await res.json();
      console.log(data)
      // 1. We can do something with our returned data here-- like chain promises!
      return data;
    }  catch(error) {
      // appropriately handle the error
      console.log("error", error);
    }
  }