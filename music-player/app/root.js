import React from "react"
import Header from "./components/header"
import Player from "./page/player"


let Root = React.createClass({
    getInitialState() {
        return {
            
        }
    },
    componentDidMount() {
        $("#player").jPlayer({
            ready: function () {
                $(this).jPlayer("setMedia", {
                    mp3: "http://fs.w.kugou.com/201710142107/de713b0bc3d4bbfae88e9685f146d367/G103/M00/10/15/pw0DAFkew2OAFqxYADIFEQbaR6k512.mp3"
                }).jPlayer("play");
            },
            supplied: "mp3",
            wmode: "window"
        });
    },

    componentWillUnmount() {
        
    },
    render() {
        return (
            <div>
                <Header />
                <Player></Player>
            </div>
        );
    }
});

export default Root;