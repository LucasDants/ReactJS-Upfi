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
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="red" borderTopRadius="none">
        <ModalBody p="0" maxWidth={900} maxH={600}>
          <Image src={imgUrl} objectFit="contain" w="100%" />
        </ModalBody>
        <ModalFooter
          bg="pGray.800"
          justifyContent="flex-start"
          borderBottomRadius="md"
          w="100%"
        >
          <Link href={imgUrl} isExternal>
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
