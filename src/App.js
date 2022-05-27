import {useEffect,useState} from 'react';
import './App.css';

function App() {
  const [getdata,setGetData] = useState([]);
  const fetchdata = () =>{
    fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json').then((response)=>{
        return response.json();
    }).then((data)=>{

      setGetData(data);
    })
  }
fetchdata();
  
  return (
    <div className="App">
      {
        Object.values(getdata).map((item,index)=>
            <tr key={index}>
              <td >{item}</td>
            </tr>
        )
      }
    </div>
  );
}

export default App;
