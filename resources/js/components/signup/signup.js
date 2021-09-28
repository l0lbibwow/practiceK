import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import {Grid} from "@mui/material";
function Signup() {
    return (
        <Grid
            alignItems={"center"}
            justifyItems={"center"}
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <form >
            <TextField id="filled-basic" label="Ваше имя" variant="filled" />
            <TextField id="filled-basic" label="Ваша почта" variant="filled" type={"email"}/>
            <TextField id="filled-basic" label="Ваш никнэйм" variant="filled" />
            <TextField id="filled-basic" label="Выведите пароль" variant="filled" type={"password"}/>
            <Button type={"submit"} variant="contained" endIcon={<SendIcon />}>
                Зарегистрироваться
            </Button>
            </form>
        </Grid>
    );
}
export default Signup;
