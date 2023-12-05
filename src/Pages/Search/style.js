import styled from "styled-components";
import { pallete } from "../../theme";

export const Style = styled.div`
  .container {
    .content {
      .int {
        width: 900px;
        height: 60px;
        background: #37383e;
        display: flex;
        flex-direction: row-reverse;
        border-radius: ${pallete.defaultRadiusX};
        img {
          width: 28px;
        }
        input {
          width: 900px;
          height: 60px;
          outline: 0;
          text-align: right;
          border: none;
          color: #fff;
          background: inherit;
          border-radius: ${pallete.defaultRadiusX};
        }
      }
    }
  }
`;
