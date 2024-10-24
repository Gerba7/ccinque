const nodemailer = require("nodemailer");



export async function sendFormMail(data) {
    
    try {

        
        const gmailTransport = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            secure: false,
            port: 587,
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        })
        

        const mailOptions = {
            from: 'Cristina Cinque <ccinqueweb@gmail.com>',
            bcc: 'ccinqueweb@gmail.com, geralongobardi@gmail.com',
            subject: `Consulta desde la web de ${data.name}`,
            html:
            `<html>
                <body>
                    <h3><b>Nombre y Apellido:</b></h3>
                    <p>${data.name} ${data.surname}</p>
                    <br>
                    <h3><b>Email:</b></h3>
                    <p>${data.email}</p>
                    <br>
                    <h3><b>Telefono:</b></h3>
                    <p>${data.phone}</p>
                    <br>
                    <h3><b>Mensaje:</b></h3>
                    <p>${data.message}</p>
                    <br>
                </body>
            </html>`,
        };

        const res = await gmailTransport.sendMail(mailOptions);

        return res;
        
        
    } catch(err) {

        console.log(err);

    }



}

