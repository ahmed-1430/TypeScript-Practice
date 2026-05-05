// Spread Operator in array

const friends = ['joseph', 'alen', 'finn', 'rob'];

const schoolFriends = ['holder', 'mitchel', 'raquel'];

const collegeFriends = ['nicolas', 'shelby', 'thomas'];

friends.push(...schoolFriends);
friends.push(...collegeFriends);

console.log(friends);

// spread operator in object

const user = {name: 'Ahmed', phoneNumber: '+8801712345678'};

const otherInfo = {hobby: 'travel', favouriteColor: 'Black'};

const userInfo = {...user, ...otherInfo};

console.log(userInfo);