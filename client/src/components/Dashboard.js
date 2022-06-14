import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Dashboard extends Component {
    render() {
        return (            
            <div className="fixed-action-btn">
                <Link
                    style={{ position: 'absolute', bottom: '50px', right: '50px' }} 
                    to="/surveys/new"
                    className="btn-floating btn-large wave-effect wave-light red"
                >
                    <i className="material-icons">add</i>
                </Link>
            </div>
        
        );
    }    
};

export default Dashboard;