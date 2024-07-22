const controller = {};

controller.list = (req,res) => {
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM crud', (err, customers) => {
            res.render('customers', {
                data: customers
            });
        });
    });
};

controller.save = (req,res) => {
    res.send('save');
};

module.exports = controller;