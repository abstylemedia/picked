import React from 'react';
import Main from './mainc';

const Client = () =>{
  if (!localStorage.getItem('my-key')){
    window.location.href = "/Client";
}
    
    return(
        <div >
      <Main/>
      
    </div>
    )
};
export default Client;