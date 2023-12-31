import { Modal } from "antd";
import { useModal } from "../../hooks/useModal";
import styled from "styled-components";

export function ModalImagePreview() {
  const { isOpen, onClose, imgUrl } = useModal();

  return (
    <Modal
      open={isOpen}
      footer={false}
      width="70rem"
      onCancel={onClose}
    >
      <ImageContainer>
        <img src={imgUrl} />
      </ImageContainer>
    </Modal>
  )
}

const ImageContainer = styled.div`
  padding: 1rem 1rem 0 1rem;

  img {
    width: 100%;
    border-radius: 10px;
  }
`;
