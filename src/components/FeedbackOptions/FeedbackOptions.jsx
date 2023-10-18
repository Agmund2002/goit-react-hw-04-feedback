import { Button, Container } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ options, handlerAddRate }) => {
  return (
    <Container>
      {options.map((item, index) => (
        <Button key={index} type="button" onClick={handlerAddRate}>
          {item}
        </Button>
      ))}
    </Container>
  );
};