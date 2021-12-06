import React from 'react'

function SidebarItem({route, name, pos, setPage}) {

    



    return (
        <ul onClick={() => setPage(route)} class={"mr-2 p-3 bg-mg-light-blue w-full " + (pos ==="last" ? "" : " border-b border-mg-dark-blue")}>
            {name}
        </ul>
    )
}

export default SidebarItem
