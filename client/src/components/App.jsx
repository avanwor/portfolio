import React from 'react';
import Navhead from './Navhead.jsx';
import Intro from './Intro.jsx'
import About from './About.jsx';
import Skills from './Skills.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
//import { Button, ButtonToolbar } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div >
        <Navhead />
        <Intro />
        <About />
        <Skills />
        <Projects /> 
        <Contact />
      </div>
    )
  }
}

export default App;