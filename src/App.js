
import './App.css';
import Create from './component/create/Create';
import 'bootstrap/dist/css/bootstrap.min.css';
import Read from './component/read/Read';
import {BrowserRouter , Routes ,Route} from 'react-router-dom'
import Delete from './component/delete/Delete';
import Update from './component/update/Update';
import Header from './component/Header';


function App() {
  return (
    <BrowserRouter>
      
      <div className="main">
      
      <div>
      <h1>crud operation</h1>
      <Header/>
      </div>
      <Routes>
      <Route path='/update' Component={Update}/>
      <Route path='/delete' Component={Delete}/>
      <Route path='/read' Component={Read}/>
      <Route path='/create' Component={Create}/>
      </Routes>
      
    
    </div>
    
    </BrowserRouter>
    
    
  );
}

export default App;
