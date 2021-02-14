import React ,{useState,useEffect}from 'react'
import './App.css'
import Meme from './Components/Meme'
import Header from './Components/Header'
import SwaggerButton from './Components/SwaggerButton'
const Backend_URL='https://ritikajain120600.pythonanywhere.com/'
// const Backend_URL='http://localhost:8000/'
function App() {
  // Form field variables
  const [Name,setName]=useState('')
  const [Caption,setCaption]=useState('')
  const [Image,setImage]=useState('')
  const [Loading,setLoading]=useState(false)
  const [Error,IsError]=useState(false)
  const [Message,setMessage]=useState('')
  // Function to upload memes
  const UploadMeme=(e)=>{
    e.preventDefault();
    setLoading(true)
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var data = JSON.stringify({"name":Name,"caption":Caption,"url":Image});

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: data,
        redirect: 'follow'
      };

      fetch(`${Backend_URL}memes`, requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log(result)
            setMessage('Uploaded Meme Successfully !!')
            setName('')
            setCaption('')
            setImage('')
          
          setLoading(false)
        })
        .catch(error => console.log('error', error));
  }
  useEffect(()=>{
    setTimeout(()=>{
      setMessage('')
    },2000)
  },[Error,Loading])
    return (
    <div className="container-fluid">
      <Header/>
      <br/>
        <div>
          <h3 style={{overflow:'hidden',color:'#fff'}}>&nbsp;&nbsp;&nbsp;Upload Meme</h3>
        <form  className="meme_form" onSubmit={UploadMeme}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label labelHeading" name="name">Meme Owner</label>
            <input for = "name" type="text" placeholder="Enter your full name"className="form-control" id="name" required value={Name} onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="caption" className="form-label labelHeading" name="caption">Caption</label>
            <input for="caption" type="text" placeholder="Be creative with the caption"className="form-control" id="caption"  required value={Caption} onChange={(e)=>setCaption(e.target.value)}/>
          </div>
          <label htmlFor="meme_url" className="form-label labelHeading" name="url">Meme URL</label>
          <div className="input-group mb-3">
            <input for ="url" type="text" placeholder="Enter URL of your meme here" className="form-control " id="meme_url"  required value={Image} onChange={(e)=>setImage(e.target.value)}/>
            <div className="input-group-append">
            <button type="submit" className="btn btn-success">{Loading?'Loading...':'Submit Meme'}</button>
            </div>
          </div>
          <span style={Error?{color:'red'}:{color:'green'}}>{Message}</span>
        </form>
        </div>
      <hr/>
        <div>
          <Meme Loading={Loading}/>
        </div>
      <SwaggerButton/>
    </div>
  );
}

export default App;
