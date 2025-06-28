import { Button } from "../../atoms/button";
import { Icon } from "../../atoms/icon";
import { Title } from "../../atoms/title/styles";
import { Header } from "./styles";;

interface ModalHeaderProps {
  title: string;
  onClose: () => void;
}

export const ModalHeader = ({ title, onClose }: ModalHeaderProps) => (
  <Header>
    <Title>{title}</Title>
    <Button variant="icon" onClick={onClose} aria-label="Fechar modal">
      <Icon name="X" size="large" />
    </Button>
  </Header>
);
