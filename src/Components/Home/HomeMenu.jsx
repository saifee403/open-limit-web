import { 
    // Box, 
    Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "../../CSS/HomeMenu.css"

const HomeMenu = () => {
    return (
        <Flex
            height={{ base: "3.2rem", md: "4.94rem" }}
            minW={"100%"}
            justify={"space-around"}
            pos="relative"
            align="center"
            display={{ base: "none", lg: "Flex" }}

            width="36%"
            gap={5}


        // border="1px solid red"

        >
            <Flex
                justify={"center"}
                className="dropDown"
                height="100%"
                align={"center"}
                width="15%"
                _hover={{ color: "#f89f17" }}


            >
                <Link to="/women">Women</Link>
                
            </Flex>
            <Flex
                justify={"center"}
                className="dropDown"
                height="100%"
                align={"center"}
                width="15%"
                _hover={{ color: "#f89f17" }}

            >
                <Link to="/men">Men</Link>
               
            </Flex>
            <Flex
                justify={"center"}
                className="dropDown"
                height="100%"
                align={"center"}
                width="15%"
                _hover={{ color: "#f89f17" }}
            >
                <Link to="#">Kids</Link>
               
            </Flex>
            <Flex
                justify={"center"}
                className="dropDown"
                height="100%"
                align={"center"}
                width="15%"
                _hover={{ color: "#f89f17" }}

            >
                <Link to="#">Shoes</Link>
                
            </Flex>
            <Flex
                justify={"center"}
                className="dropDown"
                height="100%"
                align={"center"}
                width="15%"
                _hover={{ 
                    color: "#f89f17" 
                }}

            >
                <Link to="#">Beauty</Link>
                
            </Flex>

        </Flex>
    );
};

export default HomeMenu;