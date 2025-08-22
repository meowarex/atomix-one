"use client";

import { Background, Badge, Column, Heading, Row, Tag, Text } from "@once-ui-system/core";

export default function AlkalinePage() {
  return (
    <Column fillWidth center padding="l" gap="128" style={{ minHeight: "100vh" }}>
      <Row position="absolute" fill overflow="hidden">
        <Background
          fill
          data-solid="color"
          style={{ "--brand-solid-strong": "#de008e" } as React.CSSProperties}
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
              "--brand-on-background-strong": "#de008e",
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
            <Heading variant="display-strong-l">Coming 2026</Heading>
          </Badge>
        </Row>
        <Heading variant="display-strong-l">Alkaline</Heading>
        <Text onBackground="neutral-weak" wrap="balance">
          Alkaline is being rewritten in WinUI3
          <br />
          due to the deprecation of the WPF UI Framework.
        </Text>
      </Column>
    </Column>
  );
}
