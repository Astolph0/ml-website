import FemboyFridayVirtualHeadpat from "@/components/FemboyFridayVirtualHeadpat";
import FinalNavbar from "@/components/NavBar";
import ViewTracker from "@/components/ViewTracker";
import { Inter } from "next/font/google";
import Head from "next/head";
import { Accordion, Container, Image } from "react-bootstrap";

const inter = Inter({ subsets: ['latin'] })

export default function AstolfoMod() {
  return (
    <div className={inter.className}>
      <Head>
        <title>Astolfo Forge Mod | mldkyt's website</title>
        <meta name="og:title" content="Astolfo Forge mod" />
        <meta
          name="og:description"
          content="Astolfo Forge mod adds lots of femboys into Minecraft!"
        />
        <meta
          name="og:image"
          content="https://mldkyt.com/2023-10-06_21.34.58.png"
        />
        <meta name="theme-color" content="#FF77FF" />
        <meta name="author" content="mldkyt" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4021488147419187"
          crossOrigin="anonymous"
        ></script>
      </Head>

      <FinalNavbar sel="project" />

      <Container>
        <FemboyFridayVirtualHeadpat />

        <h1>
          Astolfo Forge Mod
        </h1>

        <h2>Feature list</h2>
        <ul className="text-white">
          <li className="mx-4">Femboy Biome</li>
          <li className="mx-4">Astolfo in 4 outfits</li>
          <li className="mx-4">Astolfo flower, which spawns a lot of Astolfo when destroyed</li>
          <li className="mx-4">Felix</li>
          <li className="mx-4">Astolfo Sword</li>
          <li className="mx-4">Hideri</li>
          <li className="mx-4">Venti</li>
          <li className="mx-4">Rimuru</li>
          <li className="mx-4">Nagisa</li>
          <li className="mx-4">Sieg</li>
          <li className="mx-4">Bridget</li>
          <li className="mx-4">/duplicate_cuties command for more cuteness &lt;3</li>
        </ul>
        <Accordion defaultActiveKey="2">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Images</Accordion.Header>
            <Accordion.Body>
              <Image style={{width: '100%'}} src="/2023-10-06_21.34.58.png" />
              <Image style={{width: '100%'}} src="/Screenshot_20230929_132211.png" />
              <Image style={{width: '100%'}} src="/Screenshot_20230929_202606.png" />
              <Image style={{width: '100%'}} src="/Screenshot_20230929_202616.png" />
              <Image style={{width: '100%'}} src="/Screenshot_20230929_202626.png" />
              <Image style={{width: '100%'}} src="/Screenshot_20230929_202633.png" />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Changelog</Accordion.Header>
            <Accordion.Body>
              <h2 className="text-xl mx-2 font-bold text-white">Version 1.2</h2>
              <ul>
                <li>Added Hideri</li>
                <li>Added Bridget</li>
                <li>Added Venti</li>
                <li>Added /cuterain</li>
                <li>Added /despawn</li>
                <li>Added /duplicatecuties</li>
                <li>Removed /duplicateastolfos</li>
                <li>Added Rimuru</li>
                <li>Added Nagisa</li>
                <li>Added Sieg</li>
              </ul>
              <h2 className="text-xl mx-2 font-bold text-white">Version 1.1</h2>
              <ul>
                <li>Added Astolfo Sword</li>
                <li>Added Astolfo Biome</li>
                <li>Added Felix Agryle</li>
              </ul>
              <h2 className="text-xl mx-2 font-bold text-white">Version 1.0</h2>
              <ul>
                <li>First release</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Download</Accordion.Header>
            <Accordion.Body>
              <p>
                <a href="/tracker/downloads/astolfomod">Download the mod from GitHub</a>
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <br />
        <p className="mx-2 text-gray-500 text-sm">Made using MCreator.</p>
        
        <ViewTracker />
      </Container>

    </div>
  )
}