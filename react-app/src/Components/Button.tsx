import styled from "styled-components";

const Btn = styled.button`
background: orange
color: black
padding: 10px
`;

interface Props {
  text: string;
  onClick: () => void;
}

//const Button = ({ text, color = "primary", onClick }: Props) => {
function Button({ text, onClick }: Props) {
  return <Btn onClick={onClick}>{text}</Btn>;
}

export default Button;
