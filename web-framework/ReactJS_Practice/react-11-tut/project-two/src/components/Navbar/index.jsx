import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        pos={'fixed'}
        top={'1rem'}
        left={'1rem'}
        colorScheme={'purple'}
        p={'0'}
        w={'10'}
        h={'10'}
        borderRadius={'full'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Video Hub</DrawerHeader>
          <DrawerBody>
            <VStack>
              <Button onClick={onClose} variant="ghost" colorScheme="purple">
                <Link to="/">Home</Link>
              </Button>
              <Button onClick={onClose} variant="ghost" colorScheme="purple">
                <Link to="videos">Videos</Link>
              </Button>
              <Button onClick={onClose} variant="ghost" colorScheme="purple">
                <Link to="/free-videos">Free Videos</Link>
              </Button>

              <Button onClick={onClose} variant="ghost" colorScheme="purple">
                <Link to="/upload-video">Upload Video</Link>
              </Button>
            </VStack>
            <HStack
              pos={'absolute'}
              bottom={'1rem'}
              left={'1rem'}
              w={'full'}
              justify={'space-evenly'}
            >
              <Button onClick={onClose} colorScheme="purple">
                <Link to="/login">Login</Link>
              </Button>
              <Button onClick={onClose} colorScheme="purple" variant="outline">
                <Link to="/register">Register</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
