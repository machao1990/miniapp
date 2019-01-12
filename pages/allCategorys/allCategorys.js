const api = require('../../api.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    categorys: null
  },
  getCategorys() {
    api.home.getCategorys({
      limit: 100,
      isFirst: false
    }).then(res => {
      if(res.data.code === '0') {
        const list = res.data.data
        let categorys = []
        
        list.forEach(item => {
          if (item.parentId === '0') {
            item.children = []
            categorys.push(item)
          } else {
            categorys.forEach(category => {
              if(category.id === item.parentId) {
                category.children.push(item)
              }
            })
          }
        })

        this.setData({
          categorys
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCategorys()
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