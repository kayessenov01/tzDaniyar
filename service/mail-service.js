const nodemailer = require('nodemailer');

class MailService {

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: "abylaytest85@gmail.com",
                pass: "idarsbjcokqockky"
            }
        })
    }

    async sendActivationMail(to, link) {
        await this.transporter.sendMail({
            from: "abylaytest85@gmail.com",
            to,
            subject: 'Активация аккаунта на '+process.env.API_URL,
            text: '',
            html:
                `
                    <div>
                        <h1>Для активации перейдите по ссылке</h1>
                        <a href="${link}">${link}</a>
                    </div>
                `
        })
    }
}

module.exports = new MailService();