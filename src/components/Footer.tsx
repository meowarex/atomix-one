"use client";

import { Flex, IconButton, SmartLink, Text } from "@once-ui-system/core";
import { person, social } from "@/resources";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialItems = [
    { name: "GitHub", link: social.github, icon: "github" as const },
    { name: "Email", link: social.email ? `mailto:${social.email}` : "", icon: "email" as const },
  ].filter((item) => Boolean(item.link));

  return (
    <Flex as="footer" fillWidth padding="8" horizontal="center">
      <Flex
        className={styles.mobile}
        maxWidth="m"
        paddingY="8"
        paddingX="16"
        gap="16"
        horizontal="between"
        vertical="center"
      >
        <Text variant="body-default-s" onBackground="neutral-strong">
          <Text onBackground="neutral-weak">© {currentYear} /</Text>
          <Text paddingX="4">{person.firstName}</Text>
          <Text onBackground="neutral-weak">
            {/* Usage of this template requires attribution. Please don't remove the link to Once UI. */}
            / No but really, Where do you want to go?{" "}
            <SmartLink
              href="https://atomix.one"
            >
              hehe
            </SmartLink>
          </Text>
        </Text>
        <Flex gap="16">
          {socialItems.map((item) => (
            <IconButton
              key={item.name}
              href={item.link}
              icon={item.icon}
              tooltip={item.name}
              size="s"
              variant="ghost"
            />
          ))}
        </Flex>
      </Flex>
      <Flex height="80" className="s-flex-show" />
    </Flex>
  );
};
