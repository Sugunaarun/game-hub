import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../../Hooks/useGames";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../Service.ts/image-url";
interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card>
        <Image
          objectFit="cover"
          src={getCroppedImageUrl(game.background_image)}
        />
        <CardBody>
          <HStack justifyContent={"space-between"}>
            <PlatformIconsList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading marginTop={3} fontSize="2xl">
            {game.name}
          </Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
