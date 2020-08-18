import React from 'react'

const Bookcard = (props) => {
    return(
        <div className='book-card'>
            <img src={props.image} alt=''/>
            <ul>
                <li>{props.title}</li>
                <li>{props.authur}</li>
                <li>{props.price}</li>
                <li>{props.description}</li>
            </ul>
        </div>
    )
}

export default Bookcard;