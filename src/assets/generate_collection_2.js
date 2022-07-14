var casual = require('casual');
const fs = require('fs');

var custom_providers = {
	timestamp: function() {
		return casual.month_name + ' ' + casual.day_of_month + ',' + ' 2022 | ' + casual.time(format = 'HH:mm');
	},
    message: function() {
        return ([{
            admin: casual.coin_flip,
            message: casual.description,
            timestamp: casual.timestamp
        }]);
    },
};

casual.register_provider(custom_providers);

casual.define('collection', function() {
	return {
		email: casual.email,
		full_name: casual.full_name,
        conversation_id: casual.integer(from = 1, to = 1000),
        messages: casual.message
	};
});

let collectionsjson = fs.readFileSync("collections.json","utf-8");
let collections = JSON.parse(collectionsjson);

for (var i = 0; i<10; ++i){
	var collection = casual.collection;
	collections.push(collection);
}

collectionsjson = JSON.stringify(collections);
fs.writeFileSync("collections.json",collectionsjson,"utf-8");