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
    identity02: require("./images/identity02.png"),
    signature01: require("./images/signature01.png"),
    signaturelogo: require("./images/signature_logo.jpg"),
    automatic01: require("./images/automatic01.png"),
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

        <Slide transition={["slide"]} bgColor="brown">
            <Heading size={2} caps fit textColor="white">
                Direcciones de correo impersonales
            </Heading>
            <Text>¿De dónde salen y cómo puedo solicitar una?</Text>
            <List textColor="yellow" bgColor="brown" padding="1em" margin="0 5em">
              <ListItem>Alias de correo. Ej: se@uji.es</ListItem>
              <ListItem>Alias extendido. Ej: david.rubert@uji.es (<Link href="https://e-ujier.uji.es/pls/www/!gri_ass.spi020102?p_proc=356&p_tema=12">enlace</Link>)</ListItem>
              <ListItem>Lista de correo. Ej: pas@uji.es</ListItem>
            </List>
            <Text><Link href="https://e-ujier.uji.es/pls/www/gri_ass.spi020101">SPI en e-ujier</Link></Text>
        </Slide>

        <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading size={2} caps fit textColor="tertiary">
                Debate
            </Heading>

            <Text textSize="2em" padding="1em" bgColor="#F8D12C">Estáis incluidos/as en alguna lista de correo? ¿Tenéis álias extendido? ¿Pertenecéis a algún alias?</Text>
            <Text textSize="2em">Os he añadido a todos/as al siguiente alias temporal <Link href="mailto:curs-gmail@uji.es">curs-gmail@uji.es</Link></Text>
        </Slide>

        <Slide transition={["slide"]} bgColor="#7D9796">
            <Heading size={2} caps fit textColor="white">
                Añadir nueva identidad
            </Heading>
            <Text>Veamos cómo podemos añadir una nueva identidad a nuestra lista de direcciones</Text>
            <List textColor="yellow" padding="1em" margin="0 5em">
              <ListItem>Accedemos a configuración/cuentas</ListItem>
              <ListItem>Pulsamos añadir identidad</ListItem>
              <ListItem>Introducimos el nombre y correo del álias</ListItem>
              <ListItem>Nos enviará un e-mail para confirmar</ListItem>
            </List>
            <Text>Ya hemos terminado el proceso, lo vamos a ver con un ejemplo</Text>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.config01.replace("/", "")} bgDarken={0.1} bgColor="white">
            <Text margin="12em 0 0 0" cap fit textColor="brown">Pulsa la flecha &rarr;  para continuar...</Text>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.identity01.replace("/", "")} bgDarken={0.1} bgColor="white">
            <Text margin="12em 0 0 0" cap fit textColor="brown">Pulsa la flecha &rarr;  para continuar...</Text>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.identity02.replace("/", "")} bgDarken={0.1} bgColor="white">
            <Text margin="12em 0 0 0" cap fit textColor="brown">Pulsa la flecha &rarr;  para continuar...</Text>
        </Slide>

        <Slide transition={["slide", "spin"]} bgColor="#AF806E">
            <Heading size={4} caps fit textColor="tertiary">
                Ejercicio
            </Heading>

            <List textColor="yellow" bgColor="#AF806E" padding="1em" margin="0">
              <ListItem>Accede a la configuración de cuentas.</ListItem>
              <ListItem>Comprueba qué identidades tienes configuradas.</ListItem>
              <ListItem>Establece como predeterminada la dirección que prefieras.</ListItem>
              <ListItem>Añade tu nueva identidad "curs-gmail@uji.es".</ListItem>
              <ListItem>Elimina aquellas identidades que ya no necesites</ListItem>
            </List>
            <Text>No tengas miedo en probar, ya que cualquier fallo que cometamos puede solucionarse.</Text>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.signaturelogo.replace("/", "")} bgDarken={0.1}>
          <Heading textColor="green" size={2} caps fit>
              Firmas
          </Heading>

          <Text cap fit textColor="brown">Pulsa la flecha &rarr;  para continuar...</Text>
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

        <Slide transition={["slide", "spin"]} bgColor="#8CC7DB">
            <Heading size={2} caps fit textColor="tertiary">
                Respuesta automática
            </Heading>

            <Text>Nos permite configurar una respuesta automática cuando vayamos a estar desconectados una temporada.</Text>
            <List bgColor="#AAEDE9" padding="1em" margin="0">
              <ListItem>Accede a la configuración general, la última sección.</ListItem>
              <ListItem>Definimos un período y un mensaje.</ListItem>
              <ListItem>GMail se encarga de gestionar las respuestas.</ListItem>
            </List>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.automatic01.replace("/", "")} bgDarken={0.1} bgColor="white">
            <Text margin="12em 0 0 0" cap fit textColor="brown">Pulsa la flecha &rarr;  para continuar...</Text>
        </Slide>

      </Deck>
    );
  }
}
