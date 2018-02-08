// pages/cinema/cinema.js
var cinemaList;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cinames : [
      
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    cinemaList = [
      {
        ciname_name: "横店电影城(丁豪广场店)",
        address: "历下区工业南路与舜华路交叉",
        distance: "35km",
        money: "34",
        table:[
          {
            table_type:"1",
            table_name:"座",
          },
          {
            table_type: "1",
            table_name: "杜比全景声厅",
          } ,{
            table_type: "2",
            table_name: "小吃",
          }, {
            table_type: "2",
            table_name: "折扣卡",
          }
        ]
      },
      {
        ciname_name: "新世纪电影城(黄金99店)",
        address: "历下区旅游路与浆水泉路交汇处黄金99生活广场",
        distance: "3.6km",
        money: "33",
        table: [
          {
            table_type: "1",
            table_name: "座",
          },
          {
            table_type: "1",
            table_name: "杜比全景声厅",
          }, {
            table_type: "1",
            table_name: "退",
          }, {
            table_type: "1",
            table_name: "改签",
          },  {
            table_type: "2",
            table_name: "小吃",
          }, {
            table_type: "2",
            table_name: "折扣卡",
          }
        ]
      },
      {
        ciname_name: "新世纪电影城(燕山银座店)",
        address: "历下区窑头路8号银座购物广场1楼",
        distance: "3.8km",
        money: "33",
        table: [
          {
            table_type: "1",
            table_name: "座",
          },
          {
            table_type: "1",
            table_name: "60侦厅",
          }, {
            table_type: "1",
            table_name: "退",
          }, {
            table_type: "1",
            table_name: "改签",
          },{
            table_type: "2",
            table_name: "折扣卡",
          }
        ]
      },
      {
        ciname_name: "万达影城(高新店)",
        address: "历下区高新区工业南路57号万达广场娱乐楼5楼",
        distance: "3.8km",
        money: "38.5",
        table: [
          {
            table_type: "1",
            table_name: "座",
          },
          {
            table_type: "1",
            table_name: "IMAX厅",
          }, {
            table_type: "1",
            table_name: "ReadID厅",
          }, {
            table_type: "1",
            table_name: "儿童厅",
          }, {
            table_type: "1",
            table_name: "退",
          }, {
            table_type: "2",
            table_name: "小吃",
          }, {
            table_type: "2",
            table_name: "折扣卡",
          }
        ]
      },
      {
        ciname_name: "新世纪电影城(赛博店)",
        address: "历下区山大路赛博数码广场5楼",
        distance: "3.8km",
        money: "35",
        table: [
          {
            table_type: "1",
            table_name: "座",
          },
          {
            table_type: "1",
            table_name: "退",
          }, {
            table_type: "1",
            table_name: "改签",
          }, {
            table_type: "2",
            table_name: "小吃",
          }, {
            table_type: "2",
            table_name: "折扣卡",
          }
        ]
      },
      {
        ciname_name: "新世纪电影城(洪楼店)",
        address: "历下区花园路101号海威广场B1楼",
        distance: "6.1km",
        money: "38",
        table: [
          {
            table_type: "1",
            table_name: "座",
          },
          {
            table_type: "1",
            table_name: "退",
          }, {
            table_type: "1",
            table_name: "改签",
          }
        ]
      }
    ]

    this.setData({
      cinames: cinemaList
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