// spread operator

const friends = ["Alice", "Bob", "Charlie"];
const schoolFriends = ["Xavier", "Yvonne", "Zach"];

const collegeFriends =["Frank", "Grace", "Heidi"];

friends.push(...schoolFriends);
friends.push(...collegeFriends);

// console.log(friends);



const user ={ name: "John", age: 30 , address: "123 Main St"};
const otherDetails = { occupation: "Developer", hobby: "Painting" };

const userInfo = { ...user, ...otherDetails };
// console.log(userInfo);




// rest operator

// const sendInvite = (friend1:string, friend2: string, friend3: string) => {
//     console.log(`Sent Invitation to ${friend1}`);
//     console.log(`Sent Invitation to ${friend2}`);
//     console.log(`Sent Invitation to ${friend3}`);
// };

// sendInvite("Alice", "Bob", "Charlie");




const sendInvite = (...friends: string[]) => {
    friends.forEach((friend: string) => {
        console.log(`Sent Invitation to ${friend}`);
    });
};

sendInvite("Alice", "Bob", "Charlie", "David", "Eve", "Hosneara");