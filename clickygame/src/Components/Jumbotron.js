import React from "react";

class Jumbotron extends React.Component {
    render() {
        return (
            <div>

                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Clicky Game!</h1>
                        <p className="lead">
                        Welcome to "ClickyGame" try not to click on the same image twice if you get to 12 you win.
                        </p>
                    </div>
                </div>
            </div>
        )

    }
}

export default Jumbotron