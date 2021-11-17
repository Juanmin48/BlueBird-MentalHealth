import React from 'react'
import LandingPage from "./Components/Pages/LandingPage/LandingPage";
import Statistics from "./Components/Pages/Statistics/Statistics";
import PersonalAnalysis from "./Components/Pages/PersonalAnalysis/PersonalAnalysis";
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {

  // const [data, setData] = useState([{}])

  

  // useEffect(() => {
  //   fetch("/members").then(
  //     res => res.json()
  //   ).then(
  //     data =>{
  //       setData(data)
  //       console.log(data)
  //     }
  //   )
  // }, [])

  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/statistics" component={Statistics}/>
        <Route exact path="/PersonalAnalysis" component={PersonalAnalysis}/>
        {/* <Route exact path="/" component={LandingPage}/>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/" component={LandingPage}/> */}
          {/* <div>
            {(typeof data.members === 'undefined')? (
              <p>Loading...</p>
            ):(
              data.members.map((member, i)=>(
                <p key={i}>{member}</p>
              ))
            )}
          </div> */}
      </Switch>
    </BrowserRouter>
  )
}

export default App
