import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import { sum, sub, mult, div, modulo, equality } from './operations'

class App extends React.Component {
  constructor(props) { 
    super(props)
    this.state = { 
      valStr:"0",
      valInt:[],
      haveFirstVal: false,
      pastOperation: ""
     }
   }
  addToVal(value){
    console.log(value)
    let valS = this.state.valStr
    let fVal = this.state.haveFirstVal

    if (!fVal && valS.length < 9){
      if(valS==="0"){
        valS = value
      }
      else{
        valS += value
      }
    }
    else if (fVal && ((valS.length) < 9)){
      fVal = false
      valS = ""
      valS += value
    }
    
    this.setState({
      valStr: valS,
      haveFirstVal: fVal
    })
  }
  handleOperation(op){
    let valS = this.state.valStr
    let valI = this.state.valInt
    let fVal = this.state.haveFirstVal
    let passOP = this.state.pastOperation
    console.log("op, passOP", op, passOP)


    if (op === "ce"){
      console.log(valS.length)
      let valueend = (valS.length - 1)
      valS = valS.substring(0, valueend)
      if ( valS ===""){
        valS = "0"
      }
      console.log(valS)
    }
    else if(op ==="c"){
      valS = "0"
      valI = []
      fVal = false
    }
    else if (op === "="){
      
      let result = this.doLastOP(passOP, valI[0], parseInt(valS))
      valI = []
      valS = result.toString()
      passOP = "="
      fVal = true
      
    }
    else {
      if((valI.length) == 1){
        let result = this.doLastOP(passOP, valI[0], parseInt(valS))
        valI[0] = result
        valS = result.toString()
        fVal = true
        passOP = op
      }
      else {
        valI.push(parseInt(valS)) 
        passOP = op
        fVal = true
      }
    }
    if(parseInt(valS)<0 || parseInt(valS)>999999999){
      valS = "ERROR"
      valI = []
      fVal = false
      alert('calc ERROR, please press "C" to restart the calc')
    }

    this.setState({
      valStr:valS,
      valInt:valI,
      haveFirstVal:fVal,
      pastOperation: passOP
    })  
  }

  doLastOP(op, a, b){
    switch(op){
      case "+":
        return sum(a, b)
      case "-":
        return sub(a, b)
      case "*":
        return mult(a, b)
      case "/":
        return div(a, b)
      case "%":
        return modulo(a, b)
      case "==":
        alert('"==" shows 1 if true, else 0')
        return equality(a, b)
      default:
        return 
    }
  }

  render() {
    console.log(this.state.valInt)
    console.log(this.state.valStr)
    return (
      <div className="index" >
        <h1>Calculator</h1>
        <div className="calculator">
          <div className="display"> {this.state.valStr} </div>
          <div className="keys">
            <button onClick={this.handleOperation.bind(this, "c")}> c </button>
            <button onClick={this.handleOperation.bind(this, "ce")}> ce</button>
            <button onClick={this.handleOperation.bind(this,"%")}> % </button>
            <button onClick={this.handleOperation.bind(this,"/")}> / </button>
            <button onClick={this.addToVal.bind(this,"7")} > 7 </button>
            <button onClick={this.addToVal.bind(this,"8")}> 8 </button>
            <button onClick={this.addToVal.bind(this,"9")}> 9 </button>
            <button onClick={this.handleOperation.bind(this,"*")}> x </button>
            <button onClick={this.addToVal.bind(this,"4")}> 4 </button>
            <button onClick={this.addToVal.bind(this,"5")}> 5 </button>
            <button onClick={this.addToVal.bind(this,"6")}> 6 </button>
            <button onClick={this.handleOperation.bind(this,"-")}> - </button>
            <button onClick={this.addToVal.bind(this,"1")}> 1 </button>
            <button onClick={this.addToVal.bind(this,"2")}> 2 </button>
            <button onClick={this.addToVal.bind(this,"3")}> 3 </button>
            <button onClick={this.handleOperation.bind(this,"+")}> + </button>
            <button>  </button>
            <button onClick={this.addToVal.bind(this,"0")}> 0 </button>
            <button onClick={this.handleOperation.bind(this,"==")}> == </button>
            <button className="equals" onClick={this.handleOperation.bind(this,"=")}> = </button>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('index'))
