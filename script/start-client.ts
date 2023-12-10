import path from 'path';

import { IMaybeAppConfig } from '@epiijs/config';
import { startClient } from '@epiijs/client';

const config: IMaybeAppConfig = {
  root: path.join(__dirname, '../'),
  dirs: {
    client: 'client',
    server: 'server'
  },
  port: 4001
}

// 如果 server 需要和 client 混用，需要在 server 自行由业务实现 StaticFiles handler
startClient(config);

// TODO: 判定 phase 或者直接从 cli 识别参数判定是否是 构建指令
// if (process.env.epii_phase === 'build') {
//   buildClient(config);
// }