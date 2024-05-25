import React from 'react'

const Footer = () => {
    let date = new Date().getFullYear();
    return (<>
        <footer>
            <p><strong>copyright &#169; {date} </strong> </p>
        </footer>
    </>)
}

export default Footer;