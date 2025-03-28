import { Routes,Route} from 'react-router-dom';
import Education from './Education';
import About_me from './About_me';
import  Home from './Home';
import Skills from './Skills';
import NavBar from './NavBar';
import Project from './Project';
import Communication from './Communication';
import Fotter from './Fotter';
import Mouse from './Mouse';
function App(){
    return(
<>

<NavBar></NavBar>
<Mouse/>
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/About" element={<About_me/>}/>
    <Route path="/Education" element={<Education/>}/>
    <Route path="/Skills" element={<Skills/>}/>
    <Route path="/Project" element={<Project/>}/>
    <Route path='/Communication' element={<Communication/>}></Route>
</Routes>

<Fotter></Fotter>
</>
    )

}
export default App;