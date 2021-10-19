import logo from './logo.svg';
import { useState} from 'react';
import './App.css';
import { green } from '@material-ui/core/colors';
import { Link,Switch,Route ,useHistory} from "react-router-dom";
import { Button } from '@material-ui/core';
// import Button from '@mui/material-ui/core/Button';
import Card from '@mui/material/Card';


function App() {
 const brands = [{name:"samsung",model:"Galaxy", 
 desc:"Get Wide Range Of Samsung Products At Reasonable Price. Shop Now! Free Delivery. Best Value Deals. Cash On Delivery."},
{name:"Apple",model:"Iphone",
desc:"Discover the innovative world of Apple and shop everything iPhone, plus explore accessories, entertainment"},
{name:"Moto",model:"G",
desc:"Moto E · All phones · 5G phones · On sale. Compare Phones. Compare smartphones · Shop by carrier"},
{name:"Mi",model:"Note 5",
desc:"Xiaomi India official store helps you to discover Mi and Redmi Mobiles, accessories and ecosystem products including"}]

  
  return (
    
      <div className="App">
      {/* <LikeCounter  /> */}
      
      <Link to="/">Home</Link> <br/>
      <Link to="/about">About</Link> <br/>

      <Link to="/poll">show all phone models</Link> <br/>
      <Switch>
      <Route exact path="/">
          <Home />
        </Route>
        <Route path="/poll">
          <div className="poll-plans">
        {brands.map((brand,index)=> (<LikeCounter key={index} name={brand.name} model={brand.model} desc={brand.desc} />))}
</div>
        </Route>
        <Route path="/about">
          About Details!!!
        </Route>
        
      </Switch>
       
       </div>
       
  );
  
}
function Home(){
  const historys= useHistory();
  return(
    <>
    <Button onClick={()=>historys.goBack()} variant="outlined">Go Back</Button>
    {/* <button ></button> */}
    <Button onClick={()=>historys.push("/poll")} variant="outlined">go to poll</Button>
    {/* <button onClick={()=>historys.push("/poll")}>go to poll</button> */}
    <p>Welcome to home</p>

</>
  )}

export default App;


function LikeCounter(props){
const[like,setLike]= useState(0);
const[dislike,setDisLike]= useState(0);
const [show,setShow]=useState(false);
console.log(props);
const styles = {
  // background: like >= dislike ? "green" : "brown" ,
 padding:"5px" ,
  marginBottom:"5px"}
  return(
    <Card style={{marginBottom : "10px",maxWidth:"250px"}}>
    <div style={styles}>  
      <p className="heading">{props.name}</p>
      <p>{props.model}</p>

      <Button onClick={()=>setShow(!show)} variant="contained">show{show? "less":"more"}</Button> <br/>

      
      {show ? <p>{props.desc}</p> : ""}

      <button onClick={()=> setLike(like +1)}>👍 {like}</button>
      <button onClick={()=> setDisLike(dislike +1)}>👎 {dislike}</button>
      
    </div>
    </Card>
  )
}