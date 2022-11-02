console.log("script postmessasge");
function postMessage(message)
{
    alert(message);
    window.lendingtest.postMessage(message);
    console.log("function postMessage(message)");
}