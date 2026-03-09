import Image from "next/image";

const Thumbnail = () => {
  return (
    <div>
      <div className="flex flex-row justify-center items-end m-20 gap-2">
        <div className="text-6xl font-bold">うえるかむ</div>
        <div className="">in 藤's house</div>
      </div>
    </div>
  );
}

const AboutMe = () => {
  return (
    <div>
      <div className="text-5xl">About Me</div>
      <div>福井県出身。福井大学 工学部 電気電子情報工学科に所属。</div>
      
    </div>
  );
}

const Works = () => {
  return (
    <div>
      <div className="text-5xl">Works</div>
      <div>
        {/* <iamge /> */}
      </div>
    </div>
  );
}

const Skills = () => {
  return (
    <div>
      <div className="text-5xl">Skills</div>
      <div className="flex flex-row gap-3">
        <div>
          <div className="text-3xl">履修言語</div>
          <div>
            <div>C言語</div>
            <div>Python</div>
            <div>Java</div>
            <div>HTML/CSS</div>
            <div>JavaScript</div>
          </div>
        </div>
        <div>
          <div className="text-3xl">履修ライブラリ</div>
          <div>
            <div>React</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Profill = () => {
  return (
    <div>
      <div className="text-5xl">Profill</div>
      <div>爆誕</div>
    </div>
  );
}

const Contact = () => {
  return (
    <div>
      <div className="text-5xl">Contact</div>
      <div>fujita.kohei04@gmail.com</div>
    </div>
  );
}

const SuggestionBox = () => {
  return (
    <div>
      <button className="border rounded-full p-5 m-5 absolute bottom-0 right-0">Sug</button>
    </div>
  );
}


export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <main className="flex flex-col gap-10">
        <Thumbnail />
        <AboutMe />
        <Works />
        <Skills />
        <Profill />
        <Contact />
       
      </main>
      <SuggestionBox />
    </div>
  );
}
