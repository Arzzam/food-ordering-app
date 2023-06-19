import styled from "styled-components";

const Loader = styled.div`
  border: 5px solid #92320c;
  border-top: 5px #4d1601 solid;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;
