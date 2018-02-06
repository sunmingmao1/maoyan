// pages/move/move.js
var currentPage = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectPage : currentPage
  },
/**
 * 热映
 */
  thermal:function(){
    currentPage = 0;
    this.setData({
      selectPage : currentPage
    });
  },
  /**
   * 待映
   */
  reflect:function(){
    currentPage = 1;
    this.setData({
      selectPage: currentPage
    });
  },
/**
 * swiper滑动
 */
  swiper_change:function(e){
    this.setData({
      selectPage: e.detail.current
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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