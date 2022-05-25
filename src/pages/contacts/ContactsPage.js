import React from "react";

class ContactsPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({value: ""})
        this.changeStateValue = this.changeStateValue.bind(this)
        this.submitData = this.submitData.bind (this)
    }
    changeStateValue (e) {
        this.setState({value: e.target.value});
        console.log(e.target.value)

    }

    submitData (e) {
        e.preventDefault()
        console.log (this.state)

    }
    render () {
        return (
            <div style={{marginBottom: "100px"}}>
                {console.log(this.state.value)}
                <form>
                    <input type="text" value = {this.state.value} onChange={this.changeStateValue}/>

                    <button type="submit" onClick={this.submitData}>отправить</button>
                </form>

            </div>
        )
    }
}
export default ContactsPage;