import React, { useEffect, useState } from "react";
import styled from "styled-components";
import abtsdk from "@arcblock/bridge";

export default function App() {
  useEffect(() => {});
  const [images, setImages] = useState([]);

  const doShare = () => {
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
	};

  const doShareText = () => {
    abtsdk.shareMessage({
      content: "我是分享文字",
      success: function(result) {
        alert(result);
      },
      fail: function(error) {
        alert(error);
      },
    });
  };

  const showToast = () => {
    abtsdk.showToast("弹出 Toast");
  };

  const checkPasswordIsOk = () => {
    abtsdk.isSetPWD({
      success: function(result) {
        alert(result);
      },
      fail: function(error) {
        alert(error);
      },
    });
  };

  const checkCodeABIsOk = () => {
    abtsdk.isCodeABOk({
      success: function(result) {
        alert(result);
      },
      fail: function(error) {
        alert(error);
      },
    });
  };

  const chooseImages = () => {
    abtsdk.chooseImgs({
      limit: 1,
      success: function(result) {
        alert(result);
        var parseResult = JSON.parse(result);
        setImages(parseResult.data);
      },
      fail: function(error) {
        alert(error);
      },
    });
  };

  const previewImgs = () => {
    abtsdk.previewImgs({
      imgs: [
        "https://www.arcblockio.cn/static/7538def97144ef23c8fd73a29251f29b/38a09/wallet-hero.jpg",
        "https://www.arcblockio.cn/static/706dd75630708b7dea700c622e28e0ca/38a09/cover.jpg",
        "https://www.arcblockio.cn/static/1c920742168959a53968cd129cb5acca/38a09/cover2.jpg",
      ],
    });
	};

  return (
    <Main>
      <p className="section">钱包检测</p>
      <div className="support-item" onClick={checkPasswordIsOk}>
        是否设置了密码
      </div>
      <div className="support-item" onClick={checkCodeABIsOk}>
        是否设置了CodeA+CodeB
      </div>
      <p className="section">开放功能</p>
      <div className="support-item" onClick={doShare}>
        分享图片
      </div>
      <div className="support-item" onClick={doShareText}>
        分享文字
      </div>
      <div className="support-item" onClick={showToast}>
        弹出 Toast
      </div>
      <p className="section">图片相关</p>
      <div className="support-item" onClick={chooseImages}>
        选择图片
      </div>
      {images && images.length > 0 && (
        <div className="images-container">
          {images.map(item => {
            return <img src={`data:image/png;base64,${item.base64}`} alt="" />;
          })}
        </div>
      )}
      <div className="support-item" onClick={previewImgs}>
        预览图片
      </div>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  .title {
    color: #222222;
    font-size: 18px;
    font-weight: bold;
  }
  .section {
    margin: 10px 0 0 0;
    height: 40px;
    line-height: 40px;
    background-color: #e8e8e8;
    padding: 0 8px;
  }
  .support-item {
    background-color: #4e6af6;
    color: #ffffff;
    height: 44px;
    text-align: center;
    line-height: 44px;
    font-size: 16px;
    border-radius: 6px;
    margin-top: 10px;
  }
  .images-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 50%;
			height: auto;
			margin-top: 4px;
    }
  }
`;
