/**
 *
 * Counter
 *
 */

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { Flex, Button, Link } from 'app/components';

const INITIAL_NUMBER = 0;

export function Counter() {
  const [count, setCount] = useState(INITIAL_NUMBER);

  return (
    <div className="container-fluid mt-3">
      <Helmet>
        <title>Counter</title>
        <meta name="description" content="Description of Counter" />
      </Helmet>
      <Link to="/" color="primaryBlue" fontWeight="bold">
        Return back
      </Link>
      <Flex flexDirection="column" alignItems="center" className="mx-auto mt-3">
        <h1>{count}</h1>
        <Flex mt="m">
          <Button mr="m" bg="primaryBlue" onClick={() => setCount(count + 1)}>
            Increase
          </Button>
          <Button bg="#C20E0E" onClick={() => setCount(INITIAL_NUMBER)}>
            Reset
          </Button>
        </Flex>
      </Flex>
    </div>
  );
}
