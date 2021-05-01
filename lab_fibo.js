
function fibo(num){
    if(num == 0){
        return 0;
    }
    else if(num < 0){
        return "error, number must be positive";
    }
    else if(num == 1){
        return 1;
    }
    else{
        return fibo(num-1)+fibo(num-2); 
    }
}

//console.log(fibo(-1));
//console.log(fibo(6));

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter the number of the fibonacci sequence that you want: ', num => {
    console.log(fibo(num));
    readline.close();
});