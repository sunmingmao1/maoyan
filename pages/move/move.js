// pages/move/move.js
var currentPage = 0;
var move_list;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectPage: currentPage,
    list: move_list
  },
  /**
   * 热映
   */
  thermal: function () {
    currentPage = 0;
    this.setData({
      selectPage: currentPage
    });
  },
  /**
   * 待映
   */
  reflect: function () {
    currentPage = 1;
    this.setData({
      selectPage: currentPage
    });
  },
  /**
   * swiper滑动
   */
  swiper_change: function (e) {
    this.setData({
      selectPage: e.detail.current
    });
  },
/**
 * 购票
 */
  buy_move:function(e){
    wx.navigateTo({
      url: '/pages/select/select',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    move_list = [
      {
        move_name: "泡芙小姐",
        move_type: "剧情,爱情",
        move_star: "主演:张歆艺,王丽说,谭维维",
        move_date: "02-09",
        move_image: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3973934331,2217907017&fm=27&gp=0.jpg",
        move_num: "30702"
      },
      {
        move_name: "纯洁心灵·逐梦演艺圈",
        move_type: "剧情,喜剧",
        move_star: "主演:毕至飞,朱则见,李延慢",
        move_date: "02-09",
        move_image: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1330111232,213104289&fm=27&gp=0.jpg",
        move_num: "6250"
      },
      {
        move_name: "南极之恋",
        move_type: "爱情,冒险",
        move_star: "主演:赵又廷,杨子姗",
        move_date: "02-09",
        move_image: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=26765972,718958144&fm=111&gp=0.jpg",
        move_num: "2564"
      },
      {
        move_name: "捉妖记2",
        move_type: "喜剧,奇幻",
        move_star: "主演:梁朝伟,白百合,井柏然",
        move_date: "02-16",
        move_image: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2186778074,3509175961&fm=27&gp=0.jpg",
        move_num: "560798"
      },
      {
        move_name: "唐人街探案2",
        move_type: "喜剧,动作,悬疑",
        move_star: "主演:王宝强,刘浩然,肖扬",
        move_date: "02-09",
        move_image: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=249398184,30006444&fm=27&gp=0.jpg",
        move_num: "399521"
      },
      {
        move_name: "西游记女儿国",
        move_type: "爱情,动作",
        move_star: "主演:郭富城,冯绍峰,赵丽颖",
        move_date: "02-16",
        move_image: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1086761015,763556469&fm=111&gp=0.jpg",
        move_num: "315933"
      },
      {
        move_name: "无问西东",
        move_type: "爱情,战争",
        move_star: "主演:章子怡,黄晓明,王力宏",
        move_date: "02-16",
        move_image: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=542102940,3394119206&fm=27&gp=0.jpg",
        move_num: "315933"
      },
      {
        move_name: "神秘巨星",
        move_type: "喜剧,音乐",
        move_star: "主演:阿米尔汗",
        move_date: "02-16",
        move_image: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4289204925,410832626&fm=27&gp=0.jpg",
        move_num: "315933"
      }
    ]

    this.setData({
      list: move_list
    });

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