import React, { Component } from 'react';
import SHOP_DATA from './shop.data';
import PreviewComponent from '../../components/preview-component/preview-component.component';

class ShopPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collections : SHOP_DATA,
        }
    }
    
    render() {
        const collections = this.state.collections;
        return (
            <div className='shop-page'>
                {collections.map(({id, ...otherCollectionProps}) => (
                    <PreviewComponent key={id} {...otherCollectionProps}/>
                ))}
            </div>
        );
    }
}

export default ShopPage;