import React from "react";
import De from './De';
import'./Lancer.css';
 class LanceDe extends React.Component {
	
    constructor(props) {
      super(props);
      this.state = { num1: 1 , num2: 1};
      this.lancer = this.lancer.bind(this);
      
    }

      lancer(e) {  
         
        this.setState({
            num1: Math.floor(Math.random() * this.props.max )+1,
            num2: Math.floor(Math.random() * this.props.max) +1
        })
        
      }

    render() {
      return (
          <div className="Lancer">
            <div className="dés">
            <De className="num1"  number1={this.state.num1}/>
             <De className="num2" number2={this.state.num2}/>
            </div>
            
             <h2>{this.state.num1}</h2>
             <h2>{this.state.num2}</h2> 
             <p className="text">{this.state.num1 === this.state.num2 ? 'you win'  : 'try a again' }</p>
             <button className="btn" onClick = {this.lancer} >lancer les dés </button>
          </div>
      );
    }
  }
export default LanceDe;