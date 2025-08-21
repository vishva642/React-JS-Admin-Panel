const sendMailer = require("../config/mailer")
const User = require("../models/userModel")
const { forgotTemplate } = require("../utils/htmlFormat")
const { plainToHash, hashToPlain } = require("../utils/password")
const otpGenerator = require('otp-generator')
const jwt = require('jsonwebtoken')
exports.signup = async (req, res) => {
    try {
        const { name, email, password } = req.body

        const checkEmail = await User.findOne({ email })

        if (checkEmail) {
            res.json({
                success: false,
                message: "email id already exist"
            })
        } else {
            const hash_pass = await plainToHash(password)

            await User.create({ name, email, password: hash_pass })
            res.json({
                success: true,
                message: "user create successfully!"
            })
        }
    } catch (error) {
        console.log('error: ', error);
    }
}

exports.login = async (req, res) => {
    const { email, password } = req.body
    const checkEmail = await User.findOne({ email })
    if (checkEmail) {
        const plain_pass = await hashToPlain(password, checkEmail.password)
        if (!plain_pass) {
            res.json({
                success: false,
                message: "password not match"
            })
        }

        const payload = {
            id:checkEmail._id,
            name:checkEmail.name,
            email:checkEmail.email,
            role_id:checkEmail.role_id
        }

        const token = jwt.sign(payload,process.env.secret_key,{expiresIn:'1d'})

        res.header('admin', token)
        res.json({
            success: true,
            message: "login successfully!",
            token
        })
    } else {
        res.json({
            success: false,
            message: "email id not register"
        })
    }
}

exports.logout = async (req, res) => {
    try {
        const id = req.user.id
        if (!id) {
            res.json({
                success: false,
                message: "token not found"
            })
        }
        await res.clearCookie('admin')
            .json({
                success: true,
                message: "user logout"
            })
    } catch (error) {
        console.log('error: ', error);
    }
}

exports.changePassword = async (req, res) => {
    
    const id = req.user.id
    const { old_password, new_password, confirm_password } = req.body
    const existUser = await User.findById(id)
    if (!existUser) {
        res.json({
            success: false,
            message: "user not found"
        })
    }
    const match = await hashToPlain(old_password, existUser.password)
    if (!match) {
        res.json({
            success: false,
            message: "old password not match"
        })
    }

    if (new_password === confirm_password) {
        const hash_pass = await plainToHash(new_password)
        await User.findByIdAndUpdate(
            id,
            {
                password: hash_pass
            }
        )
        res.json({
            success: true,
            message: "password update successfully!"
        })
    } else {
        res.json({
            success: false,
            message: "confirm password not match"
        })
    }
}

exports.sendOtp = async (req, res) => {
    const { email } = req.body
    const existUser = await User.findOne({ email })
    if (!existUser) {
        res.json({
            success: false,
            message: "email id not exist"
        })
    }
    const token = otpGenerator.generate(6, { lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false });

    await sendMailer(email, 'otp for forgot password', forgotTemplate(token))
    await User.updateOne(
        { email: email },
        {
            token: token
        }
    )
    res.json({
        success: true,
        message: "check your mail"
    })
}

exports.forgotPassword = async (req, res) => {
    const { token, new_pass, confirm_pass } = req.body

    const existUser = await User.findOne({ token: token })
    if (!existUser) {
        res.json({
            success: false,
            message: "token not match"
        })
    }
    if (new_pass === confirm_pass) {
        const hash_pass = await plainToHash(new_pass)
        await User.updateOne(
            { token: token },
            {
                password: hash_pass,
                token: ""
            }
        )
        res.json({
            success: true,
            message: "password update successfully!"
        })
    } else {
        res.json({
            success: false,
            message: "confirm password not match"
        })
    }
}