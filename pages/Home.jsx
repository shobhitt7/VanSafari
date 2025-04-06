import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="home-container">
            <h1>You’ve got the trip idea, we’ve got the perfect van to ride ya!</h1>
            <p>Add some adventure to your life—go desi with the #vansafari vibe!
            Pick the perfect van and hit the road for memories you’ll never forget</p>
            <Link to="vans">Find your van</Link>
        </div>
    )
};