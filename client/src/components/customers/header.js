import React, { Component } from 'react';

class Header extends Component{
    render(){
        return(
            <nav>
                 <div className = "container">
                     <div className = "navbar-header">
                         <ul className = "nav navbar-nav">
                             <li><a href="/chart1">KWH Chart</a></li>
                             <li><a href="/chart2">BILL Chart</a></li>
                             <li><a href="/chart3">SAVINGS Chart</a></li>
                         </ul>
                     </div>
                 </div>
            </nav>
        )
    }
}

export default Header;