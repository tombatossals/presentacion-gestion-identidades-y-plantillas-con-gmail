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
    labs: require("./images/labs.png"),
    labs01: require("./images/labs01.png"),
    labs02: require("./images/labs02.png"),
    labs03: require("./images/labs03.png"),
    templatesLogo: require("./images/templates-logo.jpg"),
    templates01: require("./images/templates01.png"),
    templates02: require("./images/templates02.png")
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
          <Image src={images.gmail_logo.replace("/", "")} width="128px" height="128px" />
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
            <Heading margin="4em 0 0 0" size={2} caps fit textColor="brown">
                Gestión de identidades
            </Heading>
            <Text textColor="black">Pulsa la flecha &rarr;  para continuar...</Text>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.templates01.replace("/", "")} bgDarken={0.1}>
            <Heading margin="4em 0 0 0" size={2} caps fit textColor="#E67819">
                Gestión de plantillas
            </Heading>
            <Text textColor="grey">Pulsa la flecha &rarr;  para continuar...</Text>
        </Slide>

        <Slide transition={["slide"]} bgColor="#8EDE9A">
            <Heading size={2} caps fit textColor="black">
                Ejemplo de funcionamiento
            </Heading>

            <Text textSize="2em" padding="1em" bgColor="#7ABF85">Vamos a hacer una demostración, enviadme 3 o 4 de vosotros/as un correo a la dirección de correo que véis más abajo preguntando por "el estado de vuestra solicitud de admisión al curso".</Text>
            <Text><Link href="mailto:david.rubert@uji.es">david.rubert@uji.es</Link></Text>
        </Slide>

        <Slide transition={["slide"]} bgColor="red">
            <Heading size={2} caps fit textColor="white">
                Direcciones de correo impersonales
            </Heading>
            <Text>¿De dónde salen y cómo puedo solicitar una?</Text>
            <List textColor="yellow" bgColor="brown" padding="1em" margin="0 5em">
              <ListItem>Alias de correo</ListItem>
              <ListItem>Lista de correo</ListItem>
            </List>
            <Text>SPI en e-ujier</Text>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Heading caps fit>Plantillas prediseñadas</Heading>
          <Layout>
            <Fill>
              <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                1. Activación
              </Heading>
            </Fill>
            <Fill>
              <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                2. Uso
              </Heading>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.labs.replace("/", "")} bgDarken="0.6">
            <Appear fid="1">
              <Heading size={1} caps fit textColor="white">
                Utilidad
              </Heading>
            </Appear>
            <List textColor="yellow">
              <ListItem><Appear fid="2">Funciones adicionales, no activadas por defecto</Appear></ListItem>
              <ListItem><Appear fid="3">Si mucha gente las utiliza, las activan para todos</Appear></ListItem>
              <ListItem><Appear fid="4">Las plantillas de respuesta predefinida están incluidas aquí</Appear></ListItem>
            </List>
            <Text textColor="white">Pulsa la flecha &rarr;  para continuar...</Text>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.labs01.replace("/", "")} bgDarken={0.1} bgColor="white">
            <Text margin="12em 0 0 0" cap fit textColor="brown">Pulsa la flecha &rarr;  para continuar...</Text>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.labs02.replace("/", "")} bgDarken={0.1}>
            <Text margin="12em 0 0 0" cap fit textColor="#697023">Pulsa la flecha &rarr;  para continuar...</Text>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.labs03.replace("/", "")} bgDarken={0.1}>
            <Text margin="12em 0 0 0" cap fit textColor="#952044">Pulsa la flecha &rarr;  para continuar...</Text>
        </Slide>

        <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading size={2} caps fit textColor="tertiary">
                Ejercicio
            </Heading>

            <Text textSize="2em" padding="1em" bgColor="#F8D12C">Entra en tu cuenta de correo electrónico de Gmail de la UJI, accede a las opciones de configuración, pestaña de Labs, y activa las Respuestas Predefinidas. ¿Hay alguna otra utilidad que consideres interesante?</Text>
            <Text><Link href="http://gmail.uji.es">http://gmail.uji.es</Link></Text>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.templatesLogo.replace("/", "")} bgDarken={0.1}>
            <Text margin="12em 0 0 0" cap fit textColor="#697023">Pulsa la flecha &rarr;  para continuar...</Text>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="#F2E9D9">
          <Heading caps fit textColor="brown">Gestión de Plantillas</Heading>
          <Layout>
            <Fill>
              <Heading size={4} caps textColor="secondary" bgColor="#D8D6B3" margin={10}>
                Insertar
              </Heading>
            </Fill>
            <Fill>
              <Heading size={4} caps textColor="secondary" bgColor="#C6B893" margin={10}>
                Guardar
              </Heading>
            </Fill>
            <Fill>
              <Heading size={4} caps textColor="secondary" bgColor="#847D7C" margin={10}>
                Borrar
              </Heading>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.templates02.replace("/", "")} bgDarken={0.1}>
            <Text margin="12em 0 0 0" textColor="grey">Pulsa la flecha &rarr;  para continuar...</Text>
        </Slide>

        <Slide transition={["slide", "spin"]}>
            <Heading size={2} caps fit textColor="tertiary">
                Creación de una plantilla
            </Heading>

            <Text textSize="2em">Redacta el siguiente texto en un nuevo correo, pero no lo envíes:</Text>
            <Text padding=".5em" bgColor="#F4CD1C">La teva preinscripció al curs de Formació del PAS: "Curs d'anglès B1.2 Intermediate" ha estat autoritzada pel teu cap de servei o director/a de departament.
Prèviament al inici del curs rebràs un mail informant-te sobre la teva admissió o no al curs.</Text>
            <Text>Finalmente, guárdalo como plantilla</Text>
        </Slide>

        <Slide transition={["slide", "spin"]} bgColor="#DB2464">
            <Heading size={2} caps fit textColor="black">
                Respuesta con plantilla
            </Heading>

            <Text padding="1em" textColor="white" bgColor="#A31A48">Os voy a enviar un correo al álias curs-gmail@uji.es, respóndeme con la plantilla que hemos creado previamente.</Text>
            <Text>Esta vez, envíalo y veremos como recibo las respuestas</Text>

        </Slide>

        <Slide transition={["slide", "spin"]} bgColor="#49AEC0">
            <Heading size={2} caps fit textColor="black">
                Borrado de plantillas
            </Heading>

            <Text padding="1em" textColor="white" bgColor="#131723">Finalmente, vamos a borrar la plantilla que habíamos creado ya que no la vamos a necesitar más.</Text>
            <Text>Fácil, ¿no?</Text>

        </Slide>

      </Deck>
    );
  }
}
