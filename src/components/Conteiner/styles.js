import style from "styled-components";
import Background from "../../assets/bg.svg";

export const Container = style.div`
    background: url("${Background}");
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100%;
    min-height: 100vh;
`;
