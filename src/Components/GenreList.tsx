import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenre from "./../../Hooks/useGenre";
import getCroppedImageUrl from "../Service.ts/image-url";

const GenreList = () => {
  const { data } = useGenre();
  return (
    <List>
      {data.map((genre) => (
        <ListItem paddingY={3}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize="15px">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
