import React from 'react';
import { storiesOf } from '@storybook/react';

import Text from '../ui/Text';

storiesOf('UI/Text', module).addWithJSX('Text 예제', () => (
  <div>
    <Text xlarge>Xlarge</Text>
    <Text xlarge primary>
      Xlarge
    </Text>
    <Text xlarge secondary>
      Xlarge
    </Text>
    <Text xlarge bold>
      Xlarge
    </Text>
    <Text xlarge light>
      Xlarge
    </Text>
    <br />
    <Text large>Large</Text>
    <Text large primary>
      Large primary
    </Text>
    <Text large secondary>
      Large secondary
    </Text>
    <Text large bold>
      Large bold
    </Text>
    <Text large light>
      Large light
    </Text>
    <br />
    <Text>default</Text>
    <Text primary>default primary</Text>
    <Text secondary>default secondary</Text>
    <Text bold>default bold</Text>
    <Text light>default light</Text>
    <br />
    <Text small>small</Text>
    <Text small primary>
      small primary
    </Text>
    <Text small secondary>
      small secondary
    </Text>
    <Text small bold>
      Large bold
    </Text>
    <Text small light>
      Large light
    </Text>
    <br />

    <Text xsmall>Xsmall</Text>
    <Text xsmall primary>
      Xsmall
    </Text>
    <Text xsmall secondary>
      Xsmall
    </Text>
    <Text xsmall bold>
      Xsmall
    </Text>
    <Text xsmall light>
      Xsmall
    </Text>
    <br />
  </div>
));
