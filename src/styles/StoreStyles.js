import styled from "styled-components";

export const mainContainer = {
  overlay: {
    zIndex: 990,
  },

  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    zIndex: 991,
    backgroundColor: 'black'
  }
}

export const modalContainer = styled.div`
  width: 100px;
  height: 100px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
`;