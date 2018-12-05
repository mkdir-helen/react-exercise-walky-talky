import React, { Component } from 'react';

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            input: '',
            output: ''
        }
    }
  render() {
    return (
      <div>
        <input value={this.state.input} onChange={this._onChange}  />
        <div>
            <h3>Normal Output</h3>
            <p>
                {this.state.output}
            </p>
        </div>
        <div>
            <h3>Capital Output</h3>
            <p>
                {this.state.output.toUpperCase()}
            </p>
        </div>
        
        <div>
            <h3>Leet Output</h3>
            <p>
                {this._onLeet(this.state.input)}
            </p>
        </div>
        <div>
            <h3>Capital Leet Output</h3>
            <p>
                {(this._onLeet(this.state.input)).toUpperCase()}
            </p>
        </div>
      </div>
    )
  }

  _onChange = (e) => {
    this.setState ({
        input: e.target.value,
        output: e.target.value
    })    
}

_onLeet = (originaltext) => {
    const alphabets = {
        a: "4",
        b: "8",
        e: "3",
        g: "6",
        i: "1",
        o: "0",
        p: "9",
        s: "5",
        t: "7",
        z: "2"
      }
      let text = originaltext.toLowerCase();  
      let sentence = "";  
      for (let i = 0; i < text.length; i++) {
        if (alphabets[text[i]]) {
          sentence += alphabets[text[i]];
        } else{
            sentence += text[i];
        }
    }
    return sentence;
}
}
