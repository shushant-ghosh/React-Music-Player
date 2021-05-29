import React, { Component } from "react";

const URL = "https://spotify-api-wrapper.appspot.com";

class Tracks extends Component {
  state = {
    id: this.props.match.params.id,
    tracks: [],
    playing: false,
    audio: null,
    playingPreviewUrl: null,
  };

  componentDidMount() {
    fetch(`${URL}/artist/${this.state.id}/top-tracks`)
      .then((response) => response.json())
      .then((res) => {
        console.log("Output = ", res);
        this.setState({
          tracks: res.tracks,
        });
      })
      .catch((err) => console.log(err.message));
  }

  // play and pause
  playAudio(url) {
    let audio = new Audio(url);
    // if audio is not playing
    if (!this.state.playing) {
      audio.play();
      this.setState({
        playing: true,
        audio,
        playingPreviewUrl: url,
      });
    } else {
      // pause the player
      this.state.audio.pause();

      // pause the state
      if (this.state.playingPreviewUrl === url) {
        this.setState({
          playing: false,
        });
      } else {
        audio.play();
        this.setState({
          audio,
          playingPreviewUrl: url,
        });
      }
    }
  }

  // track icon
  trackIcon(url) {
    if (!url) {
      return <span className="text-danger fas fa-bell-slash fa-2x"></span>;
    }
    if (this.state.playing && this.state.playingPreviewUrl === url) {
      return <span className="fas fa-pause-circle fa-2x text-warning"></span>;
    }
    return <span className="fas fa-play-circle fa-2x text-success"></span>;
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-12">
            <div className="jumbotron text-center">
              <h3 className="display-3">Tracks</h3>
              <p className="text-muted">{this.state.id}</p>
            </div>
          </div>
        </div>
        <div className="row">
          {this.state.tracks.map((item, key) => {
            return (
              <div className="col-md-3 mt-2  mb-2" key={key}>
                <div
                  className="card"
                  onClick={() => this.playAudio(item.preview_url)}
                >
                  <img
                    src={item.album.images[0].url}
                    alt={`Image ${key}`}
                    className="img-fluid card-img-top"
                  />
                  <div className="card-body">
                    <h6 className="text-center text-info">{item.name}</h6>
                  </div>
                  <div className="card-footer">
                    {this.trackIcon(item.preview_url)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default Tracks;
