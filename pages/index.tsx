import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import GradientLayout from "../components/gradientLayout";
import prima from "../lib/prisma";

const Home = ({ artists }) => {
  return (
    <GradientLayout
      roundImage
      color="gray"
      title="aldo casareto"
      description="hello world"
      subtitle="profile"
      image="https://avatars.githubusercontent.com/u/71019940?s=400&u=a9956b1b566e12534a7ec3b031389eac01014075&v=4"
    >
      <Box color="white" paddingX="40px">
        <Box marginBottom="40px">
          <Text fontSize="2xl" fontWeight="bold">
            Top Artists this month
          </Text>
          <Text fontSize="md">Only visible to you</Text>
        </Box>
        <Flex>
          {artists.map((a) => (
            <Box paddingX="10px" width="20%">
              <Box bg="gray.900" borderRadius="4px" padding="15px" width="100%">
                <Image
                  src="https://placekitten.com/300/300"
                  borderRadius="100%"
                />
                <Box marginTop="10px">
                  <Text fontSize="l">{a.name}</Text>
                  <Text fontSize="x-small">Artist</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </GradientLayout>
  );
};

export const getServerSideProps = async () => {
  const artists = await prima.artist.findMany({});

  return {
    props: {
      artists,
    },
  };
};

export default Home;
