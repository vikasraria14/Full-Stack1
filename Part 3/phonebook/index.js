const express=require('express')
const date=require('date-and-time')
const app= express()
const now = date
persons=[
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"

    }
]

app.get('/', (req,res)=>{
    res.send(persons)
})

app.get('/info', (req,res)=>{
    const d=new Date()
    console.log(d)
    res.send(date)
})

app.get('/api/persons/:id',(req,res)=>{
    const id=Number(req.params.id)
    const x=persons.find(person=>person.id===id)
    res.status(200).json(x);
})


const PORT=3001

app.listen(PORT,()=>{
    console.log('Server started')
})