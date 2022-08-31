import * as cheerio from 'cheerio';
import { TABLE_ROWS_SELECTOR, TOTAL_PAGE_SELECTOR } from './const';
import toNumber from 'utils/toNumber';
import { ParseResult } from './types';

function getTotalPage(doc: cheerio.CheerioAPI) {
  const txt = doc(TOTAL_PAGE_SELECTOR).text();
  return toNumber(txt);
}

function getText($: cheerio.CheerioAPI, el: cheerio.AnyNode, selector: string) {
  const txt = $(el).find(selector).text();
  return txt ? txt.trim() : '';
}

export default function parseHtml(html: string): ParseResult {
  const $ = cheerio.load(html);

  // get total page count
  const totalPage = getTotalPage($);

  // get data list
  const list = [];

  $(TABLE_ROWS_SELECTOR).each((_, el) => {
    const blockNumber = getText($, el, 'td:nth-child(4) > a');
    const value = getText($, el, 'td:nth-child(10)');
    const txFee = getText($, el, 'td.showTxnFee > span');
    const txHash = getText($, el, 'td:nth-child(2) > span.hash-tag > a');

    if (txHash && blockNumber) {
      list.push({
        txHash,
        method: getText($, el, 'td:nth-child(3) > span'),
        displayTime: getText($, el, 'td:nth-child(6).showAge > span'),
        time: getText($, el, 'td:nth-child(5).showDate > span'),
        from: getText($, el, 'td:nth-child(7) > span'),
        to: getText($, el, 'td:nth-child(9) > span > a'),
        txFee: toNumber(txFee, false),
        value: toNumber(value, false),
        blockNumber: toNumber(blockNumber),
      });
    }
  });

  return { list, totalPage };
}
