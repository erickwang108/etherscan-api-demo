import parseHtml from '../parseHtml';
import { htmlContent, expectResult } from './mockData/response';

describe('parse html tests', () => {
  it('should get data list', () => {
    const result = parseHtml(htmlContent);
    expect(result).toMatchObject(expectResult);
  });
});
