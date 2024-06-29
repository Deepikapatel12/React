import Cybrom from "./Cybrom";
import Header from "./Header";
import Data from "./Data";
import Footer from "./Footer";
import Cybrom2 from "./Cybrom2";
import Head from "./Component/Head";
import Foot from "./Component/Foot";
import Mid from "./Component/Mid";
// const App=()=>{
//   return(
//     <>
//     <h1>Welcome to cybrom bhoapl</h1>
//     <Cybrom />
//     <Header />
//     <Footer />
//     <Data />
//     </> 
//   )
// }
// export default App; 

const age=24;
let name="Deepika";
const sub=<ol>
  <li>PHP</li>
  <li>JAVA</li>
  <li>Oracal</li>
  <li>ASP</li>
</ol>
const App=()=>{
  return(
    <>
      <h1>Hello i am {age} year old!!!! my name {name}</h1>
      <h1>hello i am {age*3+4} year old!!! my name {name}</h1>
      <h1> My Subject : {sub}</h1>
      <br/>
      <h1>Application form</h1>
      name: <input type="text" />
      <br /> <br />
      city : <input type="text" />
      <br />
      <input type="button" value="save" />
      <br /><br /><br />
      <h1 className="data">Welcome to cybrom bhopal</h1>
      <Cybrom2 />
      <Head />
      <Foot />
      <Mid />
    </>
  )
}
export default App;                                                    