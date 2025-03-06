import React from 'react';
import { createRoot } from 'react-dom/client';
import axios from 'axios';
import getCookieValue from '../lib/cookie';
import '../sass/index.scss'

export const Test = () => (
  <div>aaaaa</div>
);

export const App = () => {
  const [status, setStatus] = React.useState('Waiting...');
  const auth_token = getCookieValue("auth_token");

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
      <h1>GO sample shop</h1>
      <div>
        <span>Server status: </span>
        <span className={colorClass}>{status}</span>
      </div>
      <div>
        <div>
        </div>
      </div>
    </div>
  )
};

const root = createRoot(document.getElementById('app'));
root.render(<App />);
