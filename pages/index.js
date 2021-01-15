import React from 'react';
import Image from 'next/image';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <Image
          src="/clearing-overhead-trees.jpg"
          alt="overhead camera shot of trees in a forest"
          layout="fixed"
          height="200"
          width="200"
        />
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
