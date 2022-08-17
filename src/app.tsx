import styled from "styled-components";

import reactLogo from "./assets/react.svg";
import { Typo } from "./components";
import { COLOR } from "./constants";

const Wrapper = styled.div`
    background: ${COLOR.WHITE};
    height: 100vh;
    width: 100wv;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const App = () => {
    return (
        <Wrapper>
            <Typo variant="h1">{"Hello there!"}</Typo>

            <a href="https://reactjs.org" target="_blank" rel="noreferrer">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
        </Wrapper>
    );
};
