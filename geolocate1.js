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


// Calculating Distance: 

function computeDistance(startCoords, destCoords) {  

    var startLatRads = degreesToRadians(startCoords.latitude);
    
    var startLongRads = degreesToRadians(startCoords.longitude);          
    
    var destLatRads = degreesToRadians(destCoords.latitude);   
    
    var destLongRads = degreesToRadians(destCoords.longitude);      
    
     
    
    var Radius = 6371; // radius of the earth in km      
    
    var distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) + Math.cos(startLatRads) * Math.cos(destLatRads) * Math.cos(startLongRads-destLongRads)) * Radius;          
    
    return distance;
    
    }   
    
    function degreesToRadians(degrees) {     
    
    var radians = (degrees * Math.PI)/180;   
    
    return radians;  
    
    }

    var ourCoords = {      

        latitude: 37.383116,   
        
        longitude: -121.971931
        
        };


        function displayLocation(position) {     

            var latitude = position.coords.latitude;
            
            var longitude = position.coords.longitude;           
            
            var div = document.getElementById("location");
            
            div.innerHTML = "You are at Latitude: "+latitude+ ", Longitude: "+longitude;      
            
            var km = computeDistance(position.coords, ourCoords);      
            
            var distance = document.getElementById("distance");  
            
            distance.innerHTML = "You are " +km+ " km from UCSC Extension";  
            
             }