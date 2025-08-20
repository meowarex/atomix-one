"use client";

import { Column, Heading, Text } from "@once-ui-system/core";

export default function SapphirePage() {
  return (
    <Column fillWidth center padding="l" style={{ minHeight: "100vh" }}>
      <Column maxWidth="s" horizontal="center" gap="l" align="center">
        <Heading variant="display-strong-l">Sapphire</Heading>
        <Text onBackground="neutral-weak">This is the Sapphire page.</Text>
      </Column>
    </Column>
  );
}


