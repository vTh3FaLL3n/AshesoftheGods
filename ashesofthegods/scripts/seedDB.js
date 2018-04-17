const mongoose = require("mongoose");
const db = require("../models");

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
//add mongo heroku uri
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/ashesofthegods-development"
  ,
  {
    useMongoClient: true
  }
);

const godSeed = [
    {
        "name": "Ares",
        "title": "The God of War",
        "maxHp": 1000,
        "currentHp": 1000,
        "maxEssence": 500,
        "currentEssence": 500,
        "maxStamina":500,
        "currentStamina":500,
        "attack":500,
        "staminaRegeneration": 10,
        "essenceRegeneration": 10,
        "speed": 10,
        "strength": 10,
        "endurance": 10,
        "constitution": 10,
        "dexterity": 10,
        "agility": 10,
        "intelligence": 10,
        "willpower": 10


    }
]

    db.God
    .remove({})
  .then(() => db.God.collection.insertMany(godSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });




