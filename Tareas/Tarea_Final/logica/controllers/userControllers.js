const db = require('../db');

exports.getUsers = (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) return res.send("Error al obtener usuarios");
        res.render('index', { users: results });
    });
};

exports.addUser = (req, res) => {
    const { name, email } = req.body;
    db.query('INSERT INTO users (usuario, correo) VALUES (?, ?)', [name, email], (err) => {
        if (err) return res.send("Error al agregar usuario");
        res.redirect('/');
    });
};

exports.editUser = (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {
        if (err) return res.send("Error al obtener usuario");
        res.render('edit', { user: results[0] });
    });
};

exports.updateUser = (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    db.query('UPDATE users SET usuario=?, correo=? WHERE id=?', [name, email, id], (err) => {
        if (err) return res.send("Error al actualizar usuario");
        res.redirect('/');
    });
};

exports.deleteUser = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM users WHERE id=?', [id], (err) => {
        if (err) return res.send("Error al eliminar usuario");
        res.redirect('/');
    });
};