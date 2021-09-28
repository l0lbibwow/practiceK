import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import SendIcon from '@mui/icons-material/Send';
import {Grid} from "@mui/material";

import {Component} from "react";
 class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {email:'',password:'',errors:{}}
    }
    handleForm = () => {
        // e.preventDefault();
         const data = {email:this.state.email,
         password: this.state.password}
        console.log("1")
        localStorage.setItem("user", JSON.stringify(data));
        // fetch("http://localhost:8000/api/auth/login",{
        //     method:"post",
        //     body: JSON.stringify(data),
        //     headers: {"Content-Type" : "application/json"}
        // })
        //     .then(res => res.json())
        //     .then(res => console.log(res))
        //     .catch(e => this.setState({errors: e.errors}))
        // this.props.history.push('/profile');
    }
    handleInput = e =>{
        e.preventDefault();
        const name = e.target.name
        const value = e.target.value
        this.setState({[name]: value})
    }
    render()
    {
        return (

                <form onSubmit={this.handleForm}>
                    <TextField onChange={this.handleInput} value={this.state.email} name="email" id="filled-basic" label="Ваша почта" variant="filled" type={"email"}/>
                    <TextField onChange={this.handleInput} value={this.state.password} name="password" id="filled-password" label="Выведите пароль" variant="filled" type={"password"}/>
                    <Button type="submit" variant="contained">
                        Войти
                    </Button>
                </form>

        );
    }
}
export default Login;

