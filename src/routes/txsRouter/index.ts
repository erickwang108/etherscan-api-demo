import { Request, Response, Router } from 'express';
import { getHtmlContent } from 'utils/request';
import { TARGET_URL } from 'constants/config';
import * as cacheService from 'services/cache';
import { ParseResult, ResponseResult, ResponseCode } from './types';
import parseHtml from './parseHtml';

const router = Router();

router.get('/', async (req: Request, res: Response<ResponseResult>) => {
  const { a: address, p: pager, ...rest } = req.query;

  // check query
  if (!address) {
    return res.json({
      error: 'address is empty, please check your inputs.',
      code: ResponseCode.ERROR_INVALID_PARAMS,
    });
  }

  const url = `${TARGET_URL}?a=${address}&p=${pager}`;
  const cacheData = cacheService.get<ParseResult>(url);

  if (cacheData) {
    return res.json({ data: cacheData, code: ResponseCode.OK });
  }

  try {
    // request html content
    const htmlContent = await getHtmlContent(url, rest);

    // parse and get transaction data grid list
    const resultData = parseHtml(htmlContent);

    // cache data
    cacheService.set(url, resultData);

    return res.json({ data: resultData, code: ResponseCode.OK });
  } catch (error) {
    // console.log(error);
    return res.json({
      error: 'Can not fetch data, please try again.',
      code: ResponseCode.ERROR_INTERNAL,
    });
  }
});

export default router;
