/**
 *
 * Home
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';

import { Box, Flex, Link } from 'app/components';

export function Home() {
  return (
    <div className="mx-3 mt-3">
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Description of Home" />
      </Helmet>
      <Flex alignItems="center" width="100%">
        <Link to="/counter" fontWeight="bold" mr="50px" width="50%">
          <Box
            height="200px"
            className="d-flex align-items-center justify-content-center"
          >
            Counter
          </Box>
        </Link>

        <Link to="/employee" fontWeight="bold" width="50%">
          <Box
            height="200px"
            className="d-flex align-items-center justify-content-center"
          >
            Employee
          </Box>
        </Link>
      </Flex>
    </div>
  );
}
