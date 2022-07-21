const mongodb = require("mongodb");

const connectToDB = async function () {
  const client = await mongodb.MongoClient.connect(
    process.env.MONGO_LINK,
    {
      useNewUrlParser: true,
    }
  );
  return client;
};

module.exports = {
  connectToDB,
};
