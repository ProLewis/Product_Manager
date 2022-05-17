const ProductController = require('../controllers/pMan.controller');

module.exports = function(app){
    app.get('/api', ProductController.index);
    app.get('/api/product/:id', ProductController.findOneProduct);
    app.post('/api/product', ProductController.createProduct);
    app.get('/api/products', ProductController.findAllProducts);
}