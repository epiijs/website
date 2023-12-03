import { ActionResult, IncomingMessage } from '@epiijs/server';

export default async function PageDocs(message: IncomingMessage): Promise<ActionResult> {
  const { url, method, params } = message;
  return {
    content: JSON.stringify({ 
      text: 'docs for epiijs',
      args: params
    })
  }; 
}
