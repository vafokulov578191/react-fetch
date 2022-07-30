import React, {
  useState,
  useEffect
} from 'react'
import './App.css';


function App() {
  const [fake, setFake] = useState([])
  console.log(fake);
  useEffect(() => {
    ReactApp()
  }, [])

  const ReactApp = async () => {
    const res = await fetch("http://localhost:3001/users")
    const UserData = await res.json()
    setFake(UserData)
  }

  return (
    <div className = "countainer">
      {fake.map((item) => {
        return(
          <div className='box'>
            <div className="box_top">
                <img className='img' src={item.image} alt="" />
            </div>
            <div className="box_bottom">
                <span className='big_text'>{item.model}</span>
                <span className='decription'>{item.description}</span>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default App;