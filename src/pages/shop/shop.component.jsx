import React, { Component } from 'react';
import SHOP_DATA from './2.2 shop.data.js';
import CollectionPreview from '../../components/preview-collection/collection_preview';

class ShopPage extends Component {
  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA 
    }
  }

  render() {
    return (
      <div>
        {
          this.state.collections.map(({ id, ...otherCollectionProps  })=> (
            <CollectionPreview key={id} { ...otherCollectionProps }/>
          ))
        }
      </div>
    )
  }
}

export default ShopPage;
