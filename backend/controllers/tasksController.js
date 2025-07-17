import dotenv from 'dotenv';
import Task from '../schema/tasksSchema.js';

dotenv.config();


exports.createTask = (req,res,next) => {
    const task = new Task({
        ...req.body 
    });

    task.save()
        .then((data) => res.status(200).json(data)) 
        .catch(error => res.json(error));
}

exports.getTask = (req,res,next) => {
    Task.find()
        .then(task => res.status(200).json(task)) 
        .catch(error => res.json(error));
}

exports.getTaskById = (req,res,next) => {
    Task.findOne({_id: req.params.id})
    .then(task => res.status(200).json(task)) 
    .catch(error => res.json(error));
}

exports.updateTask = (req,res,next) => {
     Task.updateOne({
        _id: req.params.id
    }, 
    {
        _id: req.params.id,
        ...req.body 
    })
        .then(() => res.status(200).json({message: "objet modifié"})) 
        .catch(error => res.json(error));
}

exports.deleteTask = (req,res,next) => {
    Task.deleteOne({
        _id: req.params.id
    })
        .then(() => res.status(200).json({message: "objet supprimé"})) 
        .catch(error => res.json(error));
}