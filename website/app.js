//web API with fetch website
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=8ad44efe14a3afa0848a7fee4bcb634a';


const d = new Date();
const newData = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
  const newZip =  document.getElementById('zip').value;
  const content =  document.getElementById ('feeling').value;

  realTempData(baseURL,newZip, apiKey)

    //new syntax
    .then(function(data){
        //add data
        
        postData('/add', {date:newData,temp:data.main.temp,content:content})

        //we can do this because of async
        updateUI()
    });
};

const realTempData = async (baseURL,newZip,apiKey) => {
    
  const res = await fetch(baseURL+newZip+apiKey);
    
  
    try {

      const data = await res.json();
      // 1. We can do something with our returned data here-- like chain promises!
      return data;
    }  catch(error) {
      // appropriately handle the error
      console.log("error", error);
    }
  }

//Async POST
const postData = async ( url = '', data = {}) => {

    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        "Content-Type": "application/json",
    },

    body: JSON.stringify({
      date: data.date,
      temp: data.temp,
      content: data.content
    })// body data type must match "Content-Type" header       
     
  });

    try {
      const newData = await response.json();
      return newData;
    }catch(error) {
    console.log("error", error);
    // appropriately handle the error
    }
}

const getShaima = async (url)=>{

    const res = await fetch(url)
    try {
  
      const data = await res.json();
      return data;
    }  catch(error) {
      console.log("error", error);
      // appropriately handle the error
    }
    //updateUI()
    
  }

//update UI website
const updateUI = async () =>{
    const request =await fetch('/all');
    try{
        const allDate = await request.json();
  
        document.getElementById('date').innerHTML=allDate.date;
        document.getElementById('temp').innerHTML=allDate.temp;
        document.getElementById('content').innerHTML=allDate.content;

    }catch(error){
        console.log("error", error);
        
    }
    
};

//SYNC REVIEW
setTimeout(function(){ console.log('third') }, 3001);
  
function sync(){
console.log('first')
}

sync()
console.log('second')