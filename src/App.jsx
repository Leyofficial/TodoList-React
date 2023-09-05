import './App.css'
import Header from './layouts/Header'

function App(props) {
  return (
    <div className='app'>
      <Header state={props.state} doneAction={props.doneAction} updateStateText={props.updateStateText} addTodo={props.addTodo} updateCompliteList={props.updateCompliteList}/>
    </div>
  )
}

export default App
