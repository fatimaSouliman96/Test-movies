import { NavLink } from "react-router-dom"
import "./navBar.css"
import { BiBell, BiMenu, BiUser } from "react-icons/bi"
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from "react"

export default function NavBar() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [anchorElM, setAnchorElM] = React.useState<null | HTMLElement>(null);
    const openM = Boolean(anchorElM);
    const handleClickM = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElM(event.currentTarget);
    };
    const handleCloseM = () => {
        setAnchorElM(null);
    };
    return (
        <nav>
            <img src="/public/Clapperboard.jfif" />
            <ul className="web-menu">
                <li><NavLink to={"/"} >Home<span></span></NavLink></li>
                <li><NavLink to={"/movies"} >Movies<span></span></NavLink></li>
                <li><NavLink to={"rr"}>Settings<span></span></NavLink></li>
            </ul>
            <ul className={`mobial-mune`} >

                    <Menu
                        id="basic-menu"
                        anchorEl={anchorElM}
                        open={openM}
                        onClose={handleCloseM}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleCloseM}><li><NavLink to={"/"} >Home <span></span></NavLink></li></MenuItem>
                        <MenuItem onClick={handleCloseM}><li><NavLink to={"/movies"} >Movies <span></span></NavLink></li></MenuItem>
                        <MenuItem onClick={handleCloseM}> <li><NavLink to={"rr"}>Settings <span></span></NavLink></li></MenuItem>
                    </Menu>
             
            </ul>

            <div className="user-icon" >
                <BiBell size={30} />
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <BiUser size={30} />
                </Button>

                <Button
                    id="basic-button"
                    aria-controls={openM ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openM ? 'true' : undefined}
                    onClick={handleClickM}
                >
                    <BiMenu size={30} className="icon-mobil"/>
                </Button>
                
                <div>

                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>Language</MenuItem>
                    </Menu>
                </div>
            </div>

        </nav>
    )
}
