
const mongoose = require("mongoose")

const employeeSchama = mongoose.Schema({
    name: {
        type: String
    },
    password: {
        type: String
    },
    mail: {
        type: String
      },
    status:
    {
        type: String
    }

})


module.exports = mongoose.model('employee',employeeSchama)