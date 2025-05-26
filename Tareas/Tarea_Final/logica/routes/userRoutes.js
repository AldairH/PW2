const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');

router.get('/', userController.getUsers);
router.get('/add', (req, res) => {
    res.render('add');
});
router.post('/add', userController.addUser);
router.get('/edit/:id', userController.editUser);
router.post('/update/:id', userController.updateUser);
router.get('/delete/:id', userController.deleteUser);

module.exports = router;
