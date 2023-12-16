import path from 'path';
import { ActionResult, Context, IncomingMessage, handlers } from '@epiijs/server';

export default async function PageHome(message: IncomingMessage, context: Context): Promise<ActionResult> {
  const { url } = message;
  console.log({ url });

  const appConfig = context.getAppConfig();

  await context.useHandler(handlers.staticFiles({
    fileName: 'index.html',
    fileRoot: path.join(appConfig.root, appConfig.dirs.target, appConfig.dirs.client),
    onDispose: () => {
      // logger or performance
      console.log('handler disposed');
    }
  }));
}