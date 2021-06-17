
const router = require('express').Router()
const functionOfEmployee = require('./controller/employee')
const functionOfAdmin = require('./controller/admin')

router.post('/checkPermission', functionOfAdmin.checkPermission)
router.get('/getAllEmploee', functionOfEmployee.getAllEmploee)
router.post('/newEmployee', functionOfEmployee.newEmployee)
router.post('/updateEmployee/:id', functionOfEmployee.updateEmployee)

module.exports = router
