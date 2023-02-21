module.exports = (app, db, passport) => {
    const express = require('express');
    app.use(express.json());

    const getAllProducts = () => db.produits.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] }
    });
      

    app.get('/', (req, res) => {
        var io = req.app.get('socketio');
        io.on('connection', function(socket){
            socket.removeAllListeners();
            var cache = ""; var newCache = "";
            getAllProducts().then(data => newCache = JSON.stringify(data)).catch(err => newCache = { message: err.message || "Une erreur s'est produite lors de la récupération des produits." })
            if (newCache != cache){
                socket.emit('products', newCache); cache = newCache;
            }
            setInterval(() => {
                getAllProducts().then(data => newCache = JSON.stringify(data)).catch(err => newCache = { message: err.message || "Une erreur s'est produite lors de la récupération des produits." })
                if (newCache != cache){
                    socket.emit('products', newCache); cache = newCache;
                }
            }, 1000);
        });

        const data = {
            title: 'Produits'
        };
        res.render('index.ejs', data);
    });

};