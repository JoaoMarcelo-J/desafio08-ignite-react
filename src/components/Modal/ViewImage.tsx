import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <ModalOverlay>
        <ModalContent maxH="600px" maxW="900px">
          <ModalBody padding="initial">
            <Image
              src={imgUrl}
              maxH="600px"
              maxW="900px"
              width="100%"
              height="100%"
            />
          </ModalBody>
          <ModalFooter
            backgroundColor="#353431"
            justifyContent="end"
            padding="8px"
          >
            <Link href={imgUrl} lineHeight="16px" fontSize="14px">
              Abrir original
            </Link>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
}
