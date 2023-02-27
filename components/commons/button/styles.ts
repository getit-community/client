import styled, { css } from 'styled-components';

const NormalBtnContainer = styled.div`
  max-width: 30rem;
  width: 100%;
  font-size: ${(props) => props.theme.fontSizes.base};
  font-weight: 400;
  border: 1px solid ${(props) => props.theme.colors.border};
  margin-bottom: 2rem;
  border-radius: 25rem;
  height: 4rem;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.white};

  &:hover {
    background-color: ${(props) => props.theme.colors.hoverGreen};
  }

  &:active {
    /* background-color: ${(props) => props.theme.colors.activeGreen}; */
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Text = styled.div<{ color?: 'black' | 'gray' | 'white' }>`
  font-size: 1.5rem;
  letter-spacing: 0.025rem;

  ${(props) => {
    switch (props.color) {
      case 'black':
        return css`
          color: ${(props) => props.theme.colors.black};
        `;
      case 'gray':
        return css`
          color: ${(props) => props.theme.colors.gray};
        `;
      case 'white':
        return css`
          color: ${(props) => props.theme.colors.white}; ;
        `;

      default:
        return css`
          color: ${(props) => props.theme.colors.black};
        `;
    }
  }}
`;

const SubmitBtnContainer = styled.button`
  background-color: ${(props) => props.theme.colors.theme};
  margin-bottom: 2rem;
  border-radius: 25rem;
  height: 4rem;
  font-weight: 600;
  letter-spacing: 0.025rem;
  border-style: none;
  cursor: pointer;

  &:active {
    background-color: ${(props) => props.theme.colors.activeGreen};
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
  }
`;

const DisabledBtnContainer = styled.div`
  background-color: ${(props) => props.theme.colors.disabled};
  margin-bottom: 2rem;
  border-radius: 25rem;
  max-width: 30rem;
  height: 4rem;
  font-weight: 600;
  letter-spacing: 0.025rem;
  border-style: none;
  cursor: not-allowed;
`;

const CloseBtnContainer = styled.div`
  display: flex;
  height: 5.3rem;
  align-items: center;
  padding: 0 1.6rem;
  position: relative;
`;

const CloseIconContainer = styled.div`
  display: flex;
  padding: 0.3rem;

  &:hover {
    border-radius: 25rem;
    background-color: rgba(15, 20, 25, 0.1);
  }

  &:active {
    border-radius: 25rem;
    background-color: rgba(15, 20, 25, 0.2);
  }
`;

export {
  NormalBtnContainer,
  ContentContainer,
  Text,
  SubmitBtnContainer,
  CloseBtnContainer,
  CloseIconContainer,
  DisabledBtnContainer,
};
