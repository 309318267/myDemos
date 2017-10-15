import React from "react"
import "./header.less"

let Header = React.createClass({
    render() {
        return (
            <div className="components-header row">
                <img src="../../static/images/logo.png" width="40" alt="" className="fl"/>
                <h1 className="caption fl">Music Player</h1>
            </div>
        );
    }
});

export default Header;