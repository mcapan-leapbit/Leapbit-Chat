const casual = require('casual');
const fs = require('fs');

casual.define('user', function() {
	return {
		email: casual.email,
		full_name: casual.full_name,
        conversation_id: casual.integer(from = 1, to = 1000)
	};
});

let usersjson = fs.readFileSync("users.json","utf-8");
let users = JSON.parse(usersjson);
let users_ids = []

for (let i = 0; i<10; ++i){
	let user = casual.user;
	
	if (user["conversation_id"] in users_ids){
		continue;
	}else{
		users.push(user);
		users_ids.push(user["conversation_id"]);
	}
}

usersjson = JSON.stringify(users);
fs.writeFileSync("users.json",usersjson,"utf-8");