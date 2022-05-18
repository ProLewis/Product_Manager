const ProductController = require('../controllers/pMan.controller');

module.exports = function(app){
    app.get('/api/product/:id', ProductController.findOneProduct);
    app.post('/api/product', ProductController.createProduct);
    app.get('/api/products', ProductController.findAllProducts);
    app.put('/api/product/:id/edit', ProductController.editProduct);
    app.delete('/api/product/:id', ProductController.deleteProduct);
}