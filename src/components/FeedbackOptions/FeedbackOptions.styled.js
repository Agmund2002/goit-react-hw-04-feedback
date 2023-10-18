import styled from "styled-components";

const getColor = ({children}) => {
  switch (children) {
    case 'good':
      return p => p.theme.colors.positive;
    case 'neutral':
      return p => p.theme.colors.neutral;
    case 'bad':
      return p => p.theme.colors.negative;
    default:
      return null;
  }
}

export const Container = styled.div`
display: flex;
gap: ${p => p.theme.spacing(3)};
`
export const Button = styled.button`
  text-transform: capitalize;
  border: 2px solid ${getColor};
  border-radius: 5px;
  padding: ${p => p.theme.spacing(1)} ${p => p.theme.spacing(2)};
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.75);
  cursor: pointer;

  transition: background-color ${p => p.theme.animation};

  &:hover,
  &:focus {
    background-color: ${getColor};
  }
`;