import path from 'path';

import { IMaybeAppConfig } from '@epiijs/config';
import { buildClient } from '@epiijs/client';

const config: IMaybeAppConfig = {
  root: path.join(__dirname, '../'),
  dirs: {
    client: 'client',
    server: 'server'
  }
}

buildClient(config);
