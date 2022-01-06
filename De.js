import React from "react";
import img1 from "./dés/1.png"
import img2 from "./dés/2.png"
import img3 from "./dés/3.png"
import img4 from "./dés/4.png"
import img5 from "./dés/5.png"
import img6 from "./dés/6.png"
class De extends React.Component{
render(){
    return(
        <div>
       <p>{(this.props.number1  || this.props.number2) === 1   ? <img src ={img1} /> :''}</p>
             <p>{(this.props.number1 || this.props.number2) === 2  ? <img src ={img2} />:''} </p>
             <p>{(this.props.number1  || this.props.number2) === 3  ? <img src ={img3} />:''}</p>
             <p>{(this.props.number1  || this.props.number2) === 4  ? <img src ={img4} />:''}</p>
             <p>{(this.props.number1  || this.props.number2) === 5  ? <img src ={img5} />:''}</p>
             <p>{(this.props.number1  || this.props.number2) === 6  ? <img src ={img6} />:''}</p>
             <br/>
             <p>{ (this.props.number1  && this.props.number2) === 1  ? <img src ={img1} /> :''}</p>
             <p>{ (this.props.number1 && this.props.number2) === 2  ? <img src ={img2} />:''} </p>
             <p>{ (this.props.number1  && this.props.number2) === 3  ? <img src ={img3} />:''}</p>
             <p>{ (this.props.number1  && this.props.number2) === 4  ? <img src ={img4} />:''}</p>
             <p>{(this.props.number1  && this.props.number2) === 5  ? <img src ={img5} />:''}</p>
             <p>{(this.props.number1  && this.props.number2)=== 6  ? <img src ={img6} />:''}</p>
             <br/>
        </div>
    )
}
}export default De;