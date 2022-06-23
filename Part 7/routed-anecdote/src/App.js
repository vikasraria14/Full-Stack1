import { useState } from 'react'
import {useField} from './hooks/hooks'
import {BrowserRouter as Router, Routes, Route,Link, useParams, useNavigate} from 'react-router-dom'

const Menu = () => {
  const padding = {
    paddingRight: 5
  }
/*
  <a href='#' style={padding}>anecdotes</a>
      <a href='#' style={padding}>create new</a>
      <a href='#' style={padding}>about</a>
      */
  return (
    <div>
      <Link to='/' style={padding}>anecdotes</Link>
      <Link to='/create' style={padding}>create new</Link>
      <Link to='/about' style={padding}>about</Link>
      
    </div>
  )
}

const AnecdoteList = ({ anecdotes }) => (
  <div>
    <h2>Anecdotes</h2>
    <ul>
      {anecdotes.map(anecdote => 
        <li key={anecdote.id} >
          <Link to={`anecdote/${anecdote.id}`}> {anecdote.content}</Link>
        </li>
      )}
    </ul>
  </div>
)

const About = () => (
  <div>
    <h2>About anecdote app</h2>
    <p>According to Wikipedia:</p>

    <em>An anecdote is a brief, revealing account of an individual person or an incident.
      Occasionally humorous, anecdotes differ from jokes because their primary purpose is not simply to provoke laughter but to reveal a truth more general than the brief tale itself,
      such as to characterize a person by delineating a specific quirk or trait, to communicate an abstract idea about a person, place, or thing through the concrete details of a short narrative.
      An anecdote is "a story with a point."</em>

    <p>Software engineering is full of excellent anecdotes, at this app you can find the best and add more.</p>
  </div>
)

const Footer = () => (
  <div>
    Anecdote app for <a href='https://fullstackopen.com/'>Full Stack Open</a>.

    See <a href='https://github.com/fullstack-hy2020/routed-anecdotes/blob/master/src/App.js'>https://github.com/fullstack-hy2020/routed-anecdotes/blob/master/src/App.js</a> for the source code.
  </div>
)


const CreateNew = (props) => {
  const navigate=useNavigate()
  //const [content, setContent] = useState('')
  //const [author, setAuthor] = useState('')
  //const [info, setInfo] = useState('')
  
  const content=useField('content');
  const author=useField('author');
  const info=useField('info');
  const reset=useField('reset')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    props.addNew({
      content:content.value,
      author:author.value,
      info:info.value,
      votes: 0
    })
    props.setNotification(`You added ${content}`)
    setTimeout(()=>props.setNotification(null),3000)
    navigate('/')
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input name={content.name} value={content.value} onChange={content.onChange} />
        </div>
        <div>
          author
          <input {...author} />
        </div>
        <div>
          url for more info
          <input {...info} />
        </div>
        <button>create</button>
        <button>reset</button>
      </form>
    </div>
  )

}

const Anecdote=({anecdotes})=>{
  const id=useParams().id
  console.log(id)
  const anec=anecdotes.find(anecdote=>{
    console.log(anecdote.id===id)
    return anecdote.id===Number(id)
  })
  console.log(anec)
 // const anec="Hello There"
  return(
    <div>
      <h1>{anec.content}</h1>
      <h3>Authur : {anec.author}</h3>
      <h3>URL : <a href={anec.info}>{anec.info}</a></h3>
      <h3>Votes : {anec.votes}</h3>
    </div>
  )

}

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2
    }
  ])

  const [notification, setNotification] = useState('')

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000)
    setAnecdotes(anecdotes.concat(anecdote))
  }

  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }

  return (

    <Router>
        <h1>Software anecdotes</h1>
        <Menu />
        {notification}
        <Routes>
          <Route path='/anecdote/:id' element={<Anecdote anecdotes={anecdotes}/>} />
          <Route path="/create" element={<CreateNew addNew={addNew} setNotification={setNotification}/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/" element={<AnecdoteList anecdotes={anecdotes}/>}/>
        </Routes>
            <Footer />
        
    </Router>
    

    
  )
 // <AnecdoteList anecdotes={anecdotes} />
   //   <About />
     // <CreateNew addNew={addNew} />
}

export default App
