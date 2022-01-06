import Head from "next/head";
import Image from "next/image";
import GradientLayout from "../components/gradientLayout";
import styles from "../styles/Home.module.css";
import { Box } from "@chakra-ui/layout";

const Home = () => {
  return (
    <GradientLayout
      roundImage
      color="green"
      title="aldo casareto"
      description="hello world"
      subtitle="profile"
      image="https://avatars.githubusercontent.com/u/71019940?s=400&u=a9956b1b566e12534a7ec3b031389eac01014075&v=4"
    >
      <Box>Home</Box>
    </GradientLayout>
  );
};

export default Home;
