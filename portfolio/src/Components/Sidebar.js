import {React, useEffect, useState} from 'react'



function Sidebar() {


    const [refresh, setRefresh] = useState(0);

    useEffect(() =>{
        console.log("Refreshes: " + refresh)
    }, [refresh])



    return (
        <div >
            <div>{refresh}</div>
            <button  
                class="shadow-lg rounded-sm m-10 px-3 border-2 border-black hover:bg-gray-200" 
                onClick = {() =>setRefresh(refresh + 1)}>
                    Click Me 
            </button>
            <button
                class="shadow-lg rounded-sm m-10 px-3 border-2 border-black hover:bg-gray-200"
                onClick = {() => setRefresh(0)}>
                    Refresh
            </button>
        </div>
    )
}

export default Sidebar





