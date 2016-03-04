/**
 * Created by Mikkel on 02-03-2016.
 */

function add(n1,n2){
    return n1+n2;
}

function subtract(n1,n2){
    return n1-n2;
}

function divide(n1,n2){
        if(n2 == 0){
            throw new Error("Attempt to divide by zero");
        }
        var result =  n1 / n2;
        return result;
}

function addAsync(n1,n2, callback){
    setTimeout(function(){
        var result = n1 + n2;
        callback(result);
    }, 1000)
}

module.exports.add = add;
module.exports.addAsync = addAsync;
module.exports.divide = divide;
module.exports.subtract = subtract;


//var res = addAsync(5,5,function(res){
  //  console.log("Result: "+res);
//});

