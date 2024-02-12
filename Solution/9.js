
// Find the sum of the numbers from 1 to 10 using for loop
let sum = 0;
for(let i = 1; i <= 10; i++){
    sum = sum + i;
    console.log(i, sum);
}

// Find the even and odd numbers from 1 to 20 using for loop both iterative and recursive way 
// even number finding iterative way
for(let i = 1; i <= 20; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}
// even number finding recursive way
for(let i = 20; i >= 1; i--){
    if(i % 2 === 0){
        console.log(i);
    }
}
// odd number finding iterative way 
for(let i = 1; i <= 20; i++){
    if(i % 2 === 1){
        console.log(i);
    }
}
// odd number finding recursive way 
for(let i = 20; i >= 1; i--){
    if(i % 2 === 1){
        console.log(i);
    }
}

// Find the even and odd numbers from 1 to 20 using while loop both iterative and recursive way
// even number finding iterative way
let i = 1;
while(i <= 20){
    if(i % 2 === 0){
        console.log(i);
    }
    i++;
}
// even number finding recursive way
let i = 20;
while(i >= 1){
    if(i % 2 === 0){
        console.log(i)
    }
    i--;
}
// odd number finding iterative way
let i = 1;
while(i <= 20){
    if(i % 2 === 1){
        console.log(i);
    }
    i++;
}
// odd number finding recursive way
let i = 20;
while(i >= 1){
    if(i % 2 === 1){
        console.log(i);
    }
    i--;
}