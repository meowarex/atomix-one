"use client";

import {
  Background,
  Card,
  Column,
  Heading,
  Row,
  Media,
  Flex,
  Tag,
  Badge,
  Text,
  Button,
  RevealFx,
  Icon,
} from "@once-ui-system/core";
import Link from "next/link";

export default function TidalPluginsPage() {
  return (
    <Column fillWidth center padding="0" gap="128" style={{ minHeight: "100vh" }}>
      <RevealFx position="absolute" fill overflow="hidden">
      <Row position="absolute" fill overflow="hidden">
        <Background
          fill
          data-solid="color"
          style={{ "--brand-solid-strong": "#9966cc" } as React.CSSProperties}
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
              "--brand-on-background-strong": "#9966cc",
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
            <Tag>
              <Heading variant="display-strong-l">Page Incomplete</Heading>
            </Tag>
          </Row>
        </RevealFx>

        <RevealFx horizontal="center" delay={0.2}>
          <Row>
            <Heading variant="display-strong-l">TidalLuna Plugins</Heading>
          </Row>
        </RevealFx>

        <RevealFx horizontal="center" delay={0.4}>
          <Row>
            <Text onBackground="neutral-weak" wrap="balance">
              TidalLuna Plugins are available on the GitHub
            </Text>
          </Row>
        </RevealFx>

        <RevealFx horizontal="center" delay={0.6}>
          <Row>
            <Button
              id="github"
              href="https://github.com/meowarex/TidalLuna-Plugins"
              data-border="rounded"
              weight="default"
              prefixIcon="github"
              arrowIcon
            >
              Repository
            </Button>
          </Row>
        </RevealFx>
      </Column>
    </Column>
  );
}
