"use client";

import {
  Text,
  Button,
  Column,
  Badge,
  Line,
  LetterFx,
  Row,
  Card,
  Flex,
  Tag,
  Icon,
  Background,
  Heading,
} from "@once-ui-system/core";
import { style } from "@/resources";
import { berkeleyMono } from "@/resources/berkeley-mono";
import type { CSSProperties } from "react";
import Link from "next/link";

const cssVars = (vars: Record<string, string>): CSSProperties => vars as unknown as CSSProperties;
const gradientText: CSSProperties = {
  backgroundImage:
    "linear-gradient(120deg, var(--accent-alpha-strong), var(--brand-alpha-medium))",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  color: "transparent",
};

export default function Home() {
  return (
    <Column fillWidth center padding="l" gap="128" style={{ minHeight: "100vh" }}>
      <Heading variant="display-strong-l">
        <LetterFx
          trigger="instant"
          speed="slow"
          className={berkeleyMono.variable}
          style={{ fontFamily: "var(--font-berkeley-mono)", ...gradientText }}
        >
          &lt;Hello, World/&gt;
        </LetterFx>
      </Heading>
      <Column maxWidth="s" horizontal="center" gap="l" align="center">
        <Badge
          textVariant="code-default-s"
          border="neutral-alpha-medium"
          onBackground="neutral-medium"
          vertical="center"
          gap="0"
        >
          <Line vert background="neutral-alpha-strong" />
          <Text marginX="4">
            <LetterFx trigger="instant" speed="medium">
              Where would you like to go?
            </LetterFx>
          </Text>
        </Badge>
        <Column fillWidth gap="16">
          <Row fillWidth gap="16" s={{ direction: "column" }}>
            <Flex flex={3}>
              <Card
                fillWidth
                padding="0"
                background="surface"
                border="neutral-alpha-weak"
                radius="l-4"
                shadow="l"
                direction="column"
                position="relative"
                overflow="hidden"
              >
                <Background
                  position="absolute"
                  fill
                  fillWidth
                  fillHeight
                  data-brand={style.card1color1}
                  style={cssVars({ '--brand-background-strong': '#de008e' })}
                  gradient={{
                    display: true,
                    opacity: 100,
                    x: 50,
                    y: 0,
                    colorStart: "brand-background-strong",
                    colorEnd: "static-transparent",
                  }}
                  lines={{
                    display: false,
                    opacity: 100,
                    size: "16",
                    thickness: 1,
                    angle: 90,
                    color: "accent-background-strong",
                  }}
                  dots={{
                    display: true,
                    opacity: 100,
                    size: "4",
                    color: "page-background",
                  }}
                />
                <Background
                  position="absolute"
                  fill
                  height={16}
                  gradient={{
                    display: true,
                    opacity: 100,
                    x: 50,
                    y: 100,
                    width: 50,
                    colorStart: "page-background",
                    colorEnd: "static-transparent",
                  }}
                />
                <Flex zIndex={1} padding="20" direction="column">
                  <Badge
                    id="badge-6"
                    marginBottom="16"
                    paddingY="4"
                    paddingLeft="4"
                    paddingRight="16"
                    radius="m"
                    gap="12"
                    textVariant="label-default-s"
                    border="neutral-alpha-medium"
                    onBackground="brand-medium"
                    background="brand-medium"
                  >
                    <Tag>
                      <Icon name="alkaline" size="xs" paddingTop="2" margin="0" />
                    </Tag>
                    <Text onBackground="neutral-medium" size="m">
                      Alkaline
                    </Text>
                  </Badge>
                  <Column fillWidth gap="16">
                    <Row>
                      <Text onBackground="success-medium">Row 1</Text>
                    </Row>
                    <Row>
                      <Text onBackground="success-medium">Row 2</Text>
                    </Row>
                    <Row>
                      <Text onBackground="success-medium">Row 3</Text>
                    </Row>
                  </Column>
                </Flex>
              </Card>
            </Flex>
            <Flex flex={3}>
              <Card
                fillWidth
                padding="0"
                background="surface"
                border="neutral-alpha-weak"
                radius="l-4"
                shadow="l"
                direction="column"
                position="relative"
                overflow="hidden"
              >
                <Background
                  position="absolute"
                  fill
                  fillWidth
                  fillHeight
                  data-brand={style.card2color1}
                  style={cssVars({ '--brand-background-strong': '#ff3040' })}
                  gradient={{
                    display: true,
                    opacity: 100,
                    x: 50,
                    y: 0,
                    colorStart: "brand-background-strong",
                    colorEnd: "static-transparent",
                  }}
                  lines={{
                    display: false,
                    opacity: 100,
                    size: "16",
                    thickness: 1,
                    angle: 90,
                    color: "accent-background-strong",
                  }}
                  dots={{
                    display: true,
                    opacity: 100,
                    size: "4",
                    color: "page-background",
                  }}
                />
                <Background
                  position="absolute"
                  fill
                  height={16}
                  gradient={{
                    display: true,
                    opacity: 100,
                    x: 50,
                    y: 100,
                    width: 50,
                    colorStart: "page-background",
                    colorEnd: "static-transparent",
                  }}
                />
                <Flex zIndex={1} padding="20" direction="column">
                  <Badge
                    id="badge-6"
                    marginBottom="16"
                    paddingY="4"
                    paddingLeft="4"
                    paddingRight="16"
                    radius="m"
                    gap="12"
                    textVariant="label-default-s"
                    border="neutral-alpha-medium"
                    onBackground="brand-medium"
                    background="brand-medium"
                  >
                    <Tag>
                      <Icon name="ruby" size="xs" paddingTop="2" margin="0" />
                    </Tag>
                    <Text onBackground="neutral-medium" size="m">
                      Ruby
                    </Text>
                  </Badge>
                  <Column fillWidth gap="16">
                    <Row>
                      <Text onBackground="success-medium">Row 1</Text>
                    </Row>
                    <Row>
                      <Text onBackground="success-medium">Row 2</Text>
                    </Row>
                    <Row>
                      <Text onBackground="success-medium">Row 3</Text>
                    </Row>
                  </Column>
                </Flex>
              </Card>
            </Flex>
          </Row>
          <Row fillWidth gap="16" s={{ direction: "column" }}>
            <Flex flex={3}>
              <Card
                fillWidth
                padding="0"
                background="surface"
                border="neutral-alpha-weak"
                radius="l-4"
                shadow="l"
                direction="column"
                position="relative"
                overflow="hidden"
              >
                <Background
                  position="absolute"
                  fill
                  fillWidth
                  fillHeight
                  data-brand={style.card3color1}
                  style={cssVars({ '--brand-background-strong': '#6a00ff' })}
                  gradient={{
                    display: true,
                    opacity: 100,
                    x: 50,
                    y: 0,
                    colorStart: "brand-background-strong",
                    colorEnd: "static-transparent",
                  }}
                  lines={{
                    display: false,
                    opacity: 100,
                    size: "16",
                    thickness: 1,
                    angle: 90,
                    color: "accent-background-strong",
                  }}
                  dots={{
                    display: true,
                    opacity: 100,
                    size: "4",
                    color: "page-background",
                  }}
                />
                <Background
                  position="absolute"
                  fill
                  height={16}
                  gradient={{
                    display: true,
                    opacity: 100,
                    x: 50,
                    y: 100,
                    width: 50,
                    colorStart: "page-background",
                    colorEnd: "static-transparent",
                  }}
                />
                <Flex zIndex={1} padding="20" direction="column">
                  <Badge
                    id="badge-6"
                    marginBottom="16"
                    paddingY="4"
                    paddingLeft="4"
                    paddingRight="16"
                    radius="m"
                    gap="12"
                    textVariant="label-default-s"
                    border="neutral-alpha-medium"
                    onBackground="brand-medium"
                    background="brand-medium"
                  >
                    <Tag>
                      <Icon name="sapphire" size="xs" paddingTop="2" margin="0" />
                    </Tag>
                    <Text onBackground="neutral-medium" size="m">
                      Sapphire Player
                    </Text>
                  </Badge>
                  <Column fillWidth gap="16">
                    <Row>
                      <Text onBackground="success-medium">Row 1</Text>
                    </Row>
                    <Row>
                      <Text onBackground="success-medium">Row 2</Text>
                    </Row>
                    <Row>
                      <Text onBackground="success-medium">Row 3</Text>
                    </Row>
                  </Column>
                </Flex>
              </Card>
            </Flex>
            <Flex flex={3}>
              <Card
                fillWidth
                padding="0"
                background="surface"
                border="neutral-alpha-weak"
                radius="l-4"
                shadow="l"
                direction="column"
                position="relative"
                overflow="hidden"
              >
                <Background
                  position="absolute"
                  fill
                  fillWidth
                  fillHeight
                  data-brand={style.card4color1}
                  style={cssVars({ '--brand-background-strong': '#9966cc' })}
                  gradient={{
                    display: true,
                    opacity: 100,
                    x: 50,
                    y: 0,
                    colorStart: "brand-background-strong",
                    colorEnd: "static-transparent",
                  }}
                  lines={{
                    display: false,
                    opacity: 100,
                    size: "16",
                    thickness: 1,
                    angle: 90,
                    color: "accent-background-strong",
                  }}
                  dots={{
                    display: true,
                    opacity: 100,
                    size: "4",
                    color: "page-background",
                  }}
                />
                <Background
                  position="absolute"
                  fill
                  height={16}
                  gradient={{
                    display: true,
                    opacity: 100,
                    x: 50,
                    y: 100,
                    width: 50,
                    colorStart: "page-background",
                    colorEnd: "static-transparent",
                  }}
                />
                <Flex zIndex={1} padding="20" direction="column">
                  <Badge
                    id="badge-6"
                    marginBottom="16"
                    paddingY="4"
                    paddingLeft="4"
                    paddingRight="16"
                    radius="m"
                    gap="12"
                    textVariant="label-default-s"
                    border="accent-medium"
                    onBackground="brand-medium"
                    background="brand-medium"
                  >
                    <Tag>
                      <Icon name="sapphire" size="xs" paddingTop="2" margin="0" />
                    </Tag>
                    <Text onBackground="neutral-medium" size="m">
                      Amethyst
                    </Text>
                  </Badge>
                  <Column fillWidth gap="16">
                    <Row>
                      <Text onBackground="success-medium">Row 1</Text>
                    </Row>
                    <Row>
                      <Text onBackground="success-medium">Row 2</Text>
                    </Row>
                    <Row>
                      <Text onBackground="success-medium">Row 3</Text>
                    </Row>
                  </Column>
                </Flex>
              </Card>
            </Flex>
          </Row>
        </Column>
        <Text
          variant="heading-default-xl"
          onBackground="neutral-weak"
          wrap="balance"
          marginBottom="16"
        >
          More Projects are on GitHub
        </Text>
        <Button
          id="github"
          href="https://github.com/meowarex"
          data-border="rounded"
          weight="default"
          prefixIcon="github"
          arrowIcon
        >
          GitHub
        </Button>
      </Column>
    </Column>
  );
}
