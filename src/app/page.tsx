"use client";

import {
  Text,
  Button,
  Column,
  Badge,
  LetterFx,
  Row,
  Card,
  Flex,
  Tag,
  Icon,
  Background,
  Heading,
  RevealFx,
  TiltFx,
  HoloFx,
} from "@once-ui-system/core";
import { style } from "@/resources";
import { berkeleyMono } from "@/resources/berkeley-mono";
import type { CSSProperties, ComponentProps } from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Footer } from "@/components/Footer";

const cssVars = (vars: Record<string, string>): CSSProperties => vars as unknown as CSSProperties;
const gradientText: CSSProperties = {
  backgroundImage: "linear-gradient(120deg, var(--accent-alpha-strong), var(--brand-alpha-medium))",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  color: "transparent",
};

export default function Home() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [isFirefox, setIsFirefox] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (typeof navigator !== "undefined") {
      setIsFirefox(/firefox/i.test(navigator.userAgent));
    }
  }, []);

  type RevealFxProps = ComponentProps<typeof RevealFx>;
  const MaybeRevealFx = ({ children, ...rest }: RevealFxProps) => {
    if (!isMounted || isFirefox) {
      return <>{children}</>;
    }
    return <RevealFx {...rest}>{children}</RevealFx>;
  };
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
      <Column maxWidth="m" horizontal="center" gap="l" align="center">
        <HoloFx
          radius="xl"
          shine={{ opacity: 30, blending: "color-dodge" }}
          burn={{ opacity: 30, blending: "color-dodge" }}
          texture={{
            opacity: 30,
            blending: "color-dodge",
            image: //https://www.w3.org/2000/svg that somehow = a graidient..
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\"), linear-gradient(135deg, #ff1493 0%, #c71585 100%)",
          }}
        >
          <Badge
            effect={false} // Disable the shimmer effect
            textVariant="code-default-s"
            border="neutral-alpha-medium"
            onBackground="neutral-medium"
            vertical="center"
            gap="0"
          >
            <Icon name="atomix" size="xs" />
            <Text marginLeft="8">
              <LetterFx trigger="instant" speed="medium">
                Where would you like to go?
              </LetterFx>
            </Text>
          </Badge>
        </HoloFx>
        <MaybeRevealFx>
          <Column fillWidth gap="16">
            <Row fillWidth gap="16" s={{ direction: "column" }}>
              <Flex flex={3}>
                <TiltFx fillWidth radius="l">
                  <Card
                    onClick={() => {
                      router.push("/alkaline");
                    }}
                    style={{ cursor: "pointer" }}
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
                      style={cssVars({ "--brand-background-strong": "#de008e" })}
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
                      <Tag
                        position="absolute"
                        top="8"
                        right="8"
                        paddingX="8"
                        paddingY="4"
                        radius="m"
                      >
                        <Text
                          variant="code-default-s"
                          className={berkeleyMono.variable}
                          style={{ fontFamily: "var(--font-berkeley-mono)" }}
                        >
                          Windows
                        </Text>
                      </Tag>

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
                      <Column fillWidth gap="12">
                        <Row>
                          <Text
                            as="strong"
                            variant="heading-strong-m"
                            className={berkeleyMono.variable}
                            style={{ fontFamily: "var(--font-berkeley-mono)" }}
                          >
                            Windows Toolkit For Windows 10/11
                          </Text>
                        </Row>
                        <Column gap="0">
                          <Text onBackground="neutral-weak" variant="code-default-m">
                            {"// Tweak registry settings to unlock features"}
                          </Text>
                          <Text onBackground="neutral-weak" variant="code-default-m">
                            {"// Bulk application installer/updater"}
                          </Text>
                          <Text onBackground="neutral-weak" variant="code-default-m">
                            {"// Highly customizable user interface"}
                          </Text>
                        </Column>
                      </Column>
                    </Flex>
                  </Card>
                </TiltFx>
              </Flex>
              <Flex flex={3}>
                <TiltFx fillWidth radius="l">
                  <Card
                    onClick={() => {
                      router.push("/sapphire");
                    }}
                    style={{ cursor: "pointer" }}
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
                      style={cssVars({ "--brand-background-strong": "#6a00ff" })}
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
                      <Tag
                        position="absolute"
                        top="8"
                        right="8"
                        paddingX="8"
                        paddingY="4"
                        radius="m"
                      >
                        <Text
                          variant="code-default-s"
                          className={berkeleyMono.variable}
                          style={{ fontFamily: "var(--font-berkeley-mono)" }}
                        >
                          Win | Mac | Linux
                        </Text>
                      </Tag>
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
                      <Column fillWidth gap="12">
                        <Row>
                          <Text
                            variant="heading-strong-m"
                            className={berkeleyMono.variable}
                            style={{ fontFamily: "var(--font-berkeley-mono)" }}
                          >
                            Music Player Built in Electron
                          </Text>
                        </Row>
                        <Column gap="0">
                          <Text onBackground="neutral-weak" variant="code-default-m">
                            {"// Node based audio routing engine"}
                          </Text>
                          <Text onBackground="neutral-weak" variant="code-default-m">
                            {"// Highly customizable modern user interface"}
                          </Text>
                          <Text onBackground="neutral-weak" variant="code-default-m">
                            {"// Lossless Quality playback (24-bit/192kHz)"}
                          </Text>
                        </Column>
                      </Column>
                    </Flex>
                  </Card>
                </TiltFx>
              </Flex>
            </Row>
            <Row fillWidth gap="16" s={{ direction: "column" }}>
              <Flex flex={3}>
                <TiltFx fillWidth radius="l">
                  <Card
                    onClick={() => {
                      router.push("/ruby");
                    }}
                    style={{ cursor: "pointer" }}
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
                      style={cssVars({ "--brand-background-strong": "#ff3040" })}
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
                      <Tag
                        position="absolute"
                        top="8"
                        right="8"
                        paddingX="8"
                        paddingY="4"
                        radius="m"
                      >
                        <Text
                          variant="code-default-s"
                          className={berkeleyMono.variable}
                          style={{ fontFamily: "var(--font-berkeley-mono)" }}
                        >
                          Win | Mac | Linux
                        </Text>
                      </Tag>
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
                      <Column fillWidth gap="12">
                        <Row>
                          <Text
                            variant="heading-strong-m"
                            className={berkeleyMono.variable}
                            style={{ fontFamily: "var(--font-berkeley-mono)" }}
                          >
                            Beautiful Torrent Client/Server
                          </Text>
                        </Row>
                        <Column gap="0">
                          <Text onBackground="neutral-weak" variant="code-default-m">
                            {"// Torrent multiple streams at once"}
                          </Text>
                          <Text onBackground="neutral-weak" variant="code-default-m">
                            {"// Super easy to use/setup"}
                          </Text>
                          <Text onBackground="neutral-weak" variant="code-default-m">
                            {"// Support for remote storage locations"}
                          </Text>
                        </Column>
                      </Column>
                    </Flex>
                  </Card>
                </TiltFx>
              </Flex>
              <Flex flex={3}>
                <TiltFx fillWidth radius="l">
                  <Card
                    onClick={() => {
                      router.push("/tidalluna-plugins");
                    }}
                    style={{ cursor: "pointer" }}
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
                      style={cssVars({ "--brand-background-strong": "#9966cc" })}
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
                      <Tag
                        position="absolute"
                        top="8"
                        right="8"
                        paddingX="8"
                        paddingY="4"
                        radius="m"
                      >
                        <Text
                          variant="code-default-s"
                          className={berkeleyMono.variable}
                          style={{ fontFamily: "var(--font-berkeley-mono)" }}
                        >
                          Win | Mac | Linux
                        </Text>
                      </Tag>
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
                          <Icon name="tidalluna" size="xs" paddingTop="2" margin="0" />
                        </Tag>
                        <Text onBackground="neutral-medium" size="m">
                          Tidal Plugins
                        </Text>
                      </Badge>
                      <Column fillWidth gap="16">
                        <Row>
                          <Text
                            variant="heading-strong-m"
                            className={berkeleyMono.variable}
                            style={{ fontFamily: "var(--font-berkeley-mono)" }}
                          >
                            Plugins/Themes For TidalLuna
                          </Text>
                        </Row>
                        <Column gap="0">
                          <Text onBackground="neutral-weak" variant="code-default-m">
                            {"// Completely transform the Tidal UI"}
                          </Text>
                          <Text onBackground="neutral-weak" variant="code-default-m">
                            {"// Custom Themes, animations and effects"}
                          </Text>
                          <Text onBackground="neutral-weak" variant="code-default-m">
                            {"// Settings for almost everything!"}
                          </Text>
                        </Column>
                      </Column>
                    </Flex>
                  </Card>
                </TiltFx>
              </Flex>
            </Row>
          </Column>
        </MaybeRevealFx>
        <RevealFx delay={0.2} translateY={0.5} center>
          <Text
            variant="heading-default-xl"
            onBackground="neutral-weak"
            wrap="balance"
            marginBottom="16"
          >
            More Projects are on GitHub
          </Text>
        </RevealFx>
        <RevealFx delay={0.4} translateY={1} center>
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
        </RevealFx>
      </Column>
    </Column>
  );
}
