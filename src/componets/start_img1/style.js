import styled from "styled-components";
import { pallete } from "../../theme";

export const Style = styled.div`
  .container_inner {
    top: 150px;
    right: -152px;
    direction: rtl;
    margin-right: 30px;
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
    color: #000;
    border-radius: ${pallete.defaultRadiusXS};
    line-height: 45px;
    margin-top: 25px;
  }
  .btn:hover {
    background: #1993ff;
    color:#fff;
  }
  .title {
    font-size: 25px;
  }
`;
