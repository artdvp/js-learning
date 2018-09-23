let counter = 100;

for (let index = 1; index <= counter; index++) {
    let text = "";
    if(index % 3 === 0 && index % 5 === 0) {
        text = "FizzBuzz";
    } else if(index % 3 === 0){
        text = "Fizz";
    } else if(index % 5 === 0){
        text ="Buzz";
    }
    console.log(`number [${index}] : ${text}`);
}