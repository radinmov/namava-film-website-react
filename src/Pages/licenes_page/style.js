import styled from "styled-components";
import { pallete } from "../../theme";

export const Style = styled.div`
  background: #f2f2f2;
  height: 100vh;
  .licens_1 {
    width: 680px;
    height: 108px;
    background: #cecece;
    color: #000;
    filter: contrast(120%);
    margin-top: 50px;
  }
  .licens_1_inner {
    width: 669px;
    height: 108px;
    background: #fff;
    border-radius: ${pallete.defaultRadiusXS};
  }
  .right {
    right: 8px;
    top: 16%;
  }
  .left {
    top: 30%;
    left: 5%;
  }
  .bck {
    width: 180px;
    color: #fff;
    height: 35px;
    background: #1993ff;
    margin-top: 10px;
    line-height: 35px;
    border-radius: ${pallete.defaultRadiusXS};
  }
  .price {
    color: rgb(25, 147, 255);
    font-size: 21px;
  }
`;
