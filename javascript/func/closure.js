// closure - an inner function retains access to the outer function’s variables, even after the outer function has completed execution.
//innerFunction is able to access outerVar even though outerFunction has already returned. This is the essence of closures and lexical scoping.
function outerFunction(){
    let outer_val = "outer"
    function innerfunction(){
        console.log(outer_val);
    }
    return innerfunction
}
const myclosure = outerFunction()
myclosure()