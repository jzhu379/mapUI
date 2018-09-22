import React, {Component} from 'react';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import './Map.css';

class Map extends Component
{
    state = {loading: true, img: null, error: false}

    getAddress = (str) => {return str.split(' ').join('');}

    getContent = () =>
    {
        if (this.state.error) {return <Typography> An error occured. </Typography>;}
        else {return <img className = 'image' src = {this.state.img} alt = 'map'/>;}
    }

    render()
    {
        if(this.state.loading === true)
        {
            axios.get('https://www.mapquestapi.com/staticmap/v5/map?key=i8Z3OoC2IamRzZRtxlbkoWuvYpA5MjwI&zoom=10&center=' + this.getAddress('285 Fulton St, New York, NY 10007') + '&size=800,800').then((res) =>
            {this.setState({img: res.config.url});}).catch((error) => {console.log(error); this.setState({error: true});});

            this.setState({loading: false});
        }

        return (<div className = 'container'> {this.state.loading ? <CircularProgress/> : this.getContent()} </div>);
    }
}

export default Map;