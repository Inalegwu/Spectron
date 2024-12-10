'use client';
import { Icon } from '@/components';
import { Code, Flex, Text } from '@radix-ui/themes';
import Link from 'next/link';

export default function Home() {
  return (
    <Flex width="100%" align="center" justify="center" className="h-screen">
      <Flex
        className="bg-neutral-100/20 backdrop-blur-lg rounded-md w-2/6 h-4/6 border-[1px] border-solid border-neutral-200 shadow-md px-3 py-2"
        direction="column"
        align="start"
        justify="center"
        gap="3"
      >
        <Flex width="100%" direction="column">
          <Text size="8" weight="medium" className="font-bricolage">
            Spectron
          </Text>
          <Text size="4" weight="regular" color="gray">
            Starting Building Faster
          </Text>
        </Flex>
        <Flex width="100%" flexGrow="1" direction="column" align="start">
          <Flex
            direction="column"
            gap="2"
            flexGrow="1"
            align="start"
            justify="start"
          >
            <Text>
              Open <Code>src/app/index.ts</Code> to start building
            </Text>
            <Text>
              <span className="rounded-full bg-neutral-100" />
              Preconfigured Auth with{' '}
              <Link
                target="_blank"
                className="px-1 text-purple-500"
                href="https://better-auth.com"
              >
                Better-Auth
              </Link>
            </Text>
            <Text>
              <span className="rounded-full bg-neutral-100" />
              UI and Styling with
              <Link
                className="text-purple-500 px-1"
                target="_blank"
                href="https://radix-ui.com"
              >
                Radix Themes
              </Link>{' '}
              and{' '}
              <Link
                className="text-purple-500 px-1"
                href="https://tailwindcss.com"
                target="_blank"
              >
                TailwindCSS
              </Link>
            </Text>
          </Flex>
          <Link
            href="https:/github.com/Inalegwu/Spectron"
            target="_blank"
            className="w-full bg-neutral-100 text-neutral-500 border-[1px] border-solid border-neutral-200 px-2 py-2 rounded-md flex items-center justify-center space-x-2"
          >
            <Text>Check it out on Github</Text>
            <Icon name="Github" size={13} />
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
