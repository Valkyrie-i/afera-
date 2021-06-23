const {Achieves} = require('./../models/models')
const ApiError = require('./../Error/ApiError')
const uuid = require('uuid')
const path = require('path')

class achievesController{

    async create(req,res){
        try{
            const{title,description} = req.body
            const{img} = req.files
            let filename = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..','static',filename))
            const achieves = await Achieves.create({title,description,img:filename})
            return res.json(achieves)

        } catch (e){
            next(ApiError.badRequest(e.message))
        }


    }
    async getAll(req,res){
        const allAchieves = await Achieves.findAll()
        return res.json(allAchieves)
    }
}
module.exports = new achievesController()