import React from 'react'
import Simulation from './Simulation'
import Homepage from './Homepage'
import PI from './PI'
import GroupMembers from './GroupMembers'
import Alumni from './Alumni'
import Research from './Research'
import Album from './Album'
import Publications from './Publications'
import News from './News'
import Contact from './Contact'


function Page({page, setPage}) {
    if (page === "Homepage") {
        return (
          <React.StrictMode>
              <Homepage setPage={setPage} />
          </React.StrictMode>
        )
    } else if (page === "PI"){
        return (
            <React.StrictMode>
                <PI setPage={setPage} />
            </React.StrictMode>
        )
    } else if (page === "GroupMembers"){
        return (
            <React.StrictMode>
                <GroupMembers setPage={setPage} />
            </React.StrictMode>
        )
    } else if (page === "Alumni"){
        return (
            <React.StrictMode>
                <Alumni setPage={setPage} />
            </React.StrictMode>
        )
    } else if (page === "Research"){
        return (
            <React.StrictMode>
                <Research setPage={setPage} />
            </React.StrictMode>
        )
    } else if (page === "Album"){
        return (
            <React.StrictMode>
                <Album setPage={setPage} />
            </React.StrictMode>
        )
    } else if (page === "Publications"){
        return (
            <React.StrictMode>
                <Publications setPage={setPage} />
            </React.StrictMode>
        )
    } else if (page === "News"){
        return (
            <React.StrictMode>
                <News setPage={setPage} />
            </React.StrictMode>
        )
    } else if (page === "Contact"){
        return (
            <React.StrictMode>
                <Contact setPage={setPage} />
            </React.StrictMode>
        )
    } else if (page === "Simulation") {
        return (
            <React.StrictMode>
                <Simulation setPage={setPage} />
            </React.StrictMode>
        )
    }
}

export default Page