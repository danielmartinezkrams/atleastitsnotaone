import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Subheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { Link } from 'react-router-dom';
import suya from '../img/suya.jpeg'
import sliver from '../img/sliver.jpeg'
import bongo from '../img/bongo.jpeg'
import saigon from '../img/saigon.jpeg'
import frescos from '../img/fresco.jpeg'
import arinells from '../img/arinells.jpeg'
import ks from '../img/ks.jpeg'
import pk from '../img/purplekow.jpeg'
import ikes from '../img/ikes.jpeg'
import x from '../img/xtreme.jpg'
import cancun from '../img/cancun.jpeg'
import sz from '../img/Sandzone.jpg'
import toss from '../img/toss.jpg'
import lilplearn from '../img/lilplearn.jpg'
import g61 from '../img/guac61.jpeg'
import bp from '../img/bp.jpeg'

class pageTwo extends Component {
    render(){
        const tileData = [
            {img: suya, title: "Suya"},
            {img: sliver, title:"Sliver"},
            {img: bongo, title:"Bongo Burger"},
            {img: saigon , title:"Saigon Express" },
            {img: frescos, title:"Fresco"},
            {img: arinells, title:"Arinell's"},
            {img: ks, title: "K's Cafe"},
            {img: pk, title: "Purple Kow"},
            {img: ikes, title: "Ike's Sandwiches" },
            {img: x, title: "eXtreme Pizza"},
            {img: cancun, title: "Cancun"},
            {img: sz, title: "Sandwich Zone"},
            {img: toss, title:"Toss Noodle Bar"},
            {img: lilplearn, title: "Little Plearn"},
            {img: g61, title: "Guacamole 61"},
            {img: bp, title: "El Burro Picante"}
        ];
        return(
            <div>
                <div>
                    <GridList cellHeight={200} spacing = {4}>
                        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                            <Subheader component="div">Restaurants</Subheader>
                        </GridListTile>
                        {tileData.map(tile => (
                            <GridListTile key={tile.img}>
                                <Link to={`placeorder/${tile.title}`}>
                                <img src={tile.img} alt={tile.title} />
                                <GridListTileBar
                                    title={tile.title}
                                    actionIcon={
                                        <IconButton >
                                            <InfoIcon />
                                        </IconButton>
                                    }
                                />
                                </Link>
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            </div>
        )
    }
}

export default pageTwo;