import React from "react";

class Navbar extends React.Component {
    render() {
        return (
            <div>

                <nav className="navbar navbar-light bg-light">
                    <div className="navbar-brand"> Score : {this.props.score}</div>
                    
                </nav>


                
            </div>
        )

    }
}

export default Navbar