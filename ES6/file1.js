export const spreadAdd = (...a)=>{
    let c = 0;
    //ES6 for loop
    for ( val of a){
        c = c+val;
    }
    return c;
    //or
    //a.forEach(val =>{c = c+val})
};


export const add = (a,b,c,d)=>{return a+b+c+d};
export let arr = [2,5,7,8];

 export function testing(a,b){
     console.log("a: "+a);
     console.log("b: "+b);
     let c = a+b;  //logical implementation
     return c;
        }


