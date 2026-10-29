"use client";

import { Background, Badge, Column, Heading, RevealFx, Row, Text } from "@once-ui-system/core";
import type { CSSProperties } from "react";

export default function KintsugiPage() {
  return (
    <Column fillWidth center padding="l" gap="128" style={{ minHeight: "100vh" }}>
      <RevealFx position="absolute" fill overflow="hidden">
      <Row position="absolute" fill overflow="hidden">
        <Background
          fill
          data-solid="color"
          style={{ "--brand-solid-strong": "#ff3040" } as CSSProperties}
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
              "--brand-on-background-strong": "#ff3040",
            } as CSSProperties
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
              <Heading variant="display-strong-l">Coming 2027</Heading>
            </Badge>
          </Row>
        </RevealFx>

        <RevealFx horizontal="center" delay={0.2}>
          <Row>
            <Heading variant="display-strong-l">Kintsugi</Heading>
          </Row>
        </RevealFx>

        <RevealFx horizontal="center" delay={0.4}>
          <Row>
            <Text onBackground="neutral-weak" wrap="balance">
              A unified game launcher for Linux.
              <br />
              Manage Steam, Epic Games, GOG &amp; more in one native app.
            </Text>
          </Row>
        </RevealFx>
      </Column>
    </Column>
  );
}
