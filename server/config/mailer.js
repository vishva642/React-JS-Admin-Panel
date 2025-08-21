const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'rwa3.jyoti.sj@gmail.com',
        pass:"pqtw wgbu lnha tawy"
    }
})

async function sendMailer(to,subject,html){
    const option = {
        from: 'rwa3.jyoti.sj@gmail.com',
        to: to,
        subject: subject,
        html:html
    }
    await transporter.sendMail(option,(err,info)=>{
        if(err){
            console.log(err)
        }else{
            // console.log(info)
            console.log("send mail")
        }
    })
}

module.exports = sendMailer