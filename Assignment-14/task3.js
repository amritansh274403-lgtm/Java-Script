let count = 0;

let timer = setInterval(function() {
    count++;

    console.log("Tick " + count);

    if (count === 3) {
        clearInterval(timer);
    }

}, 200);