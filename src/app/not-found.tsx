import {
  Background,
  Button,
  Column,
  Particle,
  Row,
  Text,
  Heading,
  Card,
  Mask,
  RevealFx,
  GlitchFx,
  LetterFx,
} from "@once-ui-system/core";

export const NotFound: React.FC<React.ComponentProps<typeof Column>> = ({ ...flex }) => {
  return (
    <Column fillWidth center padding="l" gap="128" style={{ minHeight: "100vh" }}>
      <Row position="absolute" fill overflow="hidden">
        <Background
          fill
          data-solid="color"
          gradient={{
            display: true,
            x: 50,
            y: 100,
            width: 100,
            height: 50,
            colorStart: "brand-solid-strong",
            colorEnd: "static-transparent",
          }}
        />
        <Background
          fill
          position="absolute"
          bottom="0"
          left="0"
          style={{ filter: "blur(1rem)", transform: "scale(1.1)" }}
          gradient={{
            display: true,
            x: 50,
            y: 100,
            width: 100,
            height: 30,
            colorStart: "brand-on-background-strong",
            colorEnd: "static-transparent",
          }}
        />
        <Mask position="absolute" top="0" left="0" x={50} y={50} radius={100}>
          <Particle
            opacity={70}
            fill
            interactive
            speed={1}
            size="2"
            density={100}
            interactionRadius={40}
            pointerEvents="none"
          />
        </Mask>
      </Row>
      <Column gap="32" center>
        <Row position="relative">
          <Card
            radius="m"
            gap="32"
            center
            vertical="center"
            horizontal="center"
            shadow="xl"
            padding="32"
            style={{ pointerEvents: "none", width: "232px" }}
            background="surface"
          >
            <Column horizontal="center" maxWidth="xs" gap="4">
            <Row>
              <GlitchFx>
                <Heading style={{ fontFamily: "var(--font-berkeley-mono)" }}>
                  <LetterFx trigger="instant" speed="slow">
                    404
                  </LetterFx>
                </Heading>
              </GlitchFx>
            </Row>
            <Row marginTop="16">
              <Text
                variant="body-default-s"
                wrap="balance"
                marginBottom="l"
                onBackground="neutral-medium"
                style={{ fontFamily: "var(--font-berkeley-mono)" }}
              >
                <LetterFx trigger="instant" speed="slow">
                  Page not found!
                </LetterFx>
              </Text>
            </Row>
            </Column>
          </Card>
          <Row
            position="absolute"
            style={{ left: 0, right: 0, bottom: 19 }}
            horizontal="center"
          >
            <RevealFx delay={1} translateY={1} center>
              <Button
                id="home"
                href="/"
                data-border="rounded"
                weight="default"
                prefixIcon="home"
                arrowIcon
              >
                Go Home
              </Button>
            </RevealFx>
          </Row>
        </Row>
      </Column>
    </Column>
  );
};
export default NotFound;
