import styled from "styled-components";

export const Style = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  backdrop-filter: blur(14px);
  z-index: 10;
  .logo {
    img {
      width: 109px;
      height: auto;
    }
    .container {
      displey: flex;
    }
    .full-container {
      background: inherit;
    }
  }
  .menu {
    ul {
      li {
        a {
          display: flex;
          gap: 5px;
        }
      }
    }
  }
  a {
    color: #fff;
  }

`;
