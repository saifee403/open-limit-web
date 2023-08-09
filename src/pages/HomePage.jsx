import {
  Box,
  Divider,
  // Flex,
  // Grid,
  Image,
  Progress,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import HomeSlider from "../Components/Home/HomeSlider";
import KidSlider from "../Components/Home/KidSlider";
import MenSlider from "../Components/Home/MensSlider";
import TrendingSlider from "../Components/Home/TrendingSlider";
import WomenSlider from "../Components/Home/WomenSlider";
import Footer from "../Components/Home/Footer";
import Navbar from "../Components/Home/Navbar";


function HomePage() {
  return (
    <Box bgColor={"#fdfdfd"}>
      {/* <Box bgColor={"black"}>  */}
      <Box display={{ base: "none", sm: "none", md: "none", lg: "block" }}>
      </Box>
      <Navbar />

      <Box>
        <Progress
          colorScheme="blue"
          hasStripe
          height="42px"
          value={100}
          isAnimated
        />
        <Text
          color={"white"}
          fontSize={{ base: "80%", sm: "100%", lg: "100%" }}
          position="absolute"
          top={{ base: "117px", sm: "115px", md: "142px", lg: "125px" }}
          left={{ base: "5%", sm: "27%", md: "30%", lg: "40%" }}
        >
          New arrivals in mens and womens wear upto 30% off 
        </Text>
      </Box>

      <HomeSlider />

      <Box
        width={{ base: "90%", sm: "90%", md: "90%", lg: "85%" }}
        margin="auto"
        marginTop={{ base: "20px", sm: "30px", md: "30px", lg: "40px" }}
      >
        <Image
          width="100%"
          borderRadius={"20px"}
          src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Uber-HP-Desktop-PromoStrip2-14Mar23.jpg"
        />
      </Box>

      {/* Our Benifits */}
      {/* <Box
        width={{ base: "90%", sm: "90%", md: "90%", lg: "85%" }}
        margin="auto"
      >
        <Text
          width={{ base: "100px", sm: "150px", md: "150px", lg: "190px" }}
          fontSize={{ base: "100%", sm: "150%", md: "150%", lg: "200%" }}
          fontWeight={"semibold"}
          textAlign="left"
          borderBottom={"2px"}
          borderBottomWidth="5px"
          marginTop={{ base: 2, sm: 3, md: 7, lg: 10 }}
          borderBottomColor={"#f89f17"}
        >
          Our Benefits
        </Text>

        <Flex marginTop={{ base: 3, sm: 4, md: 6, lg: 7 }} gap="20px">
          <Box>
            <Image src="https://lmsin.net/cdn-cgi/image/w=410,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-DesktopUberHP-OurBenefit1-22Feb2023.jpg" />
          </Box>

          <Box>
            <Image src="https://lmsin.net/cdn-cgi/image/w=410,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-DesktopUberHP-OurBenefit2-13Oct2022.jpg" />
          </Box>

          <Box display={{ base: "none", sm: "none", md: "block", lg: "block" }}>
            <Image src="https://lmsin.net/cdn-cgi/image/w=410,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-DesktopUberHP-OurBenefit3-13Oct2022.jpg" />
          </Box>
        </Flex>
      </Box> */}

      <Box
        width={{ base: "90%", sm: "90%", md: "90%", lg: "85%" }}
        margin="auto"
        marginTop={{ base: "20px", sm: "30px", md: "30px", lg: "40px" }}
      >
        <Image
          width="100%"
          borderRadius={"20px"}
          src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Uber-HP-Desktop-PromoStrip3-25Mar2023.jpg"
        />
      </Box>





      {/* womens store */}

      <Box
        width={{ base: "90%", sm: "90%", md: "90%", lg: "85%" }}
        margin="auto"
      >
        <Text
          width={{ base: "110px", sm: "170px", md: "170px", lg: "220px" }}
          fontSize={{ base: "100%", sm: "150%", md: "150%", lg: "200%" }}
          fontWeight={"semibold"}
          textAlign="left"
          borderBottom={"2px"}
          borderBottomWidth="5px"
          marginTop={{ base: 5, sm: 6, md: 7, lg: 10 }}
          borderBottomColor={"#f89f17"}
        >
          Women's Store
        </Text>

        <Box marginTop={{ base: 3, sm: 4, md: 6, lg: 7 }}>
          <Image
            width="100%"
            borderRadius={"20px"}
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-PromoWidget24-Desk-Banner1-07Mar23.jpg"
          />
        </Box>
        <WomenSlider />
      </Box>

      {/* Mens Wear */}

      <Box
        width={{ base: "90%", sm: "90%", md: "90%", lg: "85%" }}
        margin="auto"
      >
        <Text
          width={{ base: "100px", sm: "150px", md: "150px", lg: "190px" }}
          fontSize={{ base: "100%", sm: "150%", md: "150%", lg: "200%" }}
          fontWeight={"semibold"}
          textAlign="left"
          borderBottom={"2px"}
          borderBottomWidth="5px"
          marginTop={{ base: 5, sm: 6, md: 7, lg: 10 }}
          borderBottomColor={"#f89f17"}
        >
          Mens's Store
        </Text>

        <Box marginTop={{ base: 3, sm: 4, md: 6, lg: 7 }}>
          <Link to="/men"><Image
            borderRadius={"20px"}
            width="100%"
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-UBERHP-GiftCard-13modblock-oneBythree-A-07Mar2023.jpg"
          /></Link>
        </Box>

        <MenSlider />
      </Box>

      {/* Kid's wear */}

      <Box
        width={{ base: "90%", sm: "90%", md: "90%", lg: "85%" }}
        margin="auto"
      >
        <Text
          width={{ base: "100px", sm: "150px", md: "150px", lg: "190px" }}
          fontSize={{ base: "100%", sm: "150%", md: "150%", lg: "200%" }}
          fontWeight={"semibold"}
          textAlign="left"
          borderBottom={"2px"}
          borderBottomWidth="5px"
          marginTop={{ base: 5, sm: 6, md: 7, lg: 10 }}
          borderBottomColor={"#f89f17"}
        >
          Kids Store
        </Text>

        <Box marginTop={{ base: 3, sm: 4, md: 6, lg: 7 }}>
          <Image
            borderRadius={"20px"}
            width="100%"
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget26-Desk-Banner1-08Mar23.jpg"
          />
        </Box>

        <KidSlider />
      </Box>

      {/* Trending Add-ons */}

      <Box
        width={{ base: "90%", sm: "90%", md: "90%", lg: "85%" }}
        margin="auto"
      >
        <Text
          width={{ base: "135px", sm: "200px", md: "200px", lg: "270px" }}
          fontSize={{ base: "100%", sm: "150%", md: "150%", lg: "200%" }}
          fontWeight={"semibold"}
          textAlign="left"
          borderBottom={"2px"}
          borderBottomWidth="5px"
          marginTop={{ base: 5, sm: 6, md: 7, lg: 10 }}
          borderBottomColor={"#f89f17"}
        >
          Trending Add-Ons
        </Text>

        <Box marginTop={{ base: 3, sm: 4, md: 6, lg: 7 }}>
          <Image
            borderRadius={"20px"}
            width="100%"
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget23-Desk-Banner1-14Mar23.gif"
          />
        </Box>

        <TrendingSlider />
      </Box>

      <Divider />
      <Box
        width={{ base: "90%", sm: "90%", md: "90%", lg: "85%" }}
        margin="auto"
      >
        <Footer />
      </Box>
    </Box>
  );
}

export default HomePage;
