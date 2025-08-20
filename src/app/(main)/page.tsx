"use client";

import { Text, Button, Column, Badge, Line, LetterFx, Row, Card, Flex, Tag, Icon } from "@once-ui-system/core";

export default function Home() {
  return (
    <Column fillWidth center padding="l" style={{ minHeight: "100vh" }}>
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
            <LetterFx trigger="instant" speed="medium">Where would you like to go?</LetterFx>
          </Text>
        </Badge>
        <Column fillWidth gap="16">
          <Row fillWidth gap="16" s={{ direction: "column" }}>
            <Flex flex={3}>
            <Card
                fillWidth
                padding="20"
                background="surface"
                border="neutral-alpha-weak"
                radius="l-4"
                shadow="l"
                direction="column"
              >
                <Badge id="badge-6" marginBottom="16" paddingY="4" paddingLeft="4" paddingRight="16" radius="m" gap="12" textVariant="label-default-s" border="neutral-medium" background="neutral-alpha-weak">
                  <Tag>
                    <Icon name="alkaline" size="xs" paddingTop="2" margin="0"/>
                  </Tag>
                  <Text onBackground="neutral-medium" size="m">Alkaline</Text>
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
              </Card>
            </Flex>
            <Flex flex={2}>
            <Card
                fillWidth
                padding="20"
                background="surface"
                border="neutral-alpha-weak"
                radius="l-4"
                shadow="l"
                direction="column"
              >
                <Badge id="badge-6" marginBottom="16" paddingY="4" paddingLeft="4" paddingRight="16" radius="m" gap="12" textVariant="label-default-s" border="neutral-medium" background="neutral-alpha-weak">
                  <Tag>
                    <Icon name="ruby" size="xs" paddingTop="2" margin="0"/>
                  </Tag>
                  <Text onBackground="neutral-medium" size="m">Ruby</Text>
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
              </Card>
            </Flex>
          </Row>
          <Row fillWidth gap="16" s={{ direction: "column" }}>
            <Flex flex={2}>
            <Card
                fillWidth
                padding="20"
                background="surface"
                border="neutral-alpha-weak"
                radius="l-4"
                shadow="l"
                direction="column"
              >
                <Badge id="badge-6" marginBottom="16" paddingY="4" paddingLeft="4" paddingRight="16" radius="m" gap="12" textVariant="label-default-s" border="neutral-medium" background="neutral-alpha-weak">
                  <Tag>
                    <Icon name="sapphire" size="xs" paddingTop="2" margin="0"/>
                  </Tag>
                  <Text onBackground="neutral-medium" size="m">Sapphire Player</Text>
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
              </Card>
            </Flex>
            <Flex flex={3}>
              <Card
                fillWidth
                padding="20"
                background="surface"
                border="neutral-alpha-weak"
                radius="l-4"
                shadow="l"
                direction="column"
              >
                <Badge id="badge-6" marginBottom="16" paddingY="4" paddingLeft="4" paddingRight="16" radius="m" gap="12" textVariant="label-default-s" border="neutral-medium" background="neutral-alpha-weak">
                  <Tag>
                    <Icon name="sapphire" size="xs" paddingTop="2" margin="0"/>
                  </Tag>
                  <Text onBackground="neutral-medium" size="m">Amethyst</Text>
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
