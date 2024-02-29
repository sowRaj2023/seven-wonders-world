import { BrowserRouter,Route,Switch } from 'react-router-dom'

import Header from './components/Header'
import WondersList from './components/WondersList'
import About from './components/About'
import NotFound from './components/NotFound'
import Comments from "./components/Comments"


const App = () => (

  <BrowserRouter>
   
    <Header />
    <Switch>
    <Route exact path="/" component = {WondersList} />
    <Route exact path="/about" component = {About} />
    <Route exact path ="/comments" component = {Comments}/>
    <Route component = {NotFound} />
    </Switch>

  </BrowserRouter>
)

export default App



