// Spread Operator in array

const friends = ['joseph', 'alen', 'finn', 'rob'];

const schoolFriends = ['holder', 'mitchel', 'raquel'];

const collegeFriends = ['nicolas', 'shelby', 'thomas'];

friends.push(...schoolFriends);
friends.push(...collegeFriends);

console.log(friends);