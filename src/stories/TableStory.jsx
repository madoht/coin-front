import React from 'react';
import { storiesOf } from '@storybook/react';

import Table from '../ui/Table';
import TableHead from '../ui/TableHead';
import TableBody from '../ui/TableBody';
import TabelRow from '../ui/TableRow';

storiesOf('UI/Table', module).addWithJSX('Table 예제', () => (
  <Table>
    <TableHead>
      <TabelRow>
        <TableCell align="left">코인</TableCell>
        <TableCell align="center">시가 총액</TableCell>
        <TableCell align="center">현재 시세</TableCell>
        <TableCell align="right">거래 시간</TableCell>
      </TabelRow>
    </TableHead>
    <TableBody>
      <TabelRow>
        <TableCell>비트코인(BTX)</TableCell>
        <TableCell align="center">132,123,000,000원</TableCell>
        <TableCell align="center">4,200,000원</TableCell>
        <TableCell align="right">2019/01/20 08:23:22</TableCell>
      </TabelRow>
      <TabelRow>
        <TableCell>이오스(EOS)</TableCell>
        <TableCell align="center">2,472,589,314,588원</TableCell>
        <TableCell align="center">2,637.56원</TableCell>
        <TableCell align="right">2019/01/19 08:23:22</TableCell>
      </TabelRow>
    </TableBody>
  </Table>
));
