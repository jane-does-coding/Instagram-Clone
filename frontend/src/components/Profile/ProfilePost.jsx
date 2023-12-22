import {
  Avatar,
  Box,
  Divider,
  Flex,
  GridItem,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Comment from "../Comment/Comment";
import PostFooter from "../FeedPosts/PostFooter";
import { formatDistanceToNowStrict } from "date-fns";

const ProfilePost = ({ post, postedBy }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isComments, setIsComments] = useState(true);
  console.log(post.replies);

  return (
    <>
      <GridItem
        position="relative"
        aspectRatio={"1"}
        overflow="hidden"
        onClick={onOpen}
        cursor={"pointer"}
      >
        {/* Overlay */}
        <Flex
          opacity={0}
          _hover={{ opacity: 1 }}
          bg={"blackAlpha.700"}
          position={"absolute"}
          top={0}
          left={0}
          right={0}
          bottom={0}
          borderRadius={4}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          transition={"all 0.25s ease"}
          zIndex={1}
        >
          <Flex justifyContent={"center"} alignItems={"center"} gap={30}>
            <Flex>
              <AiFillHeart size={20} />
              <Text fontWeight={"bold"} ml={2}>
                {post.likes.length}
              </Text>
            </Flex>
            <Flex>
              <FaComment size={20} />
              <Text fontWeight={"bold"} ml={2}>
                {post.replies.length}
              </Text>
            </Flex>
          </Flex>
        </Flex>
        {/* Image */}
        <Image
          src={post.img}
          objectFit="cover"
          w="100%"
          h="100%"
          borderRadius={4}
        />
      </GridItem>

      <Modal
        isCentered={true}
        size={{ base: "3xl", md: "2xl", lg: "4xl" }}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody bg={"black"} pb={5}>
            {/* MODAL BODY */}
            <Flex
              direction={"row"}
              gap={4}
              w={{ base: "90%", sm: "70%", md: "full" }}
              mx={"auto"}
            >
              {/* IMAGE */}
              <Box
                borderRadius={4}
                overflow={"hidden"}
                flex={1}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Image
                  src={post.img}
                  maxH={"85vh"}
                  w={"100%"}
                  objectFit={"cover"}
                  borderRadius={4}
                />
              </Box>

              {/* CONTENT */}
              <Flex
                flex={1}
                flexDir={"column"}
                pl={6}
                pr={10}
                display={{ base: "none", md: "flex" }}
                justifyContent={"space-between"}
                alignItems={"stretch"}
              >
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                  {/* PROFILE */}
                  <Flex w={"fit-content"} alignItems={"center"} gap={4}>
                    <Avatar src="/profilepic.png" />
                    <Text fontWeight={"bold"}>asaprogrammer_</Text>
                  </Flex>

                  {/* DELETE ICON */}
                  <Box
                    _hover={{ bg: "whiteAlpha.300" }}
                    padding={"0.5rem"}
                    borderRadius={"full"}
                  >
                    <MdDelete size={20} cursor={"pointer"} />
                  </Box>
                </Flex>
                <Divider my={2} mb={0} bg={"gray.700"} />
                {/* Tabs */}
                <Flex alignItems={"center"} justifyContent={"center"}>
                  <Text
                    borderTop={isComments ? null : "1px solid white"}
                    flex={1}
                    fontSize={14}
                    textAlign={"center"}
                    w={"full"}
                    p={2}
                    onClick={() => setIsComments(false)}
                    cursor={"pointer"}
                  >
                    Post Info
                  </Text>
                  <Text
                    borderTop={isComments ? "1px solid white" : null}
                    flex={1}
                    fontSize={14}
                    textAlign={"center"}
                    w={"full"}
                    p={2}
                    onClick={() => setIsComments(true)}
                    cursor={"pointer"}
                  >
                    Comments
                  </Text>
                </Flex>
                <Divider my={2} bg={"gray.700"} />
                {/*  */}
                {isComments ? (
                  <>
                    {/* Comments */}
                    <VStack
                      w={"full"}
                      alignItems={"start"}
                      maxH={"30vh"}
                      overflowY={"auto"}
                    >
                      {post.replies.map((reply) => (
                        <Comment reply={reply} key={reply._id} />
                      ))}
                      {post.replies.length == 0 && (
                        <Text textAlign={"center"} width={"100%"}>
                          No comments
                        </Text>
                      )}
                    </VStack>
                  </>
                ) : (
                  <>
                    <Text
                      fontSize={14}
                      color={"whiteAlpha.700"}
                      maxH={"30vh"}
                      overflowY={"auto"}
                    >
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Lorem ipsum dolor sit amet. Ratione, quo. Lorem ipsum
                      dolor sit amet. Lorem ipsum, dolor sit amet consectetur
                      adipisicing elit. Eius, nostrum! Lorem, ipsum dolor sit
                      amet consectetur adipisicing elit. Eligendi iste iusto
                      mollitia fuga impedit amet aliquam doloribus voluptate
                      assumenda aut. Lorem ipsum dolor sit amet consectetur,
                      adipisicing elit. Lorem ipsum dolor sit amet. Ratione,
                      quo. Lorem ipsum dolor sit amet. Lorem ipsum, dolor sit
                      amet consectetur adipisicing elit. Eius, nostrum! Lorem,
                      ipsum dolor sit amet consectetur adipisicing elit.
                      Eligendi iste iusto mollitia fuga impedit amet aliquam
                      doloribus voluptate assumenda aut.
                    </Text>
                    <Divider my={2} mt={4} bg={"gray.700"} />
                    <Flex
                      justifyContent={"space-between"}
                      w={"full"}
                      color={"whiteAlpha.700"}
                      fontSize={14}
                    >
                      <Text>Date posted:</Text>{" "}
                      <Text as={"span"} fontSize={14} color={"white"}>
                        April 9, 2008
                      </Text>
                    </Flex>
                  </>
                )}
                {/*  */}
                <Divider my={2} mb={4} bg={"gray.700"} />
                <Box mt={"auto"} mb={2}>
                  <PostFooter isProfilePage={true} post={post} />
                </Box>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfilePost;
