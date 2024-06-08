import React, { useState } from 'react'
import './Card.css'
import Button from '../Button/Button';

function Card({ food, addItem, removeItem }) {
    const [count, setCount] = useState(0)
    const { title, image, price, id } = food;

    const handleIncrement = () => {
        setCount(count + 1)
        addItem(food)
    }
    const handleDecrement = () => {
        setCount(count - 1)
        removeItem(food)
    }
    return (
        <div className='card'>
            <span className={`${count !== 0 ? 'card__badge' : 'card__badge--hidden'}`}>{count}</span>
            <div className="image__container">
                <img src={image} alt={title} />
            </div>
            <h4 className='card__title'>
                {title} - <span className='card__price'>${price}</span>
            </h4>
            <div className="btn__container">
                <Button label={'+'} buttonType={'add'} onClick={handleIncrement} />
                {count !== 0 ? (
                    <Button label={'-'} buttonType={'remove'} onClick={handleDecrement} />
                ) : null}
            </div>
        </div>
    )
}

export default Card