// Function
// arow function, normal function, 

// defining normal function
function addNormal(num1: number, num2: number){
return num1 + num2;
}


// defining arrow function
const addArrow = (num1: number, num2: number):
 number =>  num1 + num2;

 addArrow (2, 2);
 
 


 // object => function => method

 const PoorUser = {
    name: 'Hosneara',
    balance: 100,
    addBalance(value: number):number {
      const totalBalance = this.balance + value;
        return totalBalance;
    }
};

PoorUser.addBalance(100);




// using callback function in loop
const arr: number[] = [1, 2, 3, 4, 5];

const sqrArray = arr.map((element: number): number => element * element);

