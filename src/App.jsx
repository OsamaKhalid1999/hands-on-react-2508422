import './App.css';

const App = () => {
  const name = "StarGazers"
  return (
    <div className = "container">  
    <article>
      <hgroup>
        <img src = "images/group.png" alt = "StarGazers Group" />
        <h1 className='firstH1'>Meet the <i className = {'hiii'} id={'bye'}>{name}</i></h1>
        <h1 className='firstH1 secondH1'>Meet the <i className = {'hiii'} id={'bye'}>{name}</i></h1>
        <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
        <button classname = "outline" onClick = {()=> alert('Hi There')}></button>
      </hgroup>
    </article>     
    </div>
    
  )
}
export default App
