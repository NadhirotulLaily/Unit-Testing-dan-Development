const { Todo } = require('../models')


class Controller {
    static healthCheck(req, res, next) {
        res.status(200).json({message: "Hello World"})
    }
    
    static index (req, res, next) {
        Todo.findAll()
            .then(data => {
                res.status(200).json({data})
            })
            .catch(err => {
                next(err)
            })
    }

    static create(req, res, next) {
        Todo.create({
            title: req.body.title
        })
        .then(data => {
            res.status(201).json({ data, message: "Todo created!" });
        })
        .catch(err => {
            res.status(500).json({ error: "Something went wrong", details: err.message });
        });
    }

    static detail(req, res, next) {
        Todo.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(data => {
            if (!data) {
                res.status(404).json({ message: 'Todo not found!' });
            } else {
                res.status(200).json({ data });
            }
        })
        .catch(err => {
            res.status(500).json({ error: "Something went wrong", details: err.message });
        });
    }

    static delete(req, res, next) {
        Todo.findByPk(req.params.id)
            .then(data => {
                if (!data) {
                    res.status(404).json({ message: 'Todo not found!' });
                } else {
                    return Todo.destroy({ where: { id: req.params.id } });
                }
            })
            .then(data => {
                res.status(200).json({ message: 'Todo deleted!' });
            })
            .catch(err => {
                res.status(500).json({ error: "Something went wrong", details: err.message });
            });
    }
}

module.exports = Controller;