import type { ReactNode } from "react";
import { Backdrop, Content } from "./styles";
import { ModalHeader } from "../../molecules/modalHeader";

interface ModalProps {
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export const Modal = ({ onClose, title, children }: ModalProps) => {
  return (
    <Backdrop onClick={onClose}>
      <Content onClick={(e) => e.stopPropagation()}>
        <ModalHeader title={title} onClose={onClose} />
        {children}
      </Content>
    </Backdrop>
  );
};
