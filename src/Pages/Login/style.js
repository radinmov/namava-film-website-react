import styled from "styled-components";

export const Style = styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;

.wrapper {
  background: #222327;
  width: 400px;
  height: 405px;

  .wrapper-inner {
    h4 {
      color: gray;
    }

    .input-wrapper {
      .int_1 {
        width: 337px;
        height: 50px;
        background: #37383e;
        margin: 0 auto;

        input {
          border: none;
          outline: 0;
          background: inherit;
        }
      }
    }
  }
}
`;
