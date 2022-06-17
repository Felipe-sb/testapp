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
            ruta: 'addProduct',
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
    const nameRegex= /^(?!\s*$).+/
    if (!nameRegex.test(name)) {
        res.render('addProduct', {
            login: req.session.loggedin,
            alert: true,
            alertTitle: 'Ooooooops',
            alertMessage: 'Por Favor Ingrese El Nombre',
            alertIcon: 'warning',
            showConfirmButton: true,
            timer: false,
            ruta: 'addProduct',
        })
    } else {
        next()
    }
}

exports.checkEmptyGame = (req, res, next) => {
    const { game } = req.body
    const gameRegex= /^(?!\s*$).+/
    if (!gameRegex.test(game)) {
        res.render('addProduct', {
            login: req.session.loggedin,
            alert: true,
            alertTitle: 'Ooooooops',
            alertMessage: 'Por Favor Ingrese El Juego',
            alertIcon: 'warning',
            showConfirmButton: true,
            timer: false,
            ruta: 'addProduct',
        })
    } else {
        next()
    }
}

exports.checkEmptyNameUpdate = (req, res, next) => {
    const { name } = req.body
    const nameRegex= /^(?!\s*$).+/
    if (!nameRegex.test(name)){
        res.render('updateProduct', {
            login: req.session.loggedin,
            alert: true,
            alertTitle: 'Ooooooops',
            alertMessage: 'Por Favor Ingrese El Nombre',
            alertIcon: 'warning',
            showConfirmButton: true,
            timer: false,
            ruta: 'updateProduct',
        })
    } else {
        next()
    }
}

exports.checkEmptyGameUpdate = (req, res, next) => {
    const { game } = req.body
    const gameRegex= /^(?!\s*$).+/
    if (!gameRegex.test(game)){
        res.render('updateProduct', {
            login: req.session.loggedin,
            alert: true,
            alertTitle: 'Ooooooops',
            alertMessage: 'Por Favor Ingrese El Juego',
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
    const descriptionRegex= /^(?!\s*$).+/
    if (!descriptionRegex.test(description)){
        res.render('addProduct', {
            login: req.session.loggedin,
            alert: true,
            alertTitle: 'Ooooooops',
            alertMessage: 'Por Favor Ingrese Una Descripcion',
            alertIcon: 'warning',
            showConfirmButton: true,
            timer: false,
            ruta: 'addProduct',
        })
    } else {
        next()
    }
}

exports.checkEmptyDescriptionUpdate = (req, res, next) => {
    const { description } = req.body
    const descriptionRegex= /^(?!\s*$).+/
    if (!descriptionRegex.test(description)) {
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
            ruta: 'addProduct',
        })
    } else {
        next()
    }
}

exports.checkEmptyLevel = (req, res, next) => {
    const { level } = req.body
    if (!level) {
        res.render('addProduct', {
            login: req.session.loggedin,
            alert: true,
            alertTitle: 'Ooooooops',
            alertMessage: 'Por Favor Ingrese El Nivel',
            alertIcon: 'warning',
            showConfirmButton: true,
            timer: false,
            ruta: 'addProduct',
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

exports.checkEmptyLevelUpdate = (req, res, next) => {
    const { level } = req.body
    if (!level) {
        res.render('updateProduct', {
            login: req.session.loggedin,
            alert: true,
            alertTitle: 'Ooooooops',
            alertMessage: 'Por Favor Ingrese El Nivel',
            alertIcon: 'warning',
            showConfirmButton: true,
            timer: false,
            ruta: 'updateProduct',
        })
    } else {
        next()
    }
}