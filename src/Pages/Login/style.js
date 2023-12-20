import styled from "styled-components";
import { pallete } from "../../theme";

export const Style = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .wrapper {
    background: #222327;
    width: 500px;
    height: 520px;

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
          border-radius: ${pallete.defaultRadiusS};
          input {
            border: none;
            outline: 0;
            background: inherit;
          }
        }
        input {
          border: none;
          outline: 0;
          background: #37383e;
          border-radius: ${pallete.defaultRadiusS};
        }
      }
      .btn {
        button {
          width: 337px;
          height: 40px;
          background: #aaaaaa;
          border-radius: ${pallete.defaultRadiusS};
        }
      }
    }
  }
`;
