"use client";

import Image from "next/image";
import styles from "@/app/main.module.css";
import { useState } from "react";

import { User, Hammer, Lightbulb, Cat, Mail } from "lucide-react";

import { DrawLogoSVG } from "./components/Welcome/Welcome";
import { WorkContent } from "./types/work";
import { IMG_NUM, WORKS } from "./data/work";
import { frontend, progLang } from "./data/skill";
import { ChartContent } from "./types/chart";
import { Thumbnail } from "./components/Thumnail/Thumnail";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Works } from "./components/Works/Works";
import { Skills } from "./components/Skills/Skills";
import { Profile } from "./components/Profile/Profile";
import { Contact } from "./components/Contact/Contact";
import { Background } from "./components/Background/Background";
import { SuggestionBox } from "./components/SuggestionBox/SuggestionBox";
import { Header } from "./components/Header/Header";

export default function Home() {
  return (
  <div className={styles.container}>
      {/* <Background /> */}
      <Header />
      {/* <SuggestionBox /> */}
      <main>
        <div className={styles.main}>
          <section id="thumbnail" className={`${styles.target}`}>
            <Thumbnail />
          </section>
          <section id="aboutMe" className={`${styles.target} ${styles.topicAnimation}`}>
            <AboutMe />
          </section>
          <section id="works" className={`${styles.target} ${styles.topicAnimation}`}>
            <Works />
          </section>
          <section id="skills" className={`${styles.target} ${styles.topicAnimation}`}>
            <Skills />
          </section>
          <section id="profile" className={`${styles.target} ${styles.topicAnimation}`}>
            <Profile />
          </section>
          <section id="contact" className={`${styles.target} ${styles.topicAnimation}`}>
            <Contact />
          </section>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
