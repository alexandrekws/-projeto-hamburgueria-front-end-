import styled from "styled-components";

export const Image = styled.img`
`;

export const Order = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 17px;

  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  width: 342px;
  min-height: 101px;

  border: none;
  outline: none;

  #order {
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;

    color: #FFFFFF;  
    
    min-width: 225px;
    max-width: 240px;
  }

  #clientName {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;

    color: #FFFFFF;

    margin: 10px 0px;
  }

  #price {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;

    color: #FFFFFF;

    text-align: right;
  }

  .divOrder {
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 17px 0px 13px;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;