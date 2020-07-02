import React from 'react';
import './preview-component.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const PreviewComponent = ({title, items}) => (
    <div className='preview-component'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className="preview">
            {items.filter((item, index) => index < 4).map(({id, ...otherItemProps})=>
                (
                    <CollectionItem key={id} {...otherItemProps}/>
                )
            )}
        </div>
    </div>
);

export default PreviewComponent;