import React from 'react';
import Progress from "../components/progress"
import "./player.less"

let duration = null;
let Player = React.createClass({
    getInitialState() {
        return {
            progress: "-"
        }
    },
    componentDidMount() {
        $("#player").bind($.jPlayer.event.timeupdate, (e) => {
            duration = e.jPlayer.status.duration;
            this.setState({
                progress: e.jPlayer.status.currentPercentAbsolute
            });
        });
    },
    componentWillUnmount() {
        $("jPlayer").unbind($.jPlayer.event.timeupdate);
    },
    progressChangeHandler(progress) {
        $("#player").jPlayer("play", duration * progress);
    },
    render() {
        return (
            <div className="player-page">
                <Progress
                    progress={this.state.progress}
                    onProgressChange={this.progressChangeHandler}
                >
                </Progress>
            </div>
        );
    }
})

export default Player;