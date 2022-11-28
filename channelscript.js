function postMessage(message) {
    window.lendingtest.postMessage(message);
    console.log("function postMessage(message)");
}
window.geolocation = {
    "latitude" : "",
    "longitude" : ""
}

function setgeolocation(latitude,longitude)
{
    geolocation.latitude = latitude;
    geolocation.longitude = latitude;
}
