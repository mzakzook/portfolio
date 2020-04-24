import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class NavBar extends Component {
    
    
    
    

  

    render(){

        return (
            <div>
                <button onClick={() => this.props.history.push('/')}>Home</button>
                <button onClick={() => this.props.history.push('/about')}>About</button>
                <button onClick={() => this.props.history.push('/projects')}>Projects</button>
                <button onClick={() => this.props.history.push('/contact')}>Contact</button>



            </div>
        )
    }

}

export default withRouter(NavBar)