const Office = require('./model');

exports.addOfficeaddress = (req, res, next) => {
    Office.create(req.body)
        .then(office => {
            res.status(201).json({ message: 'Office address added successfully', data: office })
        })
        .catch(err => console.log(err))
}

exports.getOfficeAddress = (req, res, next) => {
    let query = {
        city: req.params.city
    }
    Office.find(query)
        .then(offices => {
            res.status(200).json({ data: offices })
        })
        .catch(err => console.log(err))
}

exports.getSingleOfficeAddress = (req, res, next) => {
    Office.findOne({ _id: req.params._id })
        .then(office => {
            res.status(200).json({ list: office })
        })
        .catch(err => console.log(err))
}

exports.updateOfficeAddress = (req, res, next) => {
    Office.updateOne({ _id: req.params._id })
        .then(office => {
            res.status(201).json({ message: 'Office address updated successfully', data: office })
        })
        .catch(err => console.log(err))
}

exports.deteleOfficeAddress = (req, res, next) => {
    Office.deleteOne({ _id: req.params._id })
        .then(office => {
            res.status(200).json({ message: 'Office address deleted successfully', data: office })
        })
        .catch(err => console.log(err))
}