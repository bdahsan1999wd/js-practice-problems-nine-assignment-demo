/*
You need to write a function named isBestFriend.
The function will take two objects as parameters.
You have to check whether these two persons are best friends or not.
If they are best friends, return true; otherwise, return false.

Example Input:
{ name: "abul", friend: "babul" }
{ name: "babul", friend: "abul" }

Expected Output: true
*/

function isBestFriend(object1, object2) {

    // Validate input
    if (typeof object1 !== 'object' || typeof object2 !== 'object') {
        return 'Invalid input! Both parameters must be objects';
    }

    // Extract names and friends from the objects
    const name1 = object1.name;
    const friend1 = object1.friend;
    const name2 = object2.name;
    const friend2 = object2.friend;

    // Check if object1 friend is object2 name
    const isFriend1 = name2 === friend1;

    // Check if object2 friend is object1 name
    const isFriend2 = name1 === friend2;

    // If both conditions are true, they are best friends
    if (isFriend1 && isFriend2) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isBestFriend({ name: "abul", friend: "babul" }, { name: "babul", friend: "abul" }));

console.log('--------------------');

console.log(isBestFriend({ name: "tom", friend: "jerry" }, { name: "jerry", friend: "bob" }));

console.log('--------------------');

console.log(isBestFriend({ name: "rahim", friend: "karim" }, { name: "karim", friend: "rahim" }));

console.log('--------------------');

console.log(isBestFriend({ name: "jerry", friend: "bob" }, { name: "bob", friend: "tob" }));