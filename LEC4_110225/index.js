// var x=3;

// function multiplication(x){
//     var ans=x*x;
//     return ans;
// }

// var square1=multiplication(x);
// var square2=multiplication(x);


// HOISTING

// console.log(x);
// console.log(multiplication(x));
// var x=10;

// function multiplication(x){
//     var ans=x*x;   
//     return ans;
// }


// console.log(x); 
// var multiplication1=multiplication(5);
// var multiplication2=multiplication(7);
// console.log(multiplication1);
// console.log(multiplication2);

// var x=10;

// function multiplication(x){
//     var ans=x*x;   
//     return ans;
// }

// var sum =(a,b)=>{
//     var ans =a+b;
//     return ans;
// }

// console.log(x);
// var multiplication4=multiplication(7);
// console.log(multiplication4)
// console.log(sum(6,4));


// console.log(abc);
// let abc=200;

// console.log(abc);


// var a;
// let b;

// console.log(a);
// console.log(b);

// var a;
// let b;

// const x;

// x=1000;

// console.log(a);
// console.log(b);
// console.log(x);


// x=10;
// console.log(x);

// {
//     var a=10;
//     console.log(a);
//     console.log(b);
//     console.log(c);

//     {
//         var b=20;
//         console.log(a);
//         console.log(b);
//         console.log(c);
//         {
//             var c=30;
//             console.log(a);
//             console.log(b);
//             console.log(c);
//         }
//     }
// }

// {
//     let a=10;
//     console.log(a);
//     console.log(b);
//     console.log(c);

//     {
//         let b=20;
//         console.log(a);
//         console.log(b);
//         console.log(c);
//         {
//             let c=30;
//             console.log(a);
//             console.log(b);
//             console.log(c);
//         }
//     }
// // }

// var a= 5;
// {
//     var a=10;
//     console.log(a);

//     {
//         var a=20;
//         console.log(a);
//         {
//             var a=30;
//             console.log(a);

//         }
//     }
// }
// console.log(a);

// let a= 5;
// {
//     a=10;
//     console.log(a);

//     {
//         a=20;
//         console.log(a);
//         {
//             a=30;
//             console.log(a);

//         }
//     }
// }
// console.log(a);

// /=================


// console.log(x);
// var x=10;
// console.log(x);

// function sumOfTwo(a,b){
//     var ans = a+b;
//     return ans
// }

// console.log(sumOfTwo(10,8));


// var a= 10;
// var b=20;
// var c=30;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(x); //undefined 50
// {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     var x=50;
//     {
//         var y=99;
//         console.log(x);
//         console.log(y);
//     }
// }

// console.log(x);
// let x=10;

for(var i=1;i<=6;i++){
    function ss(i){
        setTimeout(()=>{
            console.log(i);
        },1000)
    }
    ss(i);
}

