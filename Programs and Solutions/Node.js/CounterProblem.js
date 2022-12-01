
var x=(function (){
    var count=0;
    
    function inner(){
        count++;
        return count;
    }
    return inner;
})();

x();
x();
console.log(x());

