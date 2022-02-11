import React from 'react'
import AttributeFilter from './AttributeFilter'
import CategoryFilter from './CategoryFilter'
import PriceFilter from './PriceFilter'

const ShopSidebar = () => {
    return (
        <div>
            <AttributeFilter/>
            <CategoryFilter/>
            <PriceFilter/>
        </div>
    )
}

export default ShopSidebar;