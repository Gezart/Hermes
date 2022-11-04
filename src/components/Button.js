import { Link } from 'gatsby'
import React from 'react'

const Button = ({ button }) => {
    return (
        <div className="button">
            <Link to={button?.url}>
                <button>
                    <span>{button?.title}</span>
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 0.75L6 6L0.75 11.25" stroke="white" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
            </Link>
        </div>
    )
}

export default Button