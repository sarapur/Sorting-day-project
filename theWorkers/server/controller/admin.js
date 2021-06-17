
const Employee = require('../models/employee')
const jwt = require('jsonwebtoken')
const functionEmployeeForToken = require('./employee')

//בדיקת הרשאות
const checkPermission = async (req, res) => {
    try {
        let user, token;
        if (req.body.mail == "admin@workwers.com" && req.body.password == process.env.passwordAdmin) {
            user = "admin"
            token = functionEmployeeForToken.creaeteToken("admin@workwers.com", "admin25765")
            console.log(token);
        }
        else
            if (await Employee.findOne({ mail: req.body.mail, password: req.body.password }))
                user = "employee"
            else
                res.status(402).send("non exsist")

        token = jwt.verify(functionEmployeeForToken.creaeteToken(), process.env.myCode)
        res.status(200).json({ "type": user, "jwt": token }
            // `hellow ${user}! your datails from jwt ": ${token}`
        )

    }
    catch (err) {
        res.status(500).json({ "error": err.message })
    }
}

module.exports = { checkPermission }

