const Employee = require('../models/employee')
const jwt = require('jsonwebtoken')

 function creaeteToken(mail = "", password = "") {
    let token;
    if (mail !== "" && password !== "")
         token =
            jwt.sign({ mail, password }, process.env.myCode)
    return token;
}

//רישום
const newEmployee = async (req, res) => {
    try {
        req.body.status="Candidate"
        let newEmployee = new Employee(req.body)
        await newEmployee.save()
        creaeteToken(req.body.mail, req.body.password)
        res.status(200).json({ "The new employee was created successfully": newEmployee })
    }
    catch (err) {
        res.status(500).json({ "error": err.message })
    }
}

const getAllEmploee = async (req, res) => {
    try {
        let allEmployee = await Employee.find()
        res.status(200).json({ "the all Employee :": allEmployee })
    }
    catch (err) {
        res.status(500).json({ "error": err.message })
    }

}

const getEmploeeById = async (req, res) => {
    try {
        let myEmployee = await Employee.findById(req.params.id)
        res.status(200).json({ "the Employee :": myEmployee })
    }
    catch (err) {
        res.status(500).json({ "error": err.message })
    }

}


const updateEmployee = async (req, res) => {
    try {
        let employee = await Employee.findByIdAndUpdate(req.params.id,req.body)
        await employee.save();
        res.status(200).send("successfully updated")
    }
    catch (err) {
        res.status(500).json({ "error": err.message })
    }
}

module.exports = { newEmployee, getAllEmploee, getEmploeeById,updateEmployee, creaeteToken }