import React, {useEffect ,useState} from 'react'

const Fatech_Data = () => {
  const [data, setData] = useState(null);
    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => setData(data))
  },[])
    return (
    <div>{
data?<div>
  <h2>{data.title}</h2>
  <p>{data.body}</p>
</div>:<p>Loading...</p>    
    }</div>
  )
}

export default Fatech_Data