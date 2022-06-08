const transporter = require('../helpers/transporter');

exports.banAccount = async (req, res) => {
    const { sku, reason, email, message } = req.body;
    await transporter.sendMail({
        from: `"payTooWin" <${email}>`,
        to: 'paytoowin.noreply@gmail.com',
        subject: `${email} por la razon ${reason}`,
        text: `Producto ${sku}\n${message}`,
    });
    res.status(200).json({ msg: 'email recibido' });
    // res.render('baned-account',{
    //     msg:'reclamo enviado'
    // })
};
