import styled from "styled-components";

const getColor = ({ children }) => {
  switch (children[0]) {
    case 'Good: ':
      return p => p.theme.colors.positive;
    case 'Neutral: ':
      return p => p.theme.colors.neutral;
    case 'Bad: ':
      return p => p.theme.colors.negative;
    default:
      return null;
  }
};

export const List = styled.ul`
display: flex;
flex-direction: column;
gap: ${p => p.theme.spacing(2)};
`
export const Item = styled.li`
  color: ${getColor};
  font-weight: ${({children}) => children[0] === 'Total: ' && '700'};
`;