//loading data from HTML tags
const billInput = document.getElementById("billInput");
const tipInput = document.getElementById('tipInput');
const noOfPeople = document.getElementById('noOfPeople');
const total = document.getElementById("total");

//define number of people
let no = Number(noOfPeople.innerText);


//defining a function to calculate the total amount to be paid per person
const billCalculate = () => {
    
    const bill = Number(billInput.value) ;//reading data from bill input
    const tip = Number(tipInput.value);//reading tip input
     
    //formula for calculating tip
    let tipAdd = bill*tip/100;
     
    //formula for calculating the total amount per person
    let totalPerPerson = (bill + tipAdd )/no;
    
    //display the value in div with id =''total
    total.innerHTML = `$${totalPerPerson.toFixed(2)}`;
} 


const incrementPeople = () => {
    
    no += 1;
    noOfPeople.innerText = no;
    billCalculate();
}
const decrementPeople = () => {
    if(no >= 2){
         
        no =no - 1;
        noOfPeople.innerText = no;
        billCalculate();
    }
    else{
        return;
    }
    
}