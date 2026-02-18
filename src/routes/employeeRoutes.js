const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/employeeController');

router.route('/search').get(ctrl.searchEmployees);

router.route('/')
  .get(ctrl.getEmployees)
  .post(ctrl.createEmployee);

router.route('/:id')
  .get(ctrl.getEmployee)
  .put(ctrl.updateEmployee)
  .delete(ctrl.deleteEmployee);

module.exports = router;
