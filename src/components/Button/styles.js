import style from "styled-components";

export const Button = style.button`
width: 342px;
height: 68px;
margin-top: 50px;

background: ${props => props.isBack ? 'rgba(255, 255, 255, 0.14)' : '#D93856' };
border: none;

font-style: normal;
font-weight: 900;
font-size: 17px;
line-height: 2px;

display: flex;
align-items: center;
justify-content: center;
gap: 20px;

color: #FFFFFF;

cursor: pointer;

&:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;