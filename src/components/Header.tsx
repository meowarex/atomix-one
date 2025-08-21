"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Fade, Flex, IconButton, Line, Row, StyleOverlay, ToggleButton } from "@once-ui-system/core";

import { routes, display, person, about, alkaline, ruby, sapphire, amethyst } from "@/resources";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.scss";
import { tidalluna_plugins } from "@/resources/content";
import { berkeleyMono } from "@/resources/berkeley-mono";

type TimeDisplayProps = {
  timeZone: string;
  locale?: string; // Optionally allow locale, defaulting to 'en-GB'
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = "en-GB" }) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      const timeString = new Intl.DateTimeFormat(locale, options).format(now).toLowerCase();
      setCurrentTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return <>{currentTime}</>;
};

export default TimeDisplay;

export const Header = () => {
  const pathname = usePathname() ?? "";

  return (
    <>
      <Fade className="s-flex-hide" fillWidth position="fixed" height="80" zIndex={9} />
      <Fade className="s-flex-show" fillWidth position="fixed" bottom="0" to="top" height="80" zIndex={9} />
      <Flex
        fitHeight
        position="unset"
        className={styles.position}
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
      >
        <Flex paddingLeft="12" fillWidth vertical="center" textVariant="body-default-s">
          {display.location && (
            <Flex
              className={`s-flex-hide ${berkeleyMono.variable}`}
              style={{ fontFamily: "var(--font-berkeley-mono)" }}
            >
              {person.location}
            </Flex>
          )}
        </Flex>
        <Flex fillWidth horizontal="center">
          <Flex
            background="surface"
            border="neutral-alpha-weak"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
            zIndex={1}
          >
            <Flex gap="4" vertical="center" textVariant="body-default-s" suppressHydrationWarning>
              {routes["/"] && (
                <ToggleButton prefixIcon="home" href="/" selected={pathname === "/"} />
              )}
              {routes["/about"] && (
                <ToggleButton
                  className="s-flex-hide"
                  prefixIcon="person"
                  href="/about"
                  selected={pathname === "/about"}
                />
              )}
              <Line background="neutral-alpha-medium" vert maxHeight="24" />
              {routes["/alkaline"] && (
                <ToggleButton
                  className="s-flex-hide"
                  prefixIcon="alkaline"
                  href="/alkaline"
                  label={alkaline.label}
                  selected={pathname.startsWith("/alkaline")}
                />
              )}
              {routes["/ruby"] && (
                <ToggleButton
                  className="s-flex-hide"
                  prefixIcon="ruby"
                  href="/ruby"
                  label={ruby.label}
                  selected={pathname.startsWith("/ruby")}
                />
              )}
              {routes["/sapphire"] && (
                <ToggleButton
                  className="s-flex-hide"
                  prefixIcon="sapphire"
                  href="/sapphire"
                  label={sapphire.label}
                  selected={pathname.startsWith("/sapphire")}
                />
              )}
              {routes["/tidalluna-plugins"] && (
                <ToggleButton
                  className="s-flex-hide"
                  prefixIcon="tidalluna"
                  href="/tidalluna-plugins"
                  label={tidalluna_plugins.label}
                  selected={pathname.startsWith("/tidalluna-plugins")}
                />
              )}
              {display.themeSwitcher && (
                <>
                  <Line background="neutral-alpha-medium" vert maxHeight="24" />
                  <ThemeToggle />
                </>
              )}
            </Flex>
          </Flex>
        </Flex>
        <Flex fillWidth horizontal="end" vertical="center">
          <Flex
            paddingRight="12"
            horizontal="end"
            vertical="center"
            textVariant="body-default-s"
            gap="20"
          >
            <Flex
              className={`s-flex-hide ${berkeleyMono.variable}`}
              style={{ fontFamily: "var(--font-berkeley-mono)" }}
            >
              {display.time && <TimeDisplay timeZone={person.location} />}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};


