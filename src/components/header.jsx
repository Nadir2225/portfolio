import React, { useEffect, useState } from 'react'

const Header = () => {

    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const sectionHeight = window.innerHeight - 60; // 100vh dynamically
            setScrolled(window.scrollY > sectionHeight);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div>Logo</div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Header