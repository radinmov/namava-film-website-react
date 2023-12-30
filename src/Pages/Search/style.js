import styled from "styled-components";
import { pallete } from "../../theme";

export const Style = styled.div`
  .container-2 {
    .content {
      .int {
        width: 900px;
        height: 60px;
        background: #37383e;
        margin: auto;
        // display: flex;
        // flex-direction: row-reverse;
        border-radius: ${pallete.defaultRadiusX};
        // img {
        //   width: 28px;
        // }
        input {
          width: 900px;
          height: 60px;
          outline: 0;
          text-align: right;
          border: none;
          color: #fff;
          background: inherit;
          border-radius: ${pallete.defaultRadiusX};
          padding: 10px;
        }
      }
    }
  }
  @media (max-width: 970px) {
    input {
      width:500px;
    }
    .int {
      width:500px;
    }
  }

`;
