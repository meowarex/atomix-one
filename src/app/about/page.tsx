"use client";

import {
  Background,
  Button,
  Column,
  Heading,
  RevealFx,
  Row,
  Tag,
  Text,
  Tooltip,
} from "@once-ui-system/core";

export default function AboutPage() {
  return (
    <Column fillWidth center padding="0" gap="128" style={{ minHeight: "100vh" }}>
      <RevealFx position="absolute" fill overflow="hidden">
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
        </Row>
      </RevealFx>
      <Column maxWidth="s" horizontal="center" gap="m" align="center">
        <RevealFx horizontal="center">
          <Row horizontal="around">
            <Tag>
              <Heading variant="display-strong-l">Page Incomplete</Heading>
            </Tag>
          </Row>
        </RevealFx>

        <RevealFx horizontal="center" delay={0.2}>
          <Row>
            <Heading variant="display-strong-l">About Me</Heading>
          </Row>
        </RevealFx>

        <RevealFx horizontal="center" delay={0.4}>
          <Row>
            <Text onBackground="neutral-weak" variant="body-default-l" wrap="balance">
              I'm a <Text variant="code-strong-l" onBackground="accent-weak">Cyber Defense Analyst</Text> and a <Text variant="code-strong-l" onBackground="accent-weak">Software Developer</Text>.
            </Text>
          </Row>
        </RevealFx>
      </Column>
    </Column>
  );
}
