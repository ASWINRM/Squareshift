import React from 'react'

const OrderSummaryProducts = ({ item }) => {
    console.log(item)
        return (
            <div className="orderSummaryProducts">
                <h5 >{item["title"]}</h5> 
                <h5>1</h5>
                <h5>{item["price"].toFixed(2)}</h5>
                <h5>pending</h5>
            </div>
        );
    };

export default OrderSummaryProducts