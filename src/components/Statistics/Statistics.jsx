import { Item, List } from "./Statistics.styled";

export const Statistics = ({ values: { good, neutral, bad}, total, positive }) => {
  return (
    <List>
      <Item>Good: {good}</Item>
      <Item>Neutral: {neutral}</Item>
      <Item>Bad: {bad}</Item>
      <Item>Total: {total}</Item>
      <Item>Positive feedback: {positive}%</Item>
    </List>
  );
};