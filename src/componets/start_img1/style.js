import styled from "styled-components";
import { pallete } from "../../theme";

export const Style = styled.div`
  .container_inner {
    top: 150px;
    right: 100px;
    direction: rtl;
    width: 50%;
  }
  .age {
    width: 45px;
    height: 32px;
    color: #000;
    background: rgb(255, 196, 0);
    line-height: 30px;
    border-radius: ${pallete.defaultRadiusXS};
  }
  img {
    width: 298px;
    margin: 20px;
  }
  .conditions {
    margin: 10px;
  }
  .btn {
    width: 140px;
    height: 45px;
    background: #fff;
    color: black;
    border-radius: ${pallete.defaultRadiusXS};
    line-height: 45px;
    margin-top: 25px;
    border-radius: ${pallete.defaultRadiusXS};
  }
  .btn a {
    color: black;
  }
  .btn:hover {
    background: #1993ff;
    color: #fff;
  }
  .title {
    font-size: 25px;
  }
  @media (max-width: 1480px) {
    .container_inner {
      right: -100px;
    }
    @media (max-width: 1390px) {
      .container_inner {
        right:-20px;
      }
    } 
    @media (max-width: 1390px) {
      .container_inner  {
        right:0;
      }
    }
      @media (max-width: 650px) {
        .container_inner {
          right:20px;
        }
      }
      @media (max-width: 430px) {
        .container_inner {
          right:40px;
        }
      }
    @media (max-width: 380px) {
      .container_inner {
        width: 50%;
        right: 100px;
      }
      .public {
        width: 400px;
      }
    }
  }
`;
