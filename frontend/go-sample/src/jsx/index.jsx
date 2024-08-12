import React from 'react';
import { createRoot } from 'react-dom/client';
import axios from 'axios';
import '../sass/index.scss'


const App = () => {
  const [status, setStatus] = React.useState('Waiting...');

  React.useEffect(() => {
    axios.get("/api/v1/health_check")
      .then(res => res.data)
      .then(data => {
        setStatus(data.status)
      })
  }, []);

  let colorClass = ""
  switch(status){
    case 'OK':
      colorClass = "ok_msg";
      break;
    case 'Failed':
      colorClass = "err_msg";
      break;
  }
  return (
    <div>
      <h1>Hello World.</h1>
      <div>
        <span>API status: </span>
        <span class={colorClass}>{status}</span>
      </div>
    </div>
  )
};

const root = createRoot(document.getElementById('app'));
root.render(<App />);
