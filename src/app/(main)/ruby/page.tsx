"use client";

import { Column, Heading, Text } from "@once-ui-system/core";

export default function RubyPage() {
  return (
    <Column fillWidth center padding="l" style={{ minHeight: "100vh" }}>
      <Column maxWidth="s" horizontal="center" gap="l" align="center">
        <Heading variant="display-strong-l">Ruby</Heading>
        <Text onBackground="neutral-weak">This is the Ruby page.</Text>
      </Column>
    </Column>
  );
}


