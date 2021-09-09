var check = function(a,b){
    if (a==b){
      return "equal"
    }
    else{
      return "not equal"
    }
  }
  console.log(check(3,5));

// anonymous function


(function isequal(a,b){
    console.log(a==b)
    })(2,3);
// self invoking function