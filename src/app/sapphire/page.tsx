"use client";

import {
  Background,
  Badge,
  Button,
  Column,
  Heading,
  Mask,
  Particle,
  RevealFx,
  Row,
  Text,
} from "@once-ui-system/core";

export default function SapphirePage() {
  return (
    <Column fillWidth center padding="l" gap="128" style={{ minHeight: "100vh" }}>
      <RevealFx position="absolute" fill overflow="hidden">
        <Row position="absolute" fill overflow="hidden">
          <Background
            fill
            data-solid="color"
            style={{ "--brand-solid-strong": "#6a00ff" } as React.CSSProperties}
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
                "--brand-on-background-strong": "#6a00ff",
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
      <Column maxWidth="s" horizontal="center" gap="m" align="center">
        <RevealFx horizontal="center">
          <Row horizontal="around">
            <Badge>
              <Heading variant="display-strong-l">Coming 2026</Heading>
            </Badge>
          </Row>
        </RevealFx>

        <RevealFx horizontal="center" delay={0.2}>
          <Row>
            <Heading variant="display-strong-l">Sapphire Player</Heading>
          </Row>
        </RevealFx>

        <RevealFx horizontal="center" delay={0.4}>
          <Row>
            <Text onBackground="neutral-weak" wrap="balance">
              Sapphire Player is currently archived
              <br />
              It is being rewritten in Next.js and Tauri
            </Text>
          </Row>
        </RevealFx>

        <RevealFx horizontal="center" delay={0.6}>
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
        </RevealFx>
      </Column>
    </Column>
  );
}
