const Home = require('./model');

exports.addHomeaddress = (req, res, next) => {
    Home.create(req.body)
        .then(home => {
            res.status(201).json({ message: 'Home address added successfully', data: home })
        })
        .catch(err => console.log(err))
}

exports.getHomeAddress = (req, res, next) => {
    let query = {
        city: req.params.city
    }
    Home.find(query)
        .then(homes => {
            res.status(200).json({ data: homes })
        })
        .catch(err => console.log(err))
}

exports.getSingleHomeAddress = (req, res, next) => {
    Home.findOne({ _id: req.params._id })
        .then(home => {
            res.status(200).json({ list: home })
        })
        .catch(err => console.log(err))
}

exports.updateHomeAddress = (req, res, next) => {
    Home.updateOne({ _id: req.params._id })
        .then(home => {
            res.status(201).json({ message: 'Home address updated successfully', data: home })
        })
        .catch(err => console.log(err))
}

exports.deteleHomeAddress = (req, res, next) => {
    Home.deleteOne({ _id: req.params._id })
        .then(home => {
            res.status(200).json({ message: 'Home address deleted successfully', data: home })
        })
        .catch(err => console.log(err))
}