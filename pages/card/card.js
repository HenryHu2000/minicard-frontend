//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    card: {},
    id: '',
    qr_code: {}
  },
  onLoad: function (option) {
    this.setData({
      id: option.id,
      qrcodeUrl: app.globalData.serverURL + "/getcode?id=" + option.id
    });
    wx.request({
      url: app.globalData.serverURL + '/get',
      data: {
        id: this.data.id
      },
      header: { 'content-type': 'application/json' },
      success: res => {
        this.setData({
          card: res.data
        });
      }
    });
  },
  onShareAppMessage: function () {
    return {
      title: 'Share this business card',
      path: 'pages/card/card?id=' + this.data.id
    };
  }
})
