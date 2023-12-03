export interface IDataService {
  findData(key: string): { key: string, value: string } | undefined;
}

export default function createDataService() {
  const data = [{
    key: 'test1', value: 'hello world'
  }];
  
  return {
    findData: (key: string) => {
      return data.find(e => e.key === key);
    },

    dispose: () => {
      console.log('dispose data service');
    }
  };
}