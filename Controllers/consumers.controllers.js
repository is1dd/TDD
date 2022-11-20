const Consumers = require("../Models/consumers.model");

const getConsumers = async(req,res)=>{
    try{ 
        const consumers = await Consumers.find().populate('voucher');
        res.json(consumers);
    }catch(e){
        console.log(e)
        res.status(501).send(e);
    }
}

const addConsumer = async(req,res)=>{
    let data = req.body;
    let consumer = data.name;
    const consumerShort = consumer.slice(0, 3);
    try{ 
        let randomCode = Math.floor(1000 - Math.random()*999);
        let consumer = new Consumers({
            consumerType: data.consumerType,
            name: data.name,
            email: data.email,
            consumerId: (consumerShort + randomCode),
        });
        await consumer.save()
        res.json(consumer);
    }catch(e){
        console.log(e)
        res.status(501).send(e);
    }
}

const deleteConsumer = async (req, res) => {
    let { id } = req.params
    try {
        let data = await Vouchers.findByIdAndDelete(id)
        res.json(data)
    } catch (er) {
        res.status(404).send(er.message)
    }
}

const updateConsumer = async (req, res) => {
    let { id } = req.params
    try {
        let update = await Consumers.findByIdAndUpdate(id, req.body);
        res.json(update)
    } catch (er) {
        res.status(404).send(er.message)
    }
}
module.exports = {
    getConsumers,
    addConsumer ,
    deleteConsumer,
    updateConsumer
}