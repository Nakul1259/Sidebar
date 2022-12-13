import React from 'react'
import {FaBars} from 'react-icons/fa'
import { useGlobalContext } from './context'
function Home() {
    const { openSidebar, openModal } = useGlobalContext();
    return (
    <main>
        <button onClick={openSidebar} className='sidebar-toggle'>
            <FaBars/>
        </button>
        <button className='btn' onClick={openModal}>
            show Modal
        </button>
    </main>
  )
}

export default Home