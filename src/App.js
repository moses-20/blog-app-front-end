import React from 'react';
import { BrowserRouter, Switch, Redirect, Route, NavLink } from 'react-router-dom'
import Home from './components/home/Home'
import About from './components/about/About'
import ReadBlog from './components/read/Read'
import WriteBlog from './components/write/Write'
import Article from './components/article/Article'

function App() {

  return (
     <BrowserRouter>
      <div className='app'>
        <div className='logo-wrap'> <h1> <span> MEST </span> Overflow </h1> </div>
        <div className='nav-wrap'>
          <nav>
            <div className='tab tab1'>
              <NavLink exact to='/' activeClassName='active'> Home </NavLink>
            </div>
            <div className='tab tab2'>
              <NavLink to='/about' activeClassName='active'> About </NavLink>
            </div>
            <div className='tab tab3'>
              <NavLink to='/contact' activeClassName='active'> Contact </NavLink>
            </div>
          </nav>
        </div>
      </div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/read'  component={ReadBlog}/>
        <Route exact path='/read/:slug' component={Article}/>
        <Route exact path='/write' component={WriteBlog}/>
        <Redirect to='/' />
      </Switch>
     </BrowserRouter>
  );
}

export default App;
