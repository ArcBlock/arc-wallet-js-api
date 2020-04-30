# `@arcblock/bridge` 示例项目

通过 `@arcblock/bridge` 让运行在 ABT 钱包中的应用调用更多的钱包原生功能，从而帮助应用提升交互体验。

## 安装

`npm install @arcblock/bridge`

或者

`yarn add @arcblock/bridge`

## 使用

1. 获取到 `@arcblock/bridge` 对象

```js
import abtsdk from "@arcblock/bridge";
```

2. 通过拿到的对象，调用对应 API，唤起原生功能，示例：

下面的代码通过 `chooseImgs` API, 将会唤起原生的图片选择功能，并返回 base64 格式的图片结果

```js
abtsdk.chooseImgs({
  limit: 1,
  success: function(result) {
    alert(result);
    var parseResult = JSON.parse(result);
    // 拿到图片结果
  },
  fail: function(error) {
    alert(error);
  },
});
```

## 运行项目，体验全部 API

1. clone 代码
2. 项目根目录下安装依赖

  ```
  npm install
  or
  yarn
  ```
3. 依赖安装完成之后，运行项目

  ```
  npm run start
  or
  yarn start
  ```
4. 保持手机和项目的网络在同一个局域网内，用 [二维码生成网站](https://cli.im/) 生成一个本地访问地址的二维码，再用 ABT 钱包扫码即可体验

## 完整 API 列表

### 1. 钱包相关配置检查

#### 1.1 是否设置了密码

**接口名称**: `isSetPWD`

**接口描述**: 用来检查钱包的密码是否完成设置。

**调用示例**:

```js
abtsdk.isSetPWD({
  success: function(result) {
    alert(result);
  },
  fail: function(error) {
    alert(error);
  },
});
```

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

#### 1.2 是否设置了CodeA+CodeB

**接口名称**: `isCodeABOk`

**接口描述**: 用来检查钱包的 CodeA 和 CodeB 是否配置完毕

**调用示例**

```js
abtsdk.isCodeABOk({
  success: function(result) {
    alert(result);
  },
  fail: function(error) {
    alert(error);
  },
});
```

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

### 2. 原生视图交互

#### 2.1 显示原生 Loading

**接口名称**: `showLoading`

**接口描述**: 用来显示一个原生的 Loading 视图

**前端调用示例**

```js
abtsdk.showLoading();
```

#### 2.2 隐藏原生 Loading

**接口名称**: `hideLoading`

**接口描述**: 用来隐藏一个原生的 Loading 视图

**调用示例**

```js
abtsdk.hideLoading();
```

#### 2.3 显示 Toast

**接口名称**: `showToast`

**接口描述**: 用来显示一个原生 Toast

**调用示例**

```js
abtsdk.showToast("弹出 Toast");
```

#### 2.4 分享图片/文字

**接口名称**: `shareMessage`

**接口描述**: 调起原生的分享功能

**调用示例**

```js
abtsdk.shareMessage({
  content: "我是分享的内容",
  imgUrl:
    "https://www.arcblockio.cn/static/ced252cf99aeed1621e576aa2070a97c/533d0/cover.jpg",
  success: function(result) {
    alert(result);
  },
  fail: function(error) {
    alert(error);
  },
});
```

**返回**:

```json
{
  "code": 0,
  "msg": "share ok"
}
```

### 3. 钱包图片功能

#### 3.1 选择图片

**接口名称**: `chooseImgs`

**接口描述**: 调起原生的选择图片功能

**调用示例**

```js
abtsdk.chooseImgs({
  limit: 1, // limit 为选择图片的数量，范围为 [1,9]
  success: function(result) {
    alert(result);
    var parseResult = JSON.parse(result);
    setImages(parseResult.data);
  },
  fail: function(error) {
    alert(error);
  },
});
```

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

#### 3.2 图片预览

**接口名称**: `previewImgs`

**接口描述**: 调起原生的图片预览功能

**调用示例**

```js
abtsdk.previewImgs({
  imgs: [
    "https://www.arcblockio.cn/static/7538def97144ef23c8fd73a29251f29b/38a09/wallet-hero.jpg",
    "https://www.arcblockio.cn/static/706dd75630708b7dea700c622e28e0ca/38a09/cover.jpg",
    "https://www.arcblockio.cn/static/1c920742168959a53968cd129cb5acca/38a09/cover2.jpg",
  ],
});
```
