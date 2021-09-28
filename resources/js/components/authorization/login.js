import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import {Grid} from "@mui/material";

import {Component} from "react";
 class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {email:'',password:'',errors:{}}
    }
    handleForm = e => {
        e.preventDefault();
        const data = {email:this.state.email,
        password: this.state.password}
        fetch("http://localhost:8000/api/auth/login",{
            method:"post",
            body: JSON.stringify(data),
            headers: {"Content-Type" : "application/json"}
        })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(e => this.setState({errors: e.errors}))
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
            <Grid
                alignItems={"center"}
                justifyItems={"center"}
                component="form"
                sx={{
                    '& > :not(style)': {m: 1, width: '25ch'},
                }}
                noValidate
                autoComplete="off"
            >
                <form onSubmit={this.handleForm}>
                    <TextField onChange={this.handleInput} name="email" id="filled-basic" label="Ваша почта" variant="filled" type={"email"}/>
                    <TextField onChange={this.handleInput} name="password" id="filled-password" label="Выведите пароль" variant="filled" type={"password"}/>
                    <Button type="submit" variant="contained" endIcon={<SendIcon/>}>
                        Войти
                    </Button>
                </form>
            </Grid>
        );
    }
}
export default Login;

