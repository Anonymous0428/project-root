import mongoose from 'mongoose'

const  taskSchema = mongoose.Schema({
    taskName:{type:String , required:true},
    startDate: { type: Date, required: true },
    endDate: { type: Date, required : true },
});

export default mongoose.model('tasks', taskSchema);