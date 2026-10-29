"use client";

import {
  Background,
  Badge,
  Button,
  Column,
  Heading,
  RevealFx,
  Row,
  Text,
} from "@once-ui-system/core";

import { AXON_PINK, AxonWordmark } from "@/components/AxonLogo";

const features = [
  {
    title: "Play anything",
    description:
      "Connect any of your music subscriptions and play them side by side, with global discovery and playlists that span every source.",
  },
  {
    title: "Play it any way",
    description:
      "Node-based audio routing chains let you build and apply DSP effects to anything you play.",
  },
  {
    title: "Play it anywhere",
    description: "Send audio to external players over Chromecast, DLNA, WiiM, LinkPlay and more.",
  },
];

const Features = () => (
  <Column fillWidth maxWidth={56} gap="24" horizontal="center">
    <Text variant="heading-strong-l" align="center" wrap="balance">
      A desktop music player for all of your streaming services, with custom audio processing and
      playback to any device.
    </Text>
    <Row fillWidth gap="16" s={{ direction: "column" }}>
      {features.map((feature) => (
        <Column
          key={feature.title}
          flex={1}
          gap="8"
          padding="24"
          radius="l"
          border="neutral-alpha-weak"
          background="neutral-alpha-weak"
          align="left"
        >
          <Text variant="heading-strong-s">{feature.title}</Text>
          <Text variant="body-default-s" onBackground="neutral-weak">
            {feature.description}
          </Text>
        </Column>
      ))}
    </Row>
  </Column>
);

export default function AxonPage() {
  return (
    <Column fillWidth center padding="l" gap="128" style={{ minHeight: "100vh" }}>
      <RevealFx position="absolute" fill overflow="hidden">
        <Row position="absolute" fill overflow="hidden">
          <Background
            fill
            data-solid="color"
            style={{ "--brand-solid-strong": AXON_PINK } as React.CSSProperties}
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
            style={
              {
                filter: "blur(1rem)",
                transform: "scale(1.1)",
                "--brand-on-background-strong": AXON_PINK,
              } as React.CSSProperties
            }
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
        </Row>
      </RevealFx>
      <Column maxWidth="m" horizontal="center" gap="m" align="center">
        <RevealFx horizontal="center">
          <Row horizontal="around">
            <Badge>
              <Heading variant="display-strong-l">Coming 2027</Heading>
            </Badge>
          </Row>
        </RevealFx>

        <RevealFx horizontal="center" delay={0.2}>
          <Row onBackground="neutral-strong">
            <AxonWordmark style={{ width: "min(24rem, 80vw)", height: "auto" }} />
          </Row>
        </RevealFx>

        <RevealFx horizontal="center" delay={0.4}>
          <Row>
            <Text onBackground="neutral-weak" wrap="balance">
              Axon is being written in Rust!
            </Text>
          </Row>
        </RevealFx>

        <RevealFx horizontal="center" delay={0.6}>
          <Features />
        </RevealFx>

        {/* <RevealFx horizontal="center" delay={0.6}>
          <Row>
            <Row data-accent="orange">
              <Button
                id="forgejo"
                href="https://git.atomix.one/meoware.exe/Sapphire-Player"
                data-border="rounded"
                weight="default"
                prefixIcon="forgejo"
                data-accent="orange"
                arrowIcon
              >
                Forgejo
              </Button>
            </Row>
            <Row marginLeft="m">
              <Button
                id="github"
                href="https://github.com/meowarex/Sapphire-Player"
                data-border="rounded"
                weight="default"
                prefixIcon="github"
                arrowIcon
              >
                Repository
              </Button>
            </Row>
          </Row>
        </RevealFx> */}
      </Column>
    </Column>
  );
}
