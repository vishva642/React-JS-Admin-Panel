const jwt = require('jsonwebtoken')
exports.verifyUser = async (req, res, next) => {
    try {
        // console.log(req.headers.authorization)
        let token = req.headers.authorization
        if (!token) {
            res.json({
                success: false,
                message: "token not found"
            })
        }

        // console.log(token.split(" ")[1])
        token = token.split(" ")[1]
        // console.log(token)
        const verifyUser = jwt.verify(token, process.env.secret_key)
        // res.json(verifyUser)
        if (!verifyUser) {
            res.staus(401).json({
                success: false,
                message: "you are not authenticate"
            })
        }
        req.user = verifyUser
        next()
    } catch (error) {
        res.status(401).json({
            success: false,
            message: "token expired"
        })
    }
}

exports.isAdmin = async (req, res, next) => {
    const { role_id } = req.user
    if (role_id !== 1) {
        res.status(403).json({
            success: false,
            message: "you are not authorized"
        })
    }
    next()
}


exports.isUser = async (req, res, next) => {
    try {
        console.log(req.user)
        const { role_id } = req.user
        if (role_id !== 0) {
            res.status(403).json({
                success: false,
                message: "you are not authorized"
            })
        }
        next()
    } catch (error) {
        res.status(403).json({
            success: false,
            message: "you are not authorized"
        })
    }
}

exports.isAdminUser = async (req, res, next) => {
    try {
        console.log(req.user)
        const { role_id } = req.user
        if (role_id !== 0 || role_id !== 1) {
            res.status(403).json({
                success: false,
                message: "you are not authorized"
            })
        }
        next()
    } catch (error) {
        res.status(403).json({
            success: false,
            message: "you are not authorized"
        })
    }

}