import dsbridge from "dsbridge";

const abtsdk = {
  // 基本功能
  shareMessage: function(params) {
    const { content, imgUrl, success, fail } = params;
    dsbridge.call("arcShare", JSON.stringify({ content, imgUrl }), function(result) {
      const parseResult = JSON.parse(result);
      if (parseResult && parseResult.code === 0) {
        if (typeof success === "function") {
          success(result);
        }
      } else {
        if (typeof fail === "function") {
          fail(result);
        }
      }
    });
  },
  showLoading: function() {
    dsbridge.call("arcShowLoading");
  },
  hideLoading: function() {
    dsbridge.call("arcHideLoading");
  },
  showToast: function(msg) {
    if (msg && typeof msg === "string") {
      dsbridge.call("arcToast", msg);
    }
  },
  // 图片功能
  chooseImgs: function(params) {
    const { limit, success, fail } = params;
    dsbridge.call("arcChooseImgs", JSON.stringify({ limit }), function(result) {
      const parseResult = JSON.parse(result);
      if (parseResult && parseResult.code === 0) {
        if (typeof success === "function") {
          success(result);
        }
      } else {
        if (typeof fail === "function") {
          fail(result);
        }
      }
    });
  },
  previewImgs: function(params) {
    const { imgs } = params;
    if (!imgs || imgs.length === 0) {
      return;
    }
    dsbridge.call("arcPreviewImgs", JSON.stringify(params));
  },
  // 钱包功能
  isSetPWD: function(params) {
    const { success, fail } = params;
    dsbridge.call("arcIsSetPWD", "", function(result) {
      const parseResult = JSON.parse(result);
      if (parseResult && parseResult.code === 0) {
        if (typeof success === "function") {
          success(result);
        }
      } else {
        if (typeof fail === "function") {
          fail(result);
        }
      }
    });
  },
  isCodeABOk: function(params) {
    const { success, fail } = params;
    dsbridge.call("arcIsCodeABOk", "", function(result) {
      const parseResult = JSON.parse(result);
      if (parseResult && parseResult.code === 0) {
        if (typeof success === "function") {
          success(result);
        }
      } else {
        if (typeof fail === "function") {
          fail(result);
        }
      }
    });
  },
};

export default abtsdk;
