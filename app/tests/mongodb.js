const { test } = require("uvu");
const { MongoClient } = require("mongodb");

test("MongoDB server active", async function () {
  const client = new MongoClient(
    "mongodb+srv://DillyDally:F71Xr9NwCMrxBElE@readercluster.uqbz6ui.mongodb.net/?retryWrites=true&w=majority"
  );
  await client.connect();
});

test.run();
