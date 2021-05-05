import React from 'react';
import styled from '@emotion/styled';

import { Flex, IconWrapper } from 'app/components';
import { Order } from 'app/components/Icon/common';

interface Props {
  title: string;
  isSortedDesc: boolean;
}

export function TableHeader(props: Props) {
  const { title, isSortedDesc } = props;
  return (
    <Flex alignItems="baseline">
      <Flex width="max-content" alignItems="center">
        <span>{title}</span>
        <SortIcon icon={Order} size="small" isSortedDesc={isSortedDesc} />
      </Flex>
    </Flex>
  );
}

const SortIcon = styled(IconWrapper)<{ isSortedDesc: boolean }>`
  #order-acs {
    display: ${p => (p.isSortedDesc ? 'none' : 'block')};
  }
  #order-desc {
    display: ${p => (!p.isSortedDesc ? 'none' : 'block')};
  }
`;
