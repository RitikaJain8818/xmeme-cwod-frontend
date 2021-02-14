import React ,{useState,useEffect}from 'react'
import Spinner from './Spinner'
const Backend_URL='https://ritikajain120600.pythonanywhere.com/'
function Meme({Loading}) {
    const [Memes,setMemes]=useState(undefined)
    const [Limit,setLimit]=useState(100)
    const [Fetching,setFetching]=useState(false)
    const [Error,setError]=useState(false)
    const [Message,setMessage]=useState('')
    const [updating,setupdating]=useState(false)
    const [Last,IsLast]=useState(false)

    useEffect(()=>{
        var requestOptions = {
        method: 'GET',
        redirect: 'follow'
        };
        setFetching(true)
        fetch(`${Backend_URL}memes?limit=${Limit}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            result.reverse()
            setMemes(result)
            setFetching(false)
        })
        .catch(error => console.log('error', error));
    },[Loading,Limit])
  
  useEffect(()=>{
    setTimeout(()=>{
        setMessage('')
        setError(false)
    },2000)
  },[updating])

  
    return (
    <div class="container">
        <div>
            <div className="text-center">
                <p style={Error?{color:'red', fontWeight: 'bold'}:{color:'green', fontWeight: 'bold'}}> {Message}</p>
            </div>
            {
                Memes?
                <>
                    {
                        Memes.length>0?
                        <>
                        {
                            <div className="row">
                                {Memes.map((items,index)=>{
                                    return(
                                        <div className="col-lg- card" key={index} >
                                            <div className="card-body">
                                                <div >
                                                <h5 className="card-title">{items.name}</h5>
                                                </div>
                                                <p className="card-text">{items.caption}</p>
                                                <img src={items.url} className="card-img-top" alt=" Not available"/>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>}
                        }
                        </>
                        :
                        <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'200px',flexDirection:'column',color:'#000',background:'#fff',borderRadius:'20px',}}>
                        <p>No Memes uploaded</p>
                        <p>(Be the first one to upload {':)'})</p>
                        </div>
                    }
                </>
                :
                <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'200px',background:'#fff',borderRadius:'20px',flexDirection:'column',overflow:'hidden'}}>
                    <Spinner/>
                    <br/>
                    <h3 style={{overflow:'hidden'}}>Loading...</h3>
                </div>
            }
            <br/>
            {
                Memes?
                Memes.length>0&&!Last?
                <div style={{display:'flex',justifyContent:'center'}}>
                <button className="btn btn-primary" onClick={()=>setLimit(Limit+100)}>
                    {Fetching?'Loading..':'Load More'}
                </button>
                </div>
            :null
            :null
            }
            
        </div>
    </div>
        )    
}

export default Meme
