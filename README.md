# arc-wallet-js-api

不断完善 js api，使 Dapp 在内置的浏览器中打开之后的体验更加的完善便捷。

## API 列表

### 1. 钱包相关配置检查

#### 1.1 是否设置了密码

**接口名称**: `arcIsSetPWD`

**接口描述**: 用来检查钱包的密码是否完成设置。

**参数**: 无

**返回数据**

```json
{
  "code": 0,
  "msg": "password is been set",
  "data": {
    "isSet": true
  }
}
```

**前端调用示例**

```js
dsbridge.call("arcIsSetPWD", "", function(result) {
 const parseResult = JSON.parse(result);
 // ...
});
```

#### 1.2 是否设置了CodeA+CodeB

**接口名称**: `arcIsCodeABOk`

**接口描述**: 用来检查钱包的 CodeA 和 CodeB 是否配置完毕

**参数**: 无

**返回**

```json
{
  "code": 0,
  "msg": "codeA and codeB is been set",
  "data": {
    "isSet": true
  }
}
```

**前端调用示例**

```js
dsbridge.call("arcIsCodeABOk", "", function(result) {
 const parseResult = JSON.parse(result);
 // ...
});
```

### 2. 原生视图交互

#### 2.1 显示原生 Loading

**接口名称**: `arcShowLoading`

**接口描述**: 用来显示一个原生的 Loading 视图

**参数**: 无

**返回**: 无

**前端调用示例**

```js
dsbridge.call("arcShowLoading");
```

#### 2.2 隐藏原生 Loading

**接口名称**: `arcHideLoading`

**接口描述**: 用来隐藏一个原生的 Loading 视图

**参数**: 无

**返回**: 无

**前端调用示例**

```js
dsbridge.call("arcHideLoading");
```

#### 2.3 显示 Toast

**接口名称**: `arcToast`

**接口描述**: 用来显示一个原生 Toast

**参数**: msg (string)

**返回**: 无

**前端调用示例**

```js
dsbridge.call("arcToast", "msg");
```

#### 2.4 分享图片/文字

**接口名称**: `arcShare`

**接口描述**: 调起原生的分享功能

**参数**:

```json
{
  "content": "分享的文字内容",
  "imgUrl": "分享图片的网络地址"
}
```

**返回**:

```json
{
  "code": 0,
  "msg": "share ok"
}
```

**前端调用示例**

```js
dsbridge.call("arcShare", JSON.stringify({ content, imgUrl }), function(result) {
  const parseResult = JSON.parse(result);
  // ...
});
```

### 3. 钱包图片功能

#### 3.1 选择图片

**接口名称**: `arcChooseImgs`

**接口描述**: 调起原生的选择图片功能

**参数**:

```json
{
  "limit": 1,
}
```

limit 为选择图片的数量的，范围为 [1,9] 

**返回**:

```json
{
  "code": 0,
  "msg": "choose images success",
  "data": [
    {
      "base64": "图片base64内容"
    }
  ]
}
```

**前端调用示例**

```js
dsbridge.call("arcChooseImgs", JSON.stringify({ limit }), function(result) {
 const parseResult = JSON.parse(result);
 // ...
});
```

#### 3.2 图片预览

**接口名称**: `arcPreviewImgs`

**接口描述**: 调起原生的图片预览功能

**参数**:

```json
{
  "imgs": [
    "图片的网络地址1",
    "图片的网络地址2",
    "图片的网络地址3"
  ]
}
```

**返回**: 无

**前端调用示例**

```js
dsbridge.call("arcPreviewImgs", JSON.stringify({ imgs }));
```
