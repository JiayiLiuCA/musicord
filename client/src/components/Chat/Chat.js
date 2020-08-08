import React, { useState } from 'react'

import './Chat.css'
import Sidebar from './ChatComponents/Sidebar/Sidebar'
import Header from './ChatComponents/Header/Header'
import Footer from './ChatComponents/Footer/Footer'


const Chat = () => {
    const [users, setUsers] = useState([]);
    return (
        <div className="chat-outer-container">
            <div className="chat-container">
                <Header />
                <div className="mid">
                    <Sidebar />
                </div>
                <Footer />
            </div>
            
        </div>
    )
}

export default Chat
