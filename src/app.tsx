import { useState } from "react";
import styled from "styled-components";

import reactLogo from "./assets/react.svg";
import { Button, TextInput, Typo } from "./components";
import { PALETTE } from "./constants";

const Wrapper = styled.div`
    background: ${PALETTE.WHITE};
    height: 100vh;
    width: 100wv;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
`;

export const App = () => {
    const [inputValue, changeInputValue] = useState("");

    return (
        <Wrapper>
            <Typo variant="h1">{"Hello there!"}</Typo>

            <a href="https://reactjs.org" target="_blank" rel="noreferrer">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>

            <TextInput
                value={inputValue}
                onChange={changeInputValue}
                label="input"
                error="ERRORORORO"
                required
            />

            <Button>{"click"}</Button>
        </Wrapper>
    );
};
