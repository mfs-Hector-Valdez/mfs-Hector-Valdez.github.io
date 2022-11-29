function postMessage(message) {
    if(window.lendingtest)
    {
        window.lendingtest.postMessage(message);
        console.log("function postMessage(message)");
    }
    else
    {
        console.log("window.lendingtest.postMessage(message)------ NO EXISTE;");
    }

}

window.geolocation = {
    latitude : "600.0",
    longitude : "600.0"
}

function setgeolocation(latitude, longitude) {
    geolocation.latitude = latitude;
    geolocation.longitude = longitude;
    console.log(longitude,latitude);
}

