/* style.js */
import styled from "styled-components";
import { pallete } from "../../theme";

export const Style = styled.div`
  .container-2 {
    .content {
      .int {
        max-width: 900px;
        margin: auto;
        padding: 10px;
        input {
          width: 100%;
          height: 40px;
          outline: 0;
          text-align: right;
          border: none;
          color: #fff;
          background: #37383e;
          border-radius: ${pallete.defaultRadiusX};
          padding: 10px;
        }
      }
    }
  }

  }

  @media (max-width: 550px) {
    .container-2  .content .int {
      width:500px;
    }
    @media (max-width: 500px) {
      .container-2  .content .int {
        width:450px;
      }
      .posted_imgs {
        width:300px;
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
    }
      @media (max-width: 450px) {
        .container-2  .content .int {
          width:400px;
      }
    }
      @media (max-width: 400px) {
        .container-2  .content .int {
          width:300px;
        }
      }

`;
