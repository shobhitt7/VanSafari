import React from "react"
import bgImg from "../assets/images/about-hero.png"
import { Link } from "react-router-dom"

export default function About() {
    return (
        <div className="about-page-container">
            <img src={bgImg} className="about-hero-image" />
            <div className="about-page-content">
                <h1>Skip the jugad and travel the smart way—book a comfy van and ride together with your yaara, full style, zero stress!</h1>
                <p>Our mission is to add full-on masti to your road trip with the perfect travel van rental.
                Each van is fully checked and prepped before your journey—so your trip goes smooth, no jhanjhat! (P.S. Hitch ka extra charge hai 😉)</p>
                <p>Our team’s made of true van-trippers—folks who’ve felt the magic of dhoom-ing across highways, hills, and hidden gems. We get the thrill of “chalo kahin nikalte hain”… and we’re here to make it awesome for you too.</p>
            </div>
            <div className="about-page-cta">
                <h2>Your destination is calling.<br />And your van's all set to roll.</h2>
                <Link className="link-button" to="/vans">Explore our vans</Link>
            </div>
        </div>
    );
}