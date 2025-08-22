"use client";

import { Background, Badge, Column, Heading, Mask, Particle, Row, Text } from "@once-ui-system/core";

export default function SapphirePage() {
  return (
    <Column fillWidth center padding="l" gap="128" style={{ minHeight: "100vh" }}>
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
          style={{ filter: "blur(1rem)", transform: "scale(1.1)", "--brand-on-background-strong": "#6a00ff" } as React.CSSProperties}
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
      <Column maxWidth="s" horizontal="center" gap="m" align="center">
        <Row horizontal="around">
          <Badge>
            <Heading variant="display-strong-l">Coming 2026</Heading>
          </Badge>
        </Row>
        <Heading variant="display-strong-l">Sapphire</Heading>
        <Text onBackground="neutral-weak" wrap="balance">
          Sapphire is currently archived
          <br />
          It is being rewritten in Next.js and Tauri
        </Text>
      </Column>
    </Column>
  );
}


