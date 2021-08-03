import { Box, Flex, Image, SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  
  // TODO MODAL USEDISCLOSURE
  const { isOpen, onOpen, onClose } = useDisclosure()
  // TODO SELECTED IMAGE URL STATE
  const [imageModal, setImageModal] = useState<string>(null)

  function handleViewImage(url: string) {
    setImageModal(url)
    onOpen()
  }

  return (
    <>
      <SimpleGrid columns={3} spacing="40px">
        { cards.map(card => (
          <Card key={card.id} data={card} viewImage={() => handleViewImage(card.url)}/>
        )) }
      </SimpleGrid>
      {/* TODO CARD GRID */}
      { imageModal && (
        <ModalViewImage isOpen={isOpen} onClose={onClose} imgUrl={imageModal}/>
      ) }
    </>
  );
}
