const transporter = require('../helpers/transporter');

exports.contact = async (req, res) => {
    try {
        const { email, subject, text } = req.body;
        await transporter.sendMail({
            from: `"${email}" <${process.env.EMAIL}>`,
            to: `${process.env.EMAIL}`,
            subject: subject,
            text: text,
        });
        await transporter.sendMail({
            from: `"paytoowin" <${process.env.EMAIL}>`,
            to: `${email}`,
            subject: 'Contacto',
            text: 'En unos instantes nuestro equipo se contactara contigo',
        });
        res.render('contact', {
            alert: true,
            alertTitle: 'Operacion Exitosa!!!',
            alertMessage: `Tu mensaje ya ha sido recibido por nuestro equipo`,
            alertIcon: 'success',
            showConfirmButton: true,
            timer: false,
            ruta: '/contact',
        });
    } catch (error) {
        console.log(error);
    }
};
