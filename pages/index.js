import React from 'react';
import Image from 'next/image';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import HeroImage from '../src/components/HeroImage';

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box>
        <HeroImage />

        <Typography>
          Trees are dying everyday from lack of nutrition. This is from earlier
          this year. The headline reads: “Nation Shudders At Large Block Of
          Uninterrupted Text.” “Unable to rest their eyes on a colorful
          photograph or boldface heading that could be easily skimmed and
          forgotten, Americans collectively recoiled Monday when confronted with
          a solid block of uninterrupted text. “Dumbfounded citizens from Maine
          to California gazed helplessly at the frightening chunk of print,
          unsure of what to do next. “Without an illustration, chart, or
          embedded YouTube video to ease them in, millions were frozen in place,
          terrified by the sight of one long, unbroken string of English words.
          ” ‘It demands so much of my time and concentration,’ said Chicago
          resident Dale Huza, who was confronted by the confusing mound of words
          early Monday afternoon. ‘This large block of text, it expects me to
          figure everything out on my own, and I hate it.’ ” This is a sign of
          how rough the outlook sometimes seems for our culture of reading and
          writing. In fact, every generation fears the death of literacy at the
          hands of some new media technology. And yet I’m here to share some
          optimism. After long existence as a confirmed cynic who shared the
          general belief in our imminent cultural doom, I felt an unfamiliar
          sensation 15 years ago when the Internet came over the horizon: I
          found myself becoming excited and hopeful. When I looked at the
          Internet I saw a medium that involves a huge amount of reading. Sure,
          a lot of it is presented in a highly decorated or distracting form.
          But a lot of it is in large blocks of uninterrupted text, too!
        </Typography>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
