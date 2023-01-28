let num0 = [10,20,30]
let num1 = [30,29,50]
let resu = 0
calculator = (num0,num1) =>{
    for(let i = 0;i < num0.length ;i++){
        resu = resu + num0[i] * num1[i]
        
    }
    return resu
}
console.log(calculator(num0,num1))