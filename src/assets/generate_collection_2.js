const casual = require('casual');
const moment = require('moment');
const { v4: uuidv4 } = require('uuid');

const fs = require('fs');

const custom_providers = {
	timestamp: function() {
        return moment().format('MMMM Do YYYY, HH:mm:ss');
		//return casual.month_name + ' ' + casual.day_of_month + ',' + ' 2022 | ' + casual.time(format = 'HH:mm');
	},
    message: function() {
        return {
            admin: casual.coin_flip,
            message: casual.description,
            timestamp: casual.timestamp
        };
    },
};

casual.register_provider(custom_providers);

casual.define('collection', function() {
	return {
		email: casual.email,
		full_name: casual.full_name,
        conversation_id: uuidv4(),
        last_updated: casual.unix_time,
        messages: [casual.message]
	};
});

let collectionsjson = fs.readFileSync("collections.json","utf-8");
let collections = JSON.parse(collectionsjson);

for (let i=0; i<10; ++i){
	let collection = casual.collection;
    for (let j=1; j<5; ++j){
        collection.messages.push(casual.message);
    }
	collections.push(collection);
}

collectionsjson = JSON.stringify(collections);
fs.writeFileSync("collections.json",collectionsjson,"utf-8");