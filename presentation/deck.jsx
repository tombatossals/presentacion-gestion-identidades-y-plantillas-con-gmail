import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

const images = {
    city: require("./city.jpg"),
    kat: require("./kat.png"),
    logo: require("./formidable-logo.svg"),
    gmail_logo: require("./images/gmail-logo.png"),
    swissarmy: require("./images/swissarmy.jpg"),
    identity01: require("./images/identity01.png"),
    templates01: require("./images/templates01.png")
};

export default class extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={800}>
        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="black">
            Gestión de identidades
          </Heading>
          <Heading size={1} fit caps textColor="primary">
            y plantillas
          </Heading>
          <Heading size={1} fit caps textColor="black">
          </Heading>
          <Image src={images.gmail_logo} width="128px" height="128px" />
          <Text textSize="2em" textColor="black">David Rubert (david.rubert@uji.es)</Text>
          <Text textSize="1.5em" margin="20px 0px 0px" bold>Pulsa la flecha &rarr;  para continuar...</Text>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.swissarmy.replace("/", "")} bgDarken={0.5}>
            <Heading size={1} caps fit textColor="primary">
              Necesidad y utilidad
            </Heading>
            <Appear fid="1">
                <Heading size={2} caps fit textColor="tertiary">
                  Identidades: Comunicación personal e impersonal
                </Heading>
            </Appear>
            <Appear fid="2">
                <Heading size={2} caps fit textColor="orange">
                  Plantillas: respuestas similares ágiles
                </Heading>
            </Appear>
            <Text textColor="white">Pulsa la flecha &rarr;  para continuar...</Text>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.identity01.replace("/", "")} bgDarken={0.1}>
            <Heading size={2} caps fit textColor="grey">
                Ejemplo de gestión de identidades
            </Heading>
            <Text textColor="white">Pulsa la flecha &rarr;  para continuar...</Text>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.templates01.replace("/", "")} bgDarken={0.1}>
            <Heading size={2} caps fit textColor="brown">
                Ejemplo de gestión de plantillas
            </Heading>
            <Text textColor="grey">Pulsa la flecha &rarr;  para continuar...</Text>
        </Slide>

        <Slide transition={["slide"]} bgColor="white">
            <Heading size={2} caps fit textColor="black">
                Ejemplo de funcionamiento
            </Heading>

            <Text textSize="2em" padding="1em" bgColor="#EFEFEF">Vamos a hacer una demostración, enviadme 3 o 4 de vosotros/as un correo a la dirección de correo <Link href="mailto:curs-gmail@uji.es">curs-gmail@uji.es</Link> que véis más abajo preguntando por "el estado de vuestra solicitud de admisión al curso".</Text>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Heading caps fit>Flexible Layouts</Heading>
          <Layout>
            <Fill>
              <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                Left
              </Heading>
            </Fill>
            <Fill>
              <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                Right
              </Heading>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide", "spin"]} bgColor="primary">
          <Heading caps fit size={1} textColor="tertiary">
            Smooth
          </Heading>
          <Heading caps fit size={1} textColor="secondary">
            Combinable Transitions
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <List>
            <ListItem><Appear fid="1">Inline style based theme system</Appear></ListItem>
            <ListItem><Appear fid="2">Autofit text</Appear></ListItem>
            <ListItem><Appear fid="3">Flexbox layout system</Appear></ListItem>
            <ListItem><Appear fid="4">React-Router navigation</Appear></ListItem>
            <ListItem><Appear fid="5">PDF export</Appear></ListItem>
            <ListItem><Appear fid="6">And...</Appear></ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} caps fit textColor="tertiary">
            Your presentations are interactive
          </Heading>
        </Slide>
        <Slide transition={["spin", "slide"]} bgColor="tertiary">
          <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
            Made with love in Seattle by
          </Heading>
          <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
        </Slide>
      </Deck>
    );
  }
}
