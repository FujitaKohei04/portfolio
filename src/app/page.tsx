"use client";

import Image from "next/image";
import Styles from "@/app/main.module.css";
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
    <div className="flex flex-col items-center">
      <Background />
      <Header />
      <SuggestionBox />
      <main className={Styles.main}>
        <section id="thumbnail" className={`${Styles.target} ${Styles.topic}`}>
          <Thumbnail />
        </section>
        <section id="aboutMe" className={`${Styles.target} ${Styles.topic} ${Styles.topicAnimation}`}>
          <AboutMe />
        </section>
        <section id="works" className={`${Styles.target} ${Styles.topic} ${Styles.topicAnimation}`}>
          <Works />
        </section>
        <section id="skills" className={`${Styles.target} ${Styles.topic} ${Styles.topicAnimation}`}>
          <Skills />
        </section>
        <section id="profile" className={`${Styles.target} ${Styles.topic} ${Styles.topicAnimation}`}>
          <Profile />
        </section>
        <section id="contact" className={`${Styles.target} ${Styles.topic} ${Styles.topicAnimation}`}>
          <Contact />
        </section>
      </main>
      
    </div>
  );
}
