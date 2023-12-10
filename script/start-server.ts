import path from 'path';

import { IMaybeAppConfig } from '@epiijs/config';
import { startServer } from '@epiijs/server';

const config: IMaybeAppConfig = {
  root: path.join(__dirname, '../'),
  dirs: {
    client: 'client',
    server: 'server'
  },
  port: 4001
}

// startServer 直接从 build 启动服务
// 如果实现 buildServer 会导致目录被合并、文件系统路由信息会丢失，所以需要自动生成显式路由表描述文件
// 如果 server 需要和 client 混用，需要在 server 自行由业务实现 StaticFiles handler
startServer(config);

// TODO: 判定 phase 或者直接从 cli 识别参数判定是否是 构建指令
// if (process.env.epii_phase === 'build') {
//   buildClient(config);
// }