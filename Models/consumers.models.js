const mongoose = require('mongoose');
const ConsumersSchema = new mongoose.Schema({
    consumerType:{type:String,required:true, enum: ["Individual", "Organization"]},
    name:{type:String,required:true},
    email:{type:String,required:true},
    voucher:{
        type: String,
        ref: 'voucher'
    }
   

},
{
    versionkey:false,
    timestamps:{
        createdAt:'created_at',
        updatedAt:"updated_at"
    }
})
const Consumers = mongoose.model('consumer',ConsumersSchema);
module.exports  = Consumers;