const Vouchers = require("../Models/vouchers.models");

const getVouchers = async (req, res) => {
    try {
        let vouchers = await Vouchers.find().populate('voucher');
        res.json(vouchers)
    } catch (er) {
        res.status(404).send(er.message)
    }
}
const addVouch = async(req,res)=>{
    let data = req.body;
    try{
        let randomCode = Math.floor(1000 - Math.random()*999);
        const voucher = new Vouchers({
            brandName: data.brandName,
            desc: data.desc,
            isFree: data.isFree,
            tnc: data.tnc,
            tncvoucherCode: data.tnc,
            voucherCode: (data.brandName + randomCode)
        });
        await voucher.save()
        res.json(voucher);
    }catch(e){
        console.log(e)
        res.status(501).send(e);
    }
}
const deleteVouch = async (req, res) => {
    let { id } = req.params
    try {
        let data = await Vouchers.findByIdAndDelete(id)
        res.json(data)
    } catch (er) {
        res.status(404).send(er.message)
    }
}

const updateVouch = async (req, res) => {
    let { id } = req.params
    try {
        let update = await Vouchers.findByIdAndUpdate(id, req.body);
        res.json(update)
    } catch (er) {
        res.status(404).send(er.message)
    }
}
module.exports = {
    getVouchers,
    addVouch ,
    updateVouch,
    deleteVouch
}
