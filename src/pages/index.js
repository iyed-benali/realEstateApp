import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/react";

const Banner = ({
  purpose,
  title,
  title2,
  desc1,
  LinkName,
  ButtonText,
  imageUrl,
}) => {
  return (
    <Flex
      justify="center"
      align="center"
      m={10}
      bg="gray.200"
      rounded="lg"
      shadow="md"
    >
      <Box p={5} flex={1}>
        <Text color="blue.500" fontWeight="medium" fontSize="sm" mb={2}>
          {purpose}
        </Text>
        <Heading color="gray.700" fontWeight="bold" fontSize="3xl" mb={2}>
          {title}
          <br />
          {title2}
        </Heading>
        <Text color="gray.500" fontWeight="medium" fontSize="sm" mb={4}>
          {desc1}
        </Text>
        <Link href={LinkName} passHref>
          <Button
            bg="blue.500"
            _hover={{ bg: "blue.700" }}
            color="white"
            fontWeight="bold"
            rounded="full"
            px={6}
          >
            {ButtonText}
          </Button>
        </Link>
      </Box>
      <Box flex={1}>
        <Image
          src={imageUrl}
          alt="Banner Image"
          rounded="lg"
        />
      </Box>
    </Flex>
  );
};

export default function Home() {
  return (
    <Flex flexDir="column" alignItems="center">
      <Banner
        title={"Rental Homes For"}
        title2={"Everyone"}
        desc1={"Explore apartments, villas, homes, and more."}
        purpose={"For Sale"}
        LinkName={"/search?purpose=for-sale"}
        ButtonText={"Buy Now"}
        imageUrl={
          "https://media.istockphoto.com/id/149060607/photo/for-rent-sign-in-front-of-new-house.jpg?s=612x612&w=0&k=20&c=By627yICPZugFR1j2_a_7MCEn1f5ltYlivg6Tv50JaQ="
        }
      />

      <Banner
        title={"Find the Perfect"}
        title2={"Buy Home"}
        desc1={"Find apartments, villas, homes, and more for rent."}
        purpose={"For Rent"}
        LinkName={"/search?purpose=for-rent"}
        ButtonText={"Rent Now"}
        imageUrl={
          "https://wp-tid.zillowstatic.com/bedrock/app/uploads/sites/37/shutterstock_50097079-2ec9cc-1400x931.jpg"
        }
      />
    </Flex>
  );
}
