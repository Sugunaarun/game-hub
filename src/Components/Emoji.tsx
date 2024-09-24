import meh from "../assets/meh.webp";
import bullsEye from "../assets/bulls-eye.webp";
import thumpsUp from "../assets/thumbs-up.webp";
import { ImageProps, Image } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh" },
    4: { src: thumpsUp, alt: "thumpsUp" },
    5: { src: bullsEye, alt: "bullsEye" },
  };

  if (rating > 3) return null;
  return;
  <Image {...emojiMap[rating]} boxSize="25px" />;
};

export default Emoji;
