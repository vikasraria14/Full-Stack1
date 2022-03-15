const express=require('express')
const date=require('date-and-time')
const app= express()
const morgan=require('morgan')

morgan('tiny')
const now = date
app.use(express.json())
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

    if(x)
    {
        res.status(200).json(x);
    }
    else
    {
        res.status(404).end('<h1>Not Found</h1>')
    }

    
})
app.get('/api/persons',(req,res)=>{
    res.status(200).json(persons)
})
app.delete('/api/persons/:id', (req,res)=>{
    id=Number(req.params.id)
    persons=persons.filter(person=>person.id!==id);
    res.status(204).json(persons)
})


app.post('/api/notes', (request, response) => {
    const note = request.body
    console.log(note)
    response.json(note)
  })

app.post('/api/persons',(req,res)=>{
    const body=req.body;
    const n=persons.find(person=>body.name===person.name)

    if(n)
    {
        
        return res.status(400).json({ 
            error: 'Name Already Exists'})
    }
    if(!(body.name&&body.number))
    {
        return res.status(400).json({ 
            error: 'content missing'})
    }
    console.log('hello ji')
    const obj={
        "id":Math.floor(Math.random()*100000),
        "name":body.name,
        "number":body.number
    }

    persons=persons.concat(obj);
    console.log(req.body)
    console.log('hike ',obj)
    res.status(200).json(persons);

})


const PORT=3001

app.listen(PORT,()=>{
    console.log('Server started')
})