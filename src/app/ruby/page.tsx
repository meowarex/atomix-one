"use client";

import { Background, Badge, Column, Heading, Row, Text } from "@once-ui-system/core";

export default function RubyPage() {
  return (
    <Column fillWidth center padding="l" gap="128" style={{ minHeight: "100vh" }}>
      <Row position="absolute" fill overflow="hidden">
        <Background
          fill
          data-solid="color"
          style={{ "--brand-solid-strong": "#ff3040" } as React.CSSProperties}
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
      <Column maxWidth="s" horizontal="center" gap="m" align="center">
        <Row horizontal="around">
          <Badge>
            <Heading variant="display-strong-l">Coming 2025</Heading>
          </Badge>
        </Row>
        <Heading variant="display-strong-l">Ruby</Heading>
        <Text onBackground="neutral-weak" wrap="balance">
          Ruby is being written in Next.js and Tauri
          <br />
          It is a work in progress and will be available soon
        </Text>
      </Column>
    </Column>
  );
}
