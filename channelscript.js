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

