import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useModalContact } from "../../hooks/useModalContact";
import { FormContact } from "./FormContact";

export function ModalContact() {
  const { isOpen, onClose, isLoading } = useModalContact();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{"<VieiraDevCode />"}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormContact />
        </ModalBody>

        <ModalFooter>
          <Button
            w="100%"
            colorScheme="green"
            type="submit"
            form="form-contact"
            isLoading={isLoading}
            loadingText="Enviando"
          >
            Enviar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
