import React from 'react';
import ReactDOM from 'react-dom';



function fetchData(param) {
  // param is a highlighted word from the user before it clicked the button
  return fetch("https://localhost:5001/Music/" + param);
}

class App extends React.Component {
  state = { result: null };

  toggleOne = () => {
    let word = 'NotAfraid';
    fetchData(word).then((resp)=>{ return resp.text() })
    .then((text)=>{ 
      this.setState({
        result: text
      })
     })
  };

  toggleTwo = () => {
    let word = 'RiseUp';
    fetchData(word).then((resp)=>{ return resp.text() })
    .then((text)=>{ 
      this.setState({
        result: text
      })
     })
  };

  toggleThree = () => {
    let word = 'AllTheStars';
    fetchData(word).then((resp)=>{ return resp.text() })
    .then((text)=>{ 
      this.setState({
        result: text
      })
     })
  };

  render() {
    const { result } = this.state;
    return (
      <div>    
      <div style={{"text-align":"left"}}>
        <div>
            <div>
            <button onClick={this.toggleOne}> Not Afraid </button>
            </div>
        </div>
      <div>
          <div>
          <button onClick={this.toggleTwo}> Rise Up </button>
          </div>
      </div>
          <div>
          <div>
          <button onClick={this.toggleThree}> All The Stars </button>
          </div>
      </div>
      </div>
        
      <div dangerouslySetInnerHTML={{__html: result}}></div>       
      </div>
    );
  }
}

export default App;
