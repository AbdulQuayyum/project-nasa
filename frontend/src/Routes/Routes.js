import React from 'react'
import { Routes, Route } from "react-router-dom"

import Launch from '../Views/Launch'
import History from '../Views/History'
import Upcoming from '../Views/Upcoming'

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Launch />} />
            <Route path="/History" element={<History />} />
            <Route path="/Upcoming" element={<Upcoming />} />
        </Routes>
    )
}

export default MainRoutes
