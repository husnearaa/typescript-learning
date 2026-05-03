// array, object

// ts - tuples

// array and tuples
let bookList: string[] = ['book1', 'book2', 'book3'];
bookList.push('book4');
console.log(bookList);


let mixedArray: (string | number)[] = ['book1', 2, 'book3', 4];
mixedArray.push('book5');
console.log(mixedArray);

// let coordinates: [number, number] = [10, 20, 60]; // Source has 3 element(s) but target allows only 2.
let coordinates: [number, number] = [10, 20];
console.log(coordinates);

let nameAndAge: [string, number] = ['Alice', 30];
console.log(nameAndAge);

let couple: [string, string] = ['Alice', 'Bob'];
console.log(couple);

let destination: [string, string, number] = ['Paris', 'New York', 3];
console.log(destination);




// reference type - object

// const user : {
//  //   Organization: "Tech Company"; // value => literal type
//     Organization: string; // value => literal type
//     firstName: string;
//     middleName?: string; // optional type
//     LastName: string;
//     isEmployed?: boolean;
// } = {
//     Organization: 'Tech Company',
//     firstName: 'Alice',
//     // middleName: 'Something',
//     LastName: 'Smith',
//     isEmployed: true
// };
// console.log(user);

// user.Organization = 'New Tech Company';
// console.log(user);





// reference type - object

const user : {
    readonly Organization: string; // access modifier => public, private, protected
    firstName: string;
    middleName?: string; // optional type
    LastName: string;
    isEmployed?: boolean;
} = {
    Organization: 'Tech Company',
    firstName: 'Alice',
    // middleName: 'Something',
    LastName: 'Smith',
    isEmployed: true
};
console.log(user);

user.Organization = 'New Tech Company';
console.log(user);