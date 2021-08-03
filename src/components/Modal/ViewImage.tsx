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
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK
  return (
    <Modal motionPreset="slideInBottom" isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay>
        <ModalContent bgColor="pGray.900" maxWidth="900px" height="auto" width="auto">
          <ModalBody px={0} py={0}>
            <Image src={imgUrl} maxWidth="900px" maxHeight="600px" mx="auto"/>
          </ModalBody>
          <ModalFooter 
            justifyContent="flex-start" 
            alignItems="center" 
            bgColor="pGray.800" 
            height="32px"
            px="10px"
            borderBottomRadius="4"
          >
            <Link href={imgUrl} fontSize="14px" isExternal>
              Abrir original
            </Link>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  )
}
