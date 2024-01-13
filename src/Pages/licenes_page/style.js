import styled from "styled-components";
import { pallete } from "../../theme";

export const Style = styled.div`
  background: #f2f2f2;
  height: 100%;
  color: #000;
  .licens_1 {
    height: 108px;
    background: #cecece;
    color: #000;
    filter: contrast(120%);
    margin-top: 50px;
  }
  .w-680 {
    width: 680px;
  }
  
  .licens_1_inner {
    width: 670px;
    height: 108px;
    background: #fff;
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
  }
  .price {
    color: rgb(25, 147, 255);
    font-size: 21px;
  }
  .for_sale {
    margin-top: 50px;
  }
  .int_puts {
    height: 46px;
    margin-top: 20px;
  }
  .int_puts input {
    height: 46px;
    border: none;
    outline: 0;
    text-align: right;
  }
  .int_puts button {
    width: 80px;
    height: 46px;
    background: #aaaaaa;
    color: #fff;
  }
  .buy_licens {
    height: 100px;
    background: #ffffff;
  }
  .txt {
    top: 20px;
    right: 10px;
  }
  .txt ul {
    margin-top: 9px;
  }
  .wran {
    height: 75px;
    background: #d95c5c;
    margin-top: 50px;
  }
  .tet {
    top: 13px;
    right: 35px;
  }
  .s-18 {
    font-size: 18px;
  }
  .support {
    height: 70px;
    background: #1993ff;
    margin-top: 50px;
    color: #fff;
    font-size: 17px;
    margin-bottom: 50px;
  }
  .supp_inner {
    width: 600px;
    right: 35px;
    top: 13px;
  }
  @media (max-width: 720px) {
    .w-680 {
      width: 500px;
    }
    .wran {
      height:100px;
    }
    .tet {
      right:5px;
    }
    .txt {
      top:10px;
    }
    .licens_1_inner {
      width:490px;
    }
    .supp_inner {
      width:420px;
    }
  }
  @media (max-width:510px) {
    .w-680 {
      width:290px;
    }
    .licens_1_inner {
      width:280px;
    }
    .supp_inner {
      width:210px;
      font-size:15px;
      top:2px;
    }
    .s-18 {
      font-size:15px;
    }
    .wran {
      height:110px;
    }
    .buy_licens {
      height:140px;
    }
  }
`;
