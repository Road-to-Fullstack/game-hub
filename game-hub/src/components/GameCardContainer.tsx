import { Box } from "@chakra-ui/react";
import { Children, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box width="300px" borderRadius="10px" overflow="hidden" boxShadow="md">
      {children}
    </Box>
  );
};

export default GameCardContainer;
