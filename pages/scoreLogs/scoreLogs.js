const api = require('../../api.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    records: null,
    operationType: {
      1: '购买会员卡',
      2: '直推奖',
      3: '团队奖',
      4: '代理分润',
      5: '推荐商家分润'
    }
  },
  getUserPointsLogs() {
    api.user.getUserPointsLogs({
      size: 100,
      current: 1
    }).then(res => {
      if(res.data.code === '0') {
        this.setData({
          records: res.data.data.records
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUserPointsLogs()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})