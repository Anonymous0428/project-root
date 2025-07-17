const express = require('express');
const app = express();
const port = 3000;
import taskRouter from './routers/tasksroutes.js';

app.use(express.json());

app.use('/tasks', taskRouter);

app.listen(port, () => {
  console.log(`🚀 API server running on http://localhost:${port}`);
});