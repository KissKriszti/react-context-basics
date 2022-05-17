import { ThemeContext } from "./themeContext";
import { useContext } from "react";
import styled from 'styled-components';

export default function Page() {

    const {theme, toggleTheme} = useContext(ThemeContext);
    const Button = styled.button`
    font-size: 20px;
    padding: 10px 20px;
    cursor: pointer;
    color: ${props => props.primary ? "black" : "grey"};
    background-color: ${props => props.primary ? "grey" : "black"}
    `

    return (
        <div className={theme}>
            {theme === 'light' ?
                <Button onClick={toggleTheme}>Change theme</Button> :
                <Button onClick={toggleTheme} primary>Change theme</Button>
            }
        </div>
    );
};