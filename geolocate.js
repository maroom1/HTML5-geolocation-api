// Getting Latitude and Longitude

window.onload = getMyLocation 

 

function getMyLocation() {   

if(navigator.geolocation) {            

// navigator.geolocation.getCurrentPosition(displayLocation);
navigator.geolocation.getCurrentPosition(displayLocation, displayError);


}    

else {           

alert("Sorry, there is no geolocation support");          

}

} 

function displayError(error) {     

    var errorTypes = {           
    
    0: "Unknown error",          
    
    1: "Permission denied by user",          
    
    2: "Position is not available",          
    
    3: "Request timed out"
    
    }         
    
    var errorMessage = errorTypes[error.code];     
    
    if (error.code == 0 || error.code == 2) {            
    
    errorMessage = errorMessage +" " + error.message;         
    
    }    
    
    var div = document.getElementById("location");
    
    div.innerHTML = errorMessage;
    
    }

    /**function displayError(error) {     

switch(error.code) {                

case error.TIMEOUT:                    

alert('Geolocation request timed out');                    

break;                

case error.POSITION_UNAVAILABLE:                   

alert('Geolocation Position unavailable');                    

break;                

case error.PERMISSION_DENIED:                    

alert('Geolocation Permission denied');                    

break;                

default:                   

alert('Geolocation returned an unknown error code: ' + error.code);            

}

} */

function displayLocation(position) {     

var latitude = position.coords.latitude;

var longitude = position.coords.longitude;           

var div = document.getElementById("location");

div.innerHTML = "You are at Latitude: "+latitude+ ", Longitude: "+longitude; 

} 