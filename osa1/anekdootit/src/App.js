import React, {useState} from 'react'

const Button = (props) => 
  <button onClick={props.onClick}>
    {props.text}
  </button>

const Display = props => 
  <>
    <div>{props.text}</div>
    <div>has {props.vote} votes</div>
  </>
const DisplayHeader = props => <h1>{props.text}</h1>


const App = props => {

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  
  const [selected, setSelected] = useState(0)
  const [voteArray, setVoteArray] = useState(Array(6).fill(0))
  
  
  const setAnecdote = () => {
    const randNum = Math.floor(Math.random() * 6)
    setSelected(randNum)    
    
    console.log('anekdootin numero ', randNum)  
  }

  const setVote = (value) => {    
    let copyArray = {...voteArray}    
    let copyItem = voteArray[selected]    
    copyItem +=1    
    copyArray[selected] = copyItem
    setVoteArray(copyArray)

    console.log('voteArray', voteArray)   
  }



  return (
    <div>
      <DisplayHeader text='Anecdote of the day' />      
      <Display text={anecdotes[selected]} vote={voteArray[selected]} /> 
      <Button onClick={() => setVote(selected)} text='vote'/>
      <Button onClick={() => setAnecdote()} text='next anecdote'/>        
    </div>
  );
}
export default App;

