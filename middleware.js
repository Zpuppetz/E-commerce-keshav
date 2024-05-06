const { productSchema, reviewSchema } = require("./schema")

let validateProduct = (req, res, next) => {
    let { name, image, price, desc } = req.body
    let { error } = productSchema.validate({ name, image, price, desc });
    if (error ){
        let errrMsg = error.details.map((item) => {
        return  item.message
    })
    return res.render("error",{err:errrMsg})
    }
    next()

}

let validateReview = (res, req, next) => {
    let { rating, comment } = req.body
    let { error } = reviewSchema.validate({ rating, comment })
    if (error) {
        let errrMsg = error.details.map((item) => {
            return item.message
        });
            return res.render("error",{err:errrMsg})
    }
    next()

}
module.exports = {validateProduct , validateReview}