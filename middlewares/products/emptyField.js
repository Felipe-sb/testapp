exports.checkEmptySku = (req, res, next) => {
    const { sku } = req.body
    if (!sku) {
        res.render('addProduct', {
            login: req.session.loggedin,
            alert: true,
            alertTitle: 'Ooooooops',
            alertMessage: 'Por Favor Ingrese El SKU',
            alertIcon: 'warning',
            showConfirmButton: true,
            timer: false,
            ruta: 'admin/add-product',
        })
    } else {
        next()
    }
}
exports.checkEmptySkuUpdate = (req, res, next) => {
    const { sku } = req.body
    if (!sku) {
        res.render('updateProduct', {
            login: req.session.loggedin,
            alert: true,
            alertTitle: 'Ooooooops',
            alertMessage: 'Por Favor Ingrese El SKU',
            alertIcon: 'warning',
            showConfirmButton: true,
            timer: false,
            ruta: 'updateProduct',
        })
    } else {
        next()
    }
}
exports.checkEmptyName = (req, res, next) => {
    const { name } = req.body
    if (!name) {
        res.render('addProduct', {
            login: req.session.loggedin,
            alert: true,
            alertTitle: 'Ooooooops',
            alertMessage: 'Por Favor Ingrese El nombre',
            alertIcon: 'warning',
            showConfirmButton: true,
            timer: false,
            ruta: 'admin/add-product',
        })
    } else {
        next()
    }
}

exports.checkEmptyNameUpdate = (req, res, next) => {
    const { name } = req.body
    if (!name) {
        res.render('updateProduct', {
            login: req.session.loggedin,
            alert: true,
            alertTitle: 'Ooooooops',
            alertMessage: 'Por Favor Ingrese El nombre',
            alertIcon: 'warning',
            showConfirmButton: true,
            timer: false,
            ruta: 'updateProduct',
        })
    } else {
        next()
    }
}

exports.checkEmptyDescription = (req, res, next) => {
    const { description } = req.body
    if (!description) {
        res.render('addProduct', {
            login: req.session.loggedin,
            alert: true,
            alertTitle: 'Ooooooops',
            alertMessage: 'Por Favor Ingrese Una Descripcion',
            alertIcon: 'warning',
            showConfirmButton: true,
            timer: false,
            ruta: 'admin/add-product',
        })
    } else {
        next()
    }
}

exports.checkEmptyDescriptionUpdate = (req, res, next) => {
    const { description } = req.body
    if (!description) {
        res.render('updateProduct', {
            login: req.session.loggedin,
            alert: true,
            alertTitle: 'Ooooooops',
            alertMessage: 'Por Favor Ingrese Una Descripcion',
            alertIcon: 'warning',
            showConfirmButton: true,
            timer: false,
            ruta: 'updateProduct',
        })
    } else {
        next()
    }
}

exports.checkEmptyPrice = (req, res, next) => {
    const { price } = req.body
    if (!price) {
        res.render('addProduct', {
            login: req.session.loggedin,
            alert: true,
            alertTitle: 'Ooooooops',
            alertMessage: 'Por Favor Ingrese El Precio',
            alertIcon: 'warning',
            showConfirmButton: true,
            timer: false,
            ruta: 'admin/add-product',
        })
    } else {
        next()
    }
}

exports.checkEmptyPriceUpdate = (req, res, next) => {
    const { price } = req.body
    if (!price) {
        res.render('updateProduct', {
            login: req.session.loggedin,
            alert: true,
            alertTitle: 'Ooooooops',
            alertMessage: 'Por Favor Ingrese El Precio',
            alertIcon: 'warning',
            showConfirmButton: true,
            timer: false,
            ruta: 'updateProduct',
        })
    } else {
        next()
    }
}