// type favorite flavor at the moment 
const flavors = prompt( 
    "Type your flavors followed by a comma. Examples - 'Str, Cho, Cho, Van'. Available flavors: Str(strawberry), Cho(chocalate), Van(vanilla), Coff(coffee). "
);

// seperate the flavors with a comma 
const input = flavors.toLocaleLowerCase().split(","); 

const orders = {};

input.forEach((flav) => {
    //check if flavor exist in the "order objects and increase by 1"
 if (flav in orders){
    orders [flav]++;
 } else{
    // add new flavor to "orders if it doesnt exist"
    orders[flav] = 1
 }
})
console.log(orders);
