import { Anchor, Paragraph, Separator, YStack, VisuallyHidden } from '@my/ui'
import React from 'react'

export function HomeScreen() {
  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      <YStack space="$4" maw={600}>
        <Paragraph ta="center">
          There is a VisuallyHidden link in between the 2 separators below:
        </Paragraph>

        <Separator borderColor="$color12" />

        <VisuallyHidden pointerEvents='auto'>
          <Anchor
            href="https://github.com/tamagui/tamagui"
            target="_blank"
            rel="noreferrer"
          >
            Visit Tamagui on Github
          </Anchor>
        </VisuallyHidden>

        <Separator borderColor="$color12" />

        <Paragraph ta="center">
          I love Tamagui, 
          <Anchor
            color="$color12"
            href="https://github.com/tamagui/tamagui"
            target="_blank"
            rel="noreferrer"
          >
            give it a star
          </Anchor>
          .
        </Paragraph>
      </YStack>
    </YStack>
  )
}
