const { Product } = require('../models/pMan.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
};

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json({ products: allProducts }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneProduct = (req, res) => {
    Product.findById(req.params.id)
        .then(oneProduct => res.json({ product: oneProduct }))
        .catch(err => res.json({ message: "Something went wrong", error: err }))
};

module.exports.createProduct = (request, response) => {
    Product.create(request.body)
        .then(newlyCreatedProduct => response.json({ product: newlyCreatedProduct }))
        .catch(err => response.json(err));
};

module.exports.editProduct = (request, response) => {
    Product.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
        .then(updatedProduct => response.json({ products: updatedProduct }))
        .catch(err => response.json({ message: "Something went wrong", error: err }))
};

module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({ _id : request.params.id })
        .then(result => response.json({result: result}))
        .catch(err => response.json({ message: "Something went wrong", error: err }))
}