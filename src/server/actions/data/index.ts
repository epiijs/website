import { ActionResult, Context, IncomingMessage } from '@epiijs/server';

import { IDataService } from '../../services/data';

export default async function PageData(message: IncomingMessage, context: Context): Promise<ActionResult> {
  const { url, method, params } = message;

  const dataService = context.useService<IDataService>('data');
  return {
    content: JSON.stringify(dataService.findData('test1'), null, 2)
  }; 
}
