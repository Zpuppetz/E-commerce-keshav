const express = require("express");
const Review = require("../model/Review");
const Product = require("../model/Product");

const router = express.Router();

router.post("/products/:id/review", async(req, res) => {
    let {id} = req.params
    let { rating, comments } = req.body
    
    let product = await Product.findById(id)
    let review = new Review({ rating, comments })
    product.reviews.push(review)
    await product.save()
    await review.save()

    req.flash('success','review added succesfullly')

    res.redirect(`/products/${id}`)
})


module.exports = router
