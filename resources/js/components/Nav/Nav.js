import {Link} from "react-router-dom";
import Box from "@mui/material/Box";
import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';

function Nav() {
    return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Главная
                </Typography>
                <Button color = "inherit"><Link className="nav-link" to="/auth" >Авторизация</Link></Button>
                <Button color = "inherit"><Link className="nav-link" to="/login" >Регистрация</Link></Button>
            </Toolbar>
        </AppBar>
    </Box>
    );
}

export default Nav;

