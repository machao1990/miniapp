const api = require('../../api.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    records: null,
    info: null
  },
  getUserOrderInfo() {
    api.user.getUserOrderInfo().then(res => {
      if(res.data.code === '0') {
        this.setData({
          info: res.data.data
        })
      }
      wx.stopPullDownRefresh()
    })
  },
  getUserOrders() {
    api.user.getUserOrders({
      current: 1,
      size: 100
    }).then(res => {
      if(res.data.code === '0') {
        this.setData({
          records: res.data.data.records
        })
      }
      wx.stopPullDownRefresh()
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUserOrders()
    this.getUserOrderInfo()
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
    this.getUserOrderInfo()
    this.getUserOrders()
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