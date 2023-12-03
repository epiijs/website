import { ActionResult, Context, IncomingMessage } from '@epiijs/server';

export default async function PageHome(message: IncomingMessage, context: Context): Promise<ActionResult> {
  const { url } = message;
  console.log({ url });

  await context.useHandler((dispose) => {
    if (url.includes('home')) {
      return 'home';
    }
    dispose(() => {
      console.log('handler disposed');
    });
  });

  return {
    content: 'epiijs'
  }; 
}