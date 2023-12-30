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
      background: inherit;z
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
  .responsive_container {
    display:none;
  }
  a {
    color: #fff;
  }
  .main-container {
    display:none;
  }
  @media only screen and  (max-width: 850px) {
    
    .full-container {
      display:none;
    }
    .main-container {
      display:flex;
    }
    .responsive_container {
      display:block;
    }
    img.wh {
      width:42px;
      margin:10px;
      background:white;
    }
  }
  @media (max-width: 400px) {
    .responsive_container {
      display:block;
    }
    .none {
      display:none;
    }
  }
`;
