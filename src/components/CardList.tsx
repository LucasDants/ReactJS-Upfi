import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
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
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [imageSelectedUrl, setImageSelectedUrl] = useState('');

  function handleViewImage(url: string): void {
    setImageSelectedUrl(url);
    onOpen();
  }

  return (
    <>
      <SimpleGrid columns={3} spacing="40px" mb="40px">
        {cards.map(card => (
          <Card
            key={card.id}
            data={{
              title: card.title,
              description: card.description,
              ts: card.ts,
              url: card.url,
            }}
            // eslint-disable-next-line react/jsx-no-bind
            viewImage={handleViewImage}
          />
        ))}
      </SimpleGrid>
      <ModalViewImage
        imgUrl={imageSelectedUrl}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
}
