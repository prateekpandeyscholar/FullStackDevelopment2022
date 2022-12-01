const add = (function () {
    let counter = 0;
    function inner(){
        counter=counter+1;
        return counter;
    }
    return inner;
  }) ();
  
  add();
  add();
  console.log(add());
  