import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import { wrap } from "framer-motion";
interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius="10px" overflow="hidden" boxShadow="md">
      <Image src={game.image.small_url} objectFit="cover" height={"250px"} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList platforms={game.platforms}></PlatformIconList>
          <CriticScore score={game.id} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
