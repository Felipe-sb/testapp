exports.isSkus = (req, res, next) => {
    const { sku } = req.body;
    const skuint = parseInt(sku);
    if (isNaN(skuint)) {
        res.render('addProduct', {
            login: req.session.loggedin,
            alert: true,
            alertTitle: 'Ooooops',
            alertMessage: 'El SKU debe ser numerico',
            alertIcon: 'alert',
            showConfirmButton: true,
            timer: false,
            ruta: 'addProduct',
        });
    } else {
        if (skuint <= 0) {
            res.render('addProduct', {
                login: req.session.loggedin,
                alert: true,
                alertTitle: 'Ooooops',
                alertMessage: 'El SKU debe ser mayor a 0',
                alertIcon: 'alert',
                showConfirmButton: true,
                timer: false,
                ruta: 'addProduct',
            });
        } else {
            next();
        }
    }
};

exports.isSkuUpdate = (req, res, next) => {
    const { sku } = req.body;
    const skuint = parseInt(sku);
    if (isNaN(skuint)) {
        res.render('updateProduct', {
            login: req.session.loggedin,
            alert: true,
            alertTitle: 'Ooooops',
            alertMessage: 'El SKU debe ser numerico',
            alertIcon: 'alert',
            showConfirmButton: true,
            timer: false,
            ruta: 'updateProduct',
        });
    } else {
        if (skuint <= 0) {
            res.render('updateProduct', {
                login: req.session.loggedin,
                alert: true,
                alertTitle: 'Ooooops',
                alertMessage: 'El SKU debe ser mayor a 0',
                alertIcon: 'alert',
                showConfirmButton: true,
                timer: false,
                ruta: 'updateProduct',
            });
        } else {
            next();
        }
    }
};

exports.isPrice = (req, res, next) => {
    const { price } = req.body;
    const priceint = parseInt(price);
    if (isNaN(priceint)) {
        res.render('addProduct', {
            login: req.session.loggedin,
            alert: true,
            alertTitle: 'Ooooops',
            alertMessage: 'El precio debe ser numerico',
            alertIcon: 'alert',
            showConfirmButton: true,
            timer: false,
            ruta: 'addProduct',
        });
    } else {
        if (priceint <= 0) {
            res.render('addProduct', {
                login: req.session.loggedin,
                alert: true,
                alertTitle: 'Ooooops',
                alertMessage: 'El el precio debe ser mayor a 0',
                alertIcon: 'alert',
                showConfirmButton: true,
                timer: false,
                ruta: 'addProduct',
            });
        } else {
            next();
        }
    }
};

exports.isPriceUpdate = (req, res, next) => {
    const { price } = req.body;
    const priceint = parseInt(price);
    if (isNaN(priceint)) {
        res.render('updateProduct', {
            login: req.session.loggedin,
            alert: true,
            alertTitle: 'Ooooops',
            alertMessage: 'El precio debe ser numerico',
            alertIcon: 'alert',
            showConfirmButton: true,
            timer: false,
            ruta: 'updateProduct',
        });
    } else {
        if (priceint <= 0) {
            res.render('updateProduct', {
                login: req.session.loggedin,
                alert: true,
                alertTitle: 'Ooooops',
                alertMessage: 'El el precio debe ser mayor a 0',
                alertIcon: 'alert',
                showConfirmButton: true,
                timer: false,
                ruta: 'updateProduct',
            });
        } else {
            next();
        }
    }
};