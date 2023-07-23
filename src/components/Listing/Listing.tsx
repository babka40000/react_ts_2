import React from 'react'
import './css/main.css'

interface MainImageType {
    url_570xN: string,
}

interface ItemType {
    listing_id: number,
    url: string,
    title: string,
    currency_code: string,
    price: string,
    quantity: number,
    MainImage: MainImageType,
}

interface AppProps {
    items: ItemType[];
}

const Listing = ({ items = [] }: AppProps) => {
    return (
        <div className="item-list">
            {items.map((item) => (
                <div className="item" key={item.listing_id}>
                    <div className="item-image">
                        <a href={item.url}>
                            <img src={item.MainImage.url_570xN} alt='' />
                        </a>
                    </div>
                    <div className="item-details">
                        {item.title.length > 50 ?
                            <p className="item-title">{item.title.slice(1, 50)}...</p> :
                            <p className="item-title">{item.title}</p>}
                        {item.currency_code === "USD" ?
                            <p className="item-price">${item.price}</p> :
                            item.currency_code === "EUR" ?
                                <p className="item-price">€{item.price}</p> :
                                <p className="item-price">{item.price} {item.currency_code}</p>}
                        {item.quantity <= 10 ?
                            <p className="item-quantity level-low">{item.quantity} left</p> :
                            item.quantity > 20 ?
                                <p className="item-quantity level-high">{item.quantity} left</p> :
                                <p className="item-quantity level-medium">{item.quantity} left</p>}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Listing