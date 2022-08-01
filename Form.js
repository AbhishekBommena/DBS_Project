import axios from "axios";
import React from "react"
class Form extends React.Component{

    state = { userName : "" }
    // handleOnChange = async (event) => {
    //     event.preventDefault();
    //     this.setState( { userName : event.target.value })
    //     const lengthOfName = this.state.userName.length
    //     // console.log( this.state.userName+" "+lengthOfName)
    //     if( lengthOfName === 2 ){
    //         const resp = await
    //         axios.get(`http://api.github.com/users/${this.state.userName}`);
    //         console.log(resp.data)
    //         if( this.state.userName === resp.data.login ){
    //             this.props.onComplete(resp.data)
    //             // this.setState({userName: ""})
    //         }
    //     }
        
        
    // }
    handleSubmit = async (event) =>{
        event.preventDefault();
        const resp = await 
        axios.get(`http://localhost:8080/Customers/${this.state.userName}`);
        this.props.onSubmit(resp.data)
        this.setState({userName: ""})
    }
    
    render(){
        const mystyle = {
            border:"1px solid grey",
            backgroundColor:"lightgrey",
            padding:"15px"
        }
        return (
            <div style={mystyle}>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="User Name"
                    // value attribute basically has the control and 
                    // to see the characters we update the state using onChange event
                    value={this.state.userName} 
                    // this.handleOnChange
                    onChange={event => this.setState({userName : event.target.value})} />
                    <button>Add User</button>
                </form>
            </div>

        )
    }
}
export default Form;