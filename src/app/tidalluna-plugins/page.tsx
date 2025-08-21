"use client";

import { Column, Heading, Text } from "@once-ui-system/core";

export default function TidalPluginsPage() {
  return (
    <Column fillWidth center padding="l" style={{ minHeight: "100vh" }}>
      <Column maxWidth="s" horizontal="center" gap="l" align="center">
        <Heading variant="display-strong-l">Tidal Plugins</Heading>
        <Text onBackground="neutral-weak">This is the Tidal Plugins page.</Text>
      </Column>
    </Column>
  );
}


