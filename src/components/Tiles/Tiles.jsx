import React from 'react';
import './Tiles.css'

const Tiles = props => (

    <img
        alt={props.name}
        src={props.image}
        className='tiles-img'
        onClick={() => props.clickTile(props.id)} />
)

export default Tiles;