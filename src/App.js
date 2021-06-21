
import { FaSun , FaMoon , FaInstagram, FaFacebook, FaGithub, FaLinkedin , FaTwitter} from 'react-icons/fa';
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";


function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";


  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight='semibold' color="cyan.400"> I' M Rahul Kumar

        </Heading >
        <Spacer></Spacer>
       
        <IconButton ml={2} fontSize="20px" icon={<FaTwitter />} isRound='true' onClick={toggleColorMode}></IconButton>
        <IconButton  ml={2} icon={<FaFacebook />} isRound='true' onClick={toggleColorMode}></IconButton>
        <IconButton   ml={2} icon={<FaLinkedin />} isRound='true' onClick={toggleColorMode}></IconButton>
        <IconButton ml={2} icon={<FaInstagram />} isRound='true' onClick={toggleColorMode} ></IconButton>
        <IconButton ml={2} icon={<FaGithub />} isRound='true' onClick={toggleColorMode}></IconButton>
        <IconButton  ml={10} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>

      </Flex>
    </VStack>
  );
}

export default App;