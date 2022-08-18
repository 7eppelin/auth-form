import { useState } from "react";
import styled from "styled-components";

import reactLogo from "./assets/react.svg";
import { Button, Checkbox, TextInput, Typo } from "./components";
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
    const [checked, setIsChecked] = useState(false);

    return (
        <Wrapper>
            <Typo variant="h1">{"Hello there!"}</Typo>

            <Checkbox
                id="test"
                label="check me"
                checked={checked}
                onChange={() => setIsChecked(!checked)}
            />

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
