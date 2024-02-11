
// Find the sum of the numbers from 1 to 5 using while loop
let num = 1;
let sum = 0;
while(num <= 5){
    sum = sum + num;
    console.log(num, sum);
    num++;
}

// Find the even and odd numbers from 1 to 20 using while loop
for(let i = 1; i <= 20; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

for(let i = 1; i <= 20; i++){
    if(i % 2 === 1){
        console.log(i);
    }
}