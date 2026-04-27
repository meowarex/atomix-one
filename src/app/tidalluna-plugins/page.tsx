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
  CompareImage,
  Carousel,
  Fade,
  AutoScroll,
  Line,
  SegmentedControl,
} from "@once-ui-system/core";
import Link from "next/link";
import { useState } from "react";

export default function TidalPluginsPage() {
  const [selectedTab, setSelectedTab] = useState("1");

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
              height: 30,
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
              height: 20,
              colorStart: "brand-on-background-strong",
              colorEnd: "static-transparent",
            }}
          />
        </Row>
      </RevealFx>
      <Column maxWidth="l" horizontal="center" gap="m" align="center" marginBottom="xl">
        <RevealFx horizontal="center">
          <Row horizontal="around">
            <Tag>
              <Heading variant="display-strong-l">Page Incomplete</Heading>
            </Tag>
          </Row>
        </RevealFx>

        <RevealFx horizontal="center" delay={0.2}>
          <Row>
            <Heading variant="display-strong-l">Transform Tidal's UI</Heading>
          </Row>
        </RevealFx>

        <RevealFx horizontal="center" delay={0.4}>
          <Row>
            <Text onBackground="neutral-weak" wrap="balance">
              TidaLuna Plugins are available on the GitHub
            </Text>
          </Row>
        </RevealFx>

        <RevealFx horizontal="center" delay={0.6}>
          <Row>
            <Row data-accent="orange">
              <Button
                id="forgejo"
                href="https://git.atomix.one/meoware.exe/TidalLuna-Plugins"
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
                href="https://github.com/meowarex/TidalLuna-Plugins"
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

        <RevealFx>
          <Row fillWidth gap="64" marginTop="64" marginBottom="0" marginLeft="64" marginRight="64">
            <Column fillWidth>
              <Flex
                fillWidth
                style={{
                  maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                }}
              >
                <CompareImage
                  //radius="l"
                  //overflow="hidden"
                  aspectRatio="1087 / 915"
                  leftContent={{
                    src: "/images/products/tidaluna/TidalBeforeLyrics.avif",
                    alt: "Tidal Before",
                  }}
                  rightContent={{
                    src: "/images/products/tidaluna/TidalAfterLyrics.avif",
                    alt: "Tidal After",
                  }}
                />
              </Flex>

              {/* <RevealFx>
                <Row horizontal="center" fillWidth marginTop="xl">
                  <Heading variant="display-strong-m">Plugins</Heading>
                </Row>
              </RevealFx>

              <Flex
                marginTop="m"
                fillWidth
                horizontal="center"
                position="relative"
                zIndex={2}
                style={{ marginBottom: "-24px" }}
              >
                <SegmentedControl
                  background="neutral-weak"
                  fillWidth={false}
                  selected={selectedTab}
                  buttons={[
                    { value: "1", label: "Radiant Lyrics" },
                    { value: "2", label: "Obsidian" },
                    { value: "3", label: "Colorama" },
                    { value: "4", label: "Audio Vizualiser" },
                  ]}
                  onToggle={(value) => setSelectedTab(value)}
                />
              </Flex>

              <div style={{ display: "grid", gridTemplateAreas: "'stack'" }}>
                {[
                  {
                    id: "1",
                    content: (
                      <Card
                        fillWidth
                        padding="40"
                        radius="l"
                        border="neutral-alpha-weak"
                        className="no-hover-card"
                        background="neutral-weak"
                      >
                        <Row fillWidth gap="64" vertical="center">
                          <Column fillWidth flex={5} gap="24" align="start">
                            <Heading variant="display-strong-m">Transform Tidal's UI</Heading>
                            <Column gap="12">
                              <Text>• Dynamic Ambient Cover Art</Text>
                              <Text>• Radiant Animated Lyrics</Text>
                              <Text>• Hide UI Elements for a Better Fullscreen Experience</Text>
                              <Text>• Stylised Floating Playerbar</Text>
                            </Column>
                          </Column>

                          <Column fillWidth flex={5}>
                            <CompareImage
                              //radius="l"
                              //overflow="hidden"
                              aspectRatio="1087 / 915"
                              leftContent={{
                                src: "/images/products/tidaluna/TidalBeforeLyrics.avif",
                                alt: "Tidal Before",
                              }}
                              rightContent={{
                                src: "/images/products/tidaluna/TidalAfterLyrics.avif",
                                alt: "Tidal After",
                              }}
                            />
                          </Column>
                        </Row>
                      </Card>
                    ),
                  },
                  {
                    id: "2",
                    content: (
                      <Card
                        fillWidth
                        padding="40"
                        radius="l"
                        border="neutral-alpha-weak"
                        className="no-hover-card"
                        background="neutral-weak"
                      >
                        <Row fillWidth gap="64" vertical="center">
                          <Column fillWidth flex={5} gap="24" align="start">
                            <Heading variant="display-strong-m">Transform Tidal's UI (2)</Heading>
                            <Column gap="12">
                              <Text>• Dynamic Ambient Cover Art</Text>
                              <Text>• Radiant Animated Lyrics</Text>
                              <Text>• Hide UI Elements for a Better Fullscreen Experience</Text>
                              <Text>• Stylised Floating Playerbar</Text>
                            </Column>
                          </Column>

                          <Column fillWidth flex={5}>
                            <CompareImage
                              //radius="l"
                              //overflow="hidden"
                              aspectRatio="1087 / 915"
                              leftContent={{
                                src: "/images/products/tidaluna/TidalBeforeLyrics.avif",
                                alt: "Tidal Before",
                              }}
                              rightContent={{
                                src: "/images/products/tidaluna/TidalAfterLyrics.avif",
                                alt: "Tidal After",
                              }}
                            />
                          </Column>
                        </Row>
                      </Card>
                    ),
                  },
                  {
                    id: "3",
                    content: (
                      <Card
                        fillWidth
                        padding="40"
                        radius="l"
                        border="neutral-alpha-weak"
                        className="no-hover-card"
                        background="neutral-weak"
                      >
                        <Row fillWidth gap="64" vertical="center">
                          <Column fillWidth flex={5} gap="24" align="start">
                            <Heading variant="display-strong-m">Transform Tidal's UI (3)</Heading>
                            <Column gap="12">
                              <Text>• Dynamic Ambient Cover Art</Text>
                              <Text>• Radiant Animated Lyrics</Text>
                              <Text>• Hide UI Elements for a Better Fullscreen Experience</Text>
                              <Text>• Stylised Floating Playerbar</Text>
                            </Column>
                          </Column>

                          <Column fillWidth flex={5}>
                            <CompareImage
                              //radius="l"
                              //overflow="hidden"
                              aspectRatio="1087 / 915"
                              leftContent={{
                                src: "/images/products/tidaluna/TidalBeforeLyrics.avif",
                                alt: "Tidal Before",
                              }}
                              rightContent={{
                                src: "/images/products/tidaluna/TidalAfterLyrics.avif",
                                alt: "Tidal After",
                              }}
                            />
                          </Column>
                        </Row>
                      </Card>
                    ),
                  },
                  {
                    id: "4",
                    content: (
                      <Card
                        fillWidth
                        padding="40"
                        radius="l"
                        border="neutral-alpha-weak"
                        className="no-hover-card"
                        background="neutral-weak"
                      >
                        <Row fillWidth gap="64" vertical="center">
                          <Column fillWidth flex={5} gap="24" align="start">
                            <Heading variant="display-strong-m">Transform Tidal's UI (4)</Heading>
                            <Column gap="12">
                              <Text>• Dynamic Ambient Cover Art</Text>
                              <Text>• Radiant Animated Lyrics</Text>
                              <Text>• Hide UI Elements for a Better Fullscreen Experience</Text>
                              <Text>• Stylised Floating Playerbar</Text>
                            </Column>
                          </Column>

                          <Column fillWidth flex={5}>
                            <CompareImage
                              //radius="l"
                              //overflow="hidden"
                              aspectRatio="1087 / 915"
                              leftContent={{
                                src: "/images/products/tidaluna/TidalBeforeLyrics.avif",
                                alt: "Tidal Before",
                              }}
                              rightContent={{
                                src: "/images/products/tidaluna/TidalAfterLyrics.avif",
                                alt: "Tidal After",
                              }}
                            />
                          </Column>
                        </Row>
                      </Card>
                    ),
                  },
                ].map((tab) => (
                  <div
                    key={tab.id}
                    style={{
                      gridArea: "stack",
                      opacity: selectedTab === tab.id ? 1 : 0,
                      transition: "opacity 0.3s ease-in-out",
                      pointerEvents: selectedTab === tab.id ? "all" : "none",
                      zIndex: selectedTab === tab.id ? 1 : 0,
                    }}
                  >
                    {tab.content}
                  </div>
                ))}
              </div> */}
            </Column>
          </Row>
        </RevealFx>

        
      </Column>
    </Column>
  );
}
