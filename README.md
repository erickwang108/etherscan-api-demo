## Installation
```bash
$ yarn
```

## Running the app
```bash
# development
$ yarn dev

# production mode
$ yarn build
$ yarn start
```

## Test
```bash
# unit tests
$ yarn test

# test coverage
$ yarn test:coverage
```

## API
#### 抓取并返回给定账户的交易历史
Path: /api/txs?a=0xeb2a81e229b68c1c22b6683275c00945f9872d90&p=1

|query|description|
|---|---|
|a|address|
|p|page No|

```
{
    "data": {
        "list": [
            {
                "txHash": "0xbf2b128cff5682386ff6124e8423208c5c48525f413902ead75c0f556e881763",
                "method": "Multicall",
                "displayTime": "108 days 21 hrs ago",
                "time": "2022-05-15 1:33:13",
                "from": "0xeb2a81e229b68c1c22b6683275c00945f9872d90",
                "to": "Uniswap V3: Router 2",
                "txFee": 0.00685354,
                "value": 0.75,
                "blockNumber": 14777116
            }
        ],
        "totalPage": 31 // 总页码数
    },
    "code": 1000 // 1000: success, 2000: internal error, 2001: invalid query
}
```
