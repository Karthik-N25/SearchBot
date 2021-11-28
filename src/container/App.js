import React, { Component } from "react";
import Cardlist from "../components/cardlist"
import SearchBox from "../components/searchBox";
import Scroll from "../components/scroll"
import ErrorBoundary from "../components/errorBoundary";

class App extends Component {

    constructor(){
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots : users}));
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }

    render() {
        const {robots, searchField} = this.state;
        const filterRobots = robots.filter(robot => {
            return(
                robot.name.toLowerCase().includes(searchField.toLowerCase())
            );
        })
        return (
            <div className="tc">
                <h1>Robot Searcher</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <Cardlist robots={filterRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}

export default App;

