import { ViewClient } from './components/Page/ViewClient';
import { ViewUser } from './components/Page/ViewUser';
import React, { useState } from 'react';





function App() {
  const [conect, setConect] = useState(false);
  const access = (state) =>{
    setConect(state)
  }
  return (
    conect ?   <ViewUser/> :  <ViewClient access = {access} />
  );
}

export default App;
