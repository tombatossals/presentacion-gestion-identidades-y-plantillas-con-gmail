import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

const images = {
    gmail_logo: require("./images/gmail-logo.png"),
    batman: require("./images/batman.jpg"),
    bruce: require("./images/bruce.jpg"),
    identity01: require("./images/identity01.png"),
    signature01: require("./images/signature01.png"),
    config01: require("./images/config01.png"),
};

export default class extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={800}>
        <Slide transition={["zoom"]} bgColor="#E0D3E2">
          <Heading size={1} fit caps lineHeight={1} textColor="black">
            Gestión de identidades
          </Heading>
          <Heading size={1} fit caps textColor="brown">
            y plantillas
          </Heading>
          <Text>Segunda sesión</Text>
          <Image src={images.gmail_logo.replace("/", "")} width="128px" height="128px" />
          <Text textSize="2em" textColor="black">David Rubert (david.rubert@uji.es)</Text>
          <Text textSize="1.5em" margin="20px 0px 0px" bold>Pulsa la flecha &rarr;  para continuar...</Text>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Heading caps fit>Identidades</Heading>
          <Text>¿Tenéis claro cuando y cómo utilizarlas?</Text>
          <Layout>
            <Fill>
              <Heading size={6} textColor="secondary" bgColor="white" margin={10}>
                bruce.wayne@uji.es
              </Heading>
              <Image src={images.bruce.replace("/", "")} width="128px" height="128px" />
            </Fill>
            <Fill>
              <Heading size={6} textColor="secondary" bgColor="white" margin={10}>
                batman@uji.es
              </Heading>
              <Image src={images.batman.replace("/", "")} width="128px" height="128px" />
            </Fill>
          </Layout>
          <Text>Una misma persona puede tener múltiples direcciones de correo diferentes.</Text>
        </Slide>

        <Slide transition={["slide"]} bgColor="red">
            <Heading size={2} caps fit textColor="white">
                Direcciones de correo impersonales
            </Heading>
            <Text>¿De dónde salen y cómo puedo solicitar una?</Text>
            <List textColor="yellow" bgColor="brown" padding="1em" margin="0 5em">
              <ListItem>Alias de correo. Ej: se@uji.es</ListItem>
              <ListItem>Alias extendido. Ej: david.rubert@uji.es</ListItem>
              <ListItem>Lista de correo. Ej: pas@uji.es</ListItem>
            </List>
            <Text>SPI en e-ujier</Text>
        </Slide>

        <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading size={2} caps fit textColor="tertiary">
                Debate
            </Heading>

            <Text textSize="2em" padding="1em" bgColor="#F8D12C">Estáis incluidos/as en alguna lista de correo? ¿Tenéis álias extendido? ¿Pertenecéis a algún alias?</Text>
            <Text textSize="2em">Os he añadido a todos/as al siguiente alias temporal <Link href="mailto:curs-gmail@uji.es">curs-gmail@uji.es</Link></Text>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.config01.replace("/", "")} bgDarken={0.1} bgColor="white">
            <Text margin="12em 0 0 0" cap fit textColor="brown">Pulsa la flecha &rarr;  para continuar...</Text>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.identity01.replace("/", "")} bgDarken={0.1} bgColor="white">
            <Text margin="12em 0 0 0" cap fit textColor="brown">Pulsa la flecha &rarr;  para continuar...</Text>
        </Slide>

        <Slide transition={["slide", "spin"]} bgColor="#AF806E">
            <Heading size={2} caps fit textColor="tertiary">
                Identidades
            </Heading>

            <List textColor="yellow" bgColor="#AF806E" padding="1em" margin="0">
              <ListItem>Accede a la configuración de cuentas.</ListItem>
              <ListItem>Comprueba qué identidades tienes configuradas.</ListItem>
              <ListItem>Establece como predeterminada la dirección que prefieras.</ListItem>
              <ListItem>Elimina aquellas identidades que ya no necesites</ListItem>
            </List>
            <Text>No tengas miedo en probar, ya que cualquier fallo que cometamos puede solucionarse.</Text>
        </Slide>

        <Slide transition={["slide", "spin"]} bgColor="#C7A0AC">
            <Heading size={2} caps fit textColor="tertiary">
                Firmas
            </Heading>

            <Text>Cada identidad puede tener una firma diferente.</Text>
            <List textColor="yellow" bgColor="#918FAC" padding="1em" margin="0">
              <ListItem>Accede a la configuración general.</ListItem>
              <ListItem>Comprueba qué firmas tienes definidas.</ListItem>
              <ListItem>Cambia la firma de tu nueva identidad, curs-gmail@uji.es.</ListItem>
            </List>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.signature01.replace("/", "")} bgDarken={0.1} bgColor="white">
            <Text margin="12em 0 0 0" cap fit textColor="brown">Pulsa la flecha &rarr;  para continuar...</Text>
        </Slide>

      </Deck>
    );
  }
}
