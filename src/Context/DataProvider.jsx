import React, { useState } from 'react'
import { createContext } from 'react'
export const Datacontext=createContext(null);

const DataProvider=({children})=> {
    const [notes,setnotes]=useState([]);
    const [archivenotes,setarchivenotes]=useState([]);
    const [deletenotes,setdeletenotes]=useState([]);
    return (
    <Datacontext.Provider value={{
        notes,setnotes,
        archivenotes,setarchivenotes,
        deletenotes,setdeletenotes}}>
{children}
    </Datacontext.Provider>
  )
}

export default DataProvider;
