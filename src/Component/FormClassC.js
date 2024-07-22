import { Component } from "react";

export default class FormClassC extends Component
{
    state={
        name:"",
        username:"",
        email:"",
        password:""
    }
    handleChange=(event)=>
    {
       console.log(event.target.name)   
       this.setState({[event.target.name]:event.target.value})      
    }
    submitData =(event)=>
    {
        console.log("Form is submited");
        console.log(this.state)
        var emp =  JSON.stringify(this.state);
        console.log(emp)
        event.preventDefault();
        this.setState({
            name:"",
            username:"",
            email:"",
            password:""
        });
    }
    render()
    {
        return(
            <>
                <form  onSubmit={this.submitData}> 
                    <div>
                        <h2>Login Form Using Class Component</h2>
                        <label> Enter Name </label>
                        <input type="text" name="name" value={this.state.name}
                        onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label> Enter Username </label>
                        <input type="text" name="username" value={this.state.username}
                        onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label> Enter Email </label>
                        <input type="email" name="email" value={this.state.email}
                        onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label> Enter Password </label>
                        <input type="password" name="password" value={this.state.password}
                        onChange={this.handleChange}/>
                    </div>
                    <div>
                        <button type="submit"> Register </button>
                    </div>
                </form>
            </>
        )
    }
}