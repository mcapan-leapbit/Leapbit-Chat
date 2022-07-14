const casual = require('casual');
const fs = require('fs');

const custom_timestamp = {
	timestamp: function() {
		return casual.month_name + ' ' + casual.day_of_month + ',' + ' 2022 | ' + casual.time(format = 'HH:mm');
	},
};

casual.register_provider(custom_timestamp);

casual.define('message', function() {
	return {
		conversation_id: 0,
		admin: casual.coin_flip,
        message: casual.description,
		timestamp: casual.timestamp
	};
});

let messagesjson = fs.readFileSync("messages.json","utf-8");
let messages = JSON.parse(messagesjson);

let usersjson = fs.readFileSync("users.json","utf-8");
let users = JSON.parse(usersjson);

for(let i = 0; i < usersjson.length; i++) {
    let obj = usersjson[i];
    let conversation_id = obj.conversation_id;
    for (let j = 0; j<5; ++j){
        let message = casual.message;
        message["conversation_id"] = conversation_id;
        messages.push(message);
    }
}

messagesjson = JSON.stringify(messages);
fs.writeFileSync("messages.json",messagesjson,"utf-8");