import styled from "styled-components";
import { pallete } from "../../theme";

export const Style = styled.div`
  background: #f2f2f2;
  height: 100%;
  color: #000;
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
  .for_sale {
    margin-top:50px;
  }
  .int_puts {
    width: 680px;
    height: 46px;
    margin-top:20px;
  }
  .int_puts input {
    width: 680px;
    height: 46px;
    border:none;
    outline:0;
    text-align:right;
    border-radius: ${pallete.defaultRadiusXS};4
  }
  .int_puts button {
    width: 80px;
    height: 46px;
    background: #aaaaaa;
    color: #fff;
    border-radius: ${pallete.defaultRadiusXS};
  }
`;
