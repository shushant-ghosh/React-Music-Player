import React, { Component } from "react";
import Artists from "./Screens/Artists";
import Search from "./Screens/Search";

const URL = "https://spotify-api-wrapper.appspot.com";
export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artist: "",
    };
    this.searchHandler = this.searchHandler.bind(this);
  }
  componentDidMount() {
    // js ajax request
    // this.searchHandler("");
  }

  searchHandler(name) {
    fetch(`${URL}/artist/${name}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.artists.items.length > 0) {
          const artist = data.artists.items[0];
          this.setState({
            artist,
          });
        }
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-12">
            <div className="jumbotron text-center">
              <h3 className="display-3">Home</h3>
            </div>
            <Search search={this.searchHandler}/>
            <Artists artist={this.state.artist} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
