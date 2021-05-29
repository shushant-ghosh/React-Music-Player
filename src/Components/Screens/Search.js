import React, { Component } from 'react'

class Search extends Component {
    constructor(props) {
        super(props)
    
        this.album = React.createRef();
        this.submitHandler = this.submitHandler.bind(this);  // required to bind function call without a callback
        // if we are handling states, props or ref inside a function body
    }
    
    submitHandler(event) {
        event.preventDefault();
        let data = this.album.current.value;
        console.log("submit = ", data);
        this.props.search(data)
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card mt-2 mb-2 bg-dark">
                        <div className="card-body">
                            <form onSubmit={this.submitHandler}>
                                <div className="form-group">
                                    <div className="input-group">
                                        <input type="text" name="album" id="album" ref={this.album} className="form-control" placeholder="Enter Album/Artist name" />
                                        <div className="input-group-append">
                                            <button type="submit" className="btn btn-outline-info ml-2 mr-2">
                                                <span className="fas fa-search"></span>
                                            </button>
                                            <button type="reset" className="btn btn-outline-danger">
                                                <span className="fas fa-times"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>    
                    </div>    
                </div>                
            </div>
        )
    }
}

export default Search
