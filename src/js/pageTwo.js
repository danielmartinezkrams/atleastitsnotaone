import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Subheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { Link } from 'react-router-dom';
import suya from '../img/suya.png'
import sliver from '../img/sliver.jpeg'

class pageTwo extends Component {

    render(){
        const tileData = [{img: suya, title: "Suya"}, {img: sliver, title:"Sliver"}, {}];
        return(
            <div>
                <div>
                    <GridList cellHeight={200} spacing = {4}>
                        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                            <Subheader component="div">Restaurants</Subheader>
                        </GridListTile>
                        {tileData.map(tile => (
                            <Link to={`pageTwo/${tile.title}`}>
                            <GridListTile key={tile.img}>
                                <img src={tile.img} alt={tile.title} />
                                <GridListTileBar
                                    title={tile.title}
                                    actionIcon={
                                        <IconButton >
                                            <InfoIcon />
                                        </IconButton>
                                    }
                                />
                            </GridListTile>
                            </Link>
                        ))}
                    </GridList>
                </div>
            </div>
        )
    }
}

export default pageTwo;