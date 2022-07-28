const { Kafka } = require("kafkajs");
const fs = require('fs');

run().then(() => console.log("Done"), err => console.log(err));

async function run() {
  const kafka = new Kafka({ brokers: ["localhost:9092"] });
  const consumer = kafka.consumer({ groupId: "" + Date.now() });

  await consumer.connect();

  await consumer.subscribe({ topic: "chat-messages" });
  await consumer.run({ 
    eachMessage: async (data) => {
        if (data.message.key == "user") {
            const conv_data = JSON.parse(data.message.value);
            let row = `${conv_data.conversation_id}, ${conv_data.full_name}, ${conv_data.email}, ${conv_data.last_updated}`;
            console.log(row);

            fs.appendFile('users.csv', '\n' + row, function (err) {
                if (err) throw err;
                console.log('Saved row in users.csv:' + row);
              });
        }
        else if (data.message.key == "message") {
            const msg_data = JSON.parse(data.message.value);
            const msg = msg_data.values.$push.messages;
            console.log(msg_data);
            console.log(msg);

            let row = `${msg_data.conversation_id}, ${msg.admin}, ${msg_data.values.$set.last_updated}, ${msg.message}`;

            console.log(row);

            fs.appendFile('messages.csv', '\n' + row, function (err) {
                if (err) throw err;
                console.log('Saved row in messages.csv:' + row);
              });
        }
    }
  });
  
}