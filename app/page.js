// "use client";
// import Image from "next/image";
import styles from "./page.module.css";
// import Carousel from "@/comopnents/Carousel";
// import Slide1 from "@/comopnents/Slide1";
// import Slide2 from "@/comopnents/Slide2";
// import Slide3 from "@/comopnents/Slide3";
// import Slide4 from "@/comopnents/Slide4";
// import SlideBG1 from "@/comopnents/SlideBG1";
// import SlideBG2 from "@/comopnents/SlideBG2";
// import SlideBG3 from "@/comopnents/SlideBG3";
// import SlideBG4 from "@/comopnents/SlideBG4";
// import SlideVideo1 from "@/comopnents/SlideVideo1";
// import SlideVideo2 from "@/comopnents/SlideVideo2";

// import { useState } from "react";
import SlideWithVideos from "@/comopnents/SlideWithVideos";
export const metadata = {
  title: 'AGO Participant Form'
}
export default function Home() {
  // const items = [
  //   ,
  // SlideBG1,
  // SlideBG2,
  // SlideBG3,
  // SlideBG4,
  // Slide1,
  // SlideVideo1,
  // Slide2,
  // Slide3,
  // Slide4,
  // SlideVideo2,
  // ];
  // const [videoLink, setVideoLink] = useState("");
  // const [videoStatus, seVideoStatus] = useState("");

  // const changeVideoStatus = (status) => {
  //   seVideoStatus(status);
  // };
  // const changeVideo = (link) => {
  //   setVideoLink("");
  // };
  return (
    <main className={styles.main}>
      <SlideWithVideos />
      {/* <Carousel
        items={items}
        changeVideoStatus={changeVideoStatus}
        changeVideo={changeVideo}
      /> */}
    </main>
  );
}
