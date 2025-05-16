/*
 * Fetch users bug
 * The bug is that the forEach loop is not waiting for the fetchUserById promise to resolve.
 * This will cause the fetchUsers function to return before the fetchUserById promises are resolved.
 * The solution is to use a for loop instead of a forEach loop.
 */

const userIds = [1, 2, 3];

async function fetchUsers() {
  //userIds.forEach(async (id) => { // This will not work as expected because the forEach loop is not waiting for the fetchUserById promise to resolve.
  for (const id of userIds) {
    try {
      const user = await fetchUserById(id);
      console.log(`Fetched user: ${user.name}`);
    } catch (error) {
      console.error(`Failed to fetch user with ID ${id}:`, error);
    }
  }
}

async function fetchUserById(id) {
  return new Promise((resolve) => {
    let delay = Math.random() * 1000 + 1000;
    setTimeout(() => {
      resolve({ id, name: `User${id}` });
    }, delay);
  });
}
fetchUsers();

/*
 * Deep clone bug
 * The bug is that the deepClone function is not checking if the object is an array.
 * This will cause the deepClone function to return a non-array object instead of an array.
 * The solution is to check if the object is an array and return an array instead of an object.
 */

// function deepClone(obj) {
//   if (obj === null || typeof obj !== "object") {
//     return obj;
//   }

//   const copy = Array.isArray(obj) ? [] : {};

//   for (const key in obj) {
//     copy[key] = deepClone(obj[key]);
//   }

//   return copy;
// }

function deepClone(obj, map = new Map()) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (map.has(obj)) {
    return map.get(obj);
  }

  const copy = Array.isArray(obj) ? [] : {};

  map.set(obj, copy);

  for (const key in obj) {
    copy[key] = deepClone(obj[key], map);
  }
  return copy;
}

const objA = { value: 1 };
const objB = { a: objA };
objA.b = objB;

const clonedObj = deepClone(objA);

console.log("Bug #2:Cloned object");
console.log(clonedObj);

/*
* User profile bug
* The bug is that the UserProfile class is not rendering the friends list correctly.
* This will cause the UserProfile class to return a non-array object instead of an array.
* The solution is to return an array instead of an object.
* When listFriends is called, this no longer refers to the UserProfile instance,
* but instead to the object returned by render. This object doesn’t have a friends property, 
* so this.friends is undefined. To fix this, you could use an arrow function to preserve the 
* correct this context:
*/

class UserProfile {
  constructor(name) {
    this.name = name;
    this.friends = [];
  }

  addFriend(friend) {
    this.friends.push(friend);
  }

  render() {
    return {
      name: this.name,
      friendCount: this.friends.length,
      // listFriends() {
      listFriends: () => {
        return this.friends.map((friend) => friend.name).join(", ");
      },
    };
  }
}

const user = new UserProfile("Tyler");
user.addFriend({ name: "Lynn" });
user.addFriend({ name: "Ben" });

const profileData = user.render();
console.log(`${profileData.name} has ${profileData.friendCount} friends.`);
console.log(`Friends: ${profileData.listFriends()}`);
