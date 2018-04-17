const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const godSchema = new Schema({
    userId: {type: Number, required: true },
    name: { type: String, required: true },
    title: {type: String, required: true},
    maxHp: {type: Number, required: true },
    currentHp: {type: Number, required: true },
    maxEssence: {type: Number, required: true },
    currentEssence: {type: Number, required: true },
    maxStamina: {type: Number, required: true },
    currentStamina: {type: Number, required: true },
    attack: {type: Number, required: true },
    staminaRegeneration: {type: Number, required: true },
    essenceRegeneration: {type: Number, required: true },
    speed: {type: Number, required: true },
    strength: {type: Number, required: true },
    endurance: {type: Number, required: true },
    constitution: {type: Number, required: true },
    dexterity: {type: Number, required: true },
    agility: {type: Number, required: true },
    intelligence: {type: Number, required: true },
    willpower: {type: Number, required: true }

});

godSchema.methods.enrage = function(){
    if ( this.currentHp < (this.maxHp *.25)) {

    }
}
  
const God = mongoose.model("God", godSchema);
  
module.exports = God;

