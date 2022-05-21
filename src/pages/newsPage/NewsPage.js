import React from "react";
import {News} from "../../components/header/News";

class NewsPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({statusMenu: false})
        this.handleMenu = this.handleMenu.bind(this)
    }

    handleMenu () {
        this.setState({statusMenu: !this.state.statusMenu})
    }

    render() {
        return (
            <div>
                <h2>Title = {this.props.title}</h2>
                {this.state.statusMenu === true ? <News/> : ""}
                <button onClick={this.handleMenu}>menu</button>
            </div>
        );
    }
}
export default NewsPage;