const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 5000;

app.use(cors())
const projects = require('./data/project.json')


app.get('/', (req, res) =>{
     res.send('server is running')
})

app.get('/projects', (req, res)=>{
     res.send(projects)
})

app.get('/project/:id', (req, res)=>{
     const id = req.params.id;
     const selectdProject = projects.find(project => project.id == id);
     res.send(selectdProject)
})

app.listen(port, ()=>{
     console.log('server is running at port ', port)
})