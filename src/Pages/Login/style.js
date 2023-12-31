import styled from "styled-components";
import { pallete } from "../../theme";

export const Style = styled.div`
  height: 100vh;

  .wrapper {
    background: #222327;
    width: 500px;
    height: 520px;
    margin-top: 50px;
    border-radius: ${pallete.defaultRadiusX};

    .wrapper-inner {
      width: 420px;
      margin: 0 auto;
      h4 {
        color: gray;
        text-align: right;
      }

      .input-wrapper {
        .int_1 {
          width: 337px;
          height: 40px;
          background: #37383e;
          margin: 0 auto;
          margin-top: 42px;
          border-radius: ${pallete.defaultRadiusS};
        }
        input {
          border: none;
          outline: 0;
          background: #37383e;
          border-radius: ${pallete.defaultRadiusS};
        }
        .int_2 input {
          width: 337px;
          height: 40px;
        }
      }
      .btn {
        button {
          width: 337px;
          height: 40px;
          background: #aaaaaa;
          margin-top: 70px;
          border-radius: ${pallete.defaultRadiusS};
        }
      }
    }
  }
  .upper_login {
    .upper_inner {
      margin-top: 30px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      img {
        width: 50px;
        border-radius: ${pallete.defaultRadiusS};
      }
      a.login {
        width: 107px;
        height: 42px;
        text-align: center;
        border-radius: ${pallete.defaultRadiusS};
        background: #fff;
        color: black;
        line-height: 43px;
      }
    }
  }
  @media (max-width: 550px) {
    .wrapper {
      width:300px !important;
    }
    .fh-wrapper .wrapper .wrapper-inner  {
     width:220px;
    }
    .fh-wrapper .wrapper .wrapper-inner .int_1  {
      width:200px;
    }
    .fh-wrapper .wrapper .wrapper-inner .int_1 input {
      width:200px;
    }
    .fh-wrapper .wrapper .wrapper-inner .under_login {
      margin:0;
    }
  }

`;
