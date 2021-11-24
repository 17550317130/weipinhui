<template>
  <div class="Header">
    <div class="box">
      <div class="header_top">
        <div class="header_top_left">
          <!-- <el-cascader :options="options" clearable></el-cascader> -->
          <select name="" id="">
            <option value=""></option>
          </select>
          广州市
          <i class="el-icon-caret-bottom" style="color: #ccc"></i>
        </div>
        <div class="header_top_right">
          <ul>
            <router-link tag="li" to="denglu"> 请登录 </router-link>
            <!-- <li></li> -->
            <li style="color: #ccc">/</li>
            <li>注册</li>
            <li style="color: #ccc">/</li>
            <li style="width: 70px">
              <span class="liwu"></span>
              <span style="float: left; margin: -15px 0 0 19px">签到有礼</span>
            </li>
            <li style="color: #ccc">/</li>
            <li>我的订单</li>
            <li style="color: #ccc">/</li>
            <li>
              我的特卖
              <i class="el-icon-caret-bottom"></i>
            </li>
            <li style="color: #ccc">/</li>
            <li>
              会员俱乐部
              <i class="el-icon-caret-bottom"></i>
            </li>
            <li style="color: #ccc">/</li>
            <li>客户服务</li>
            <li style="color: #ccc">/</li>
            <li>
              <i class="el-icon-mobile-phone" style="color: black"></i>
              手机版
            </li>
            <li style="color: #ccc">/</li>
            <li>
              更多
              <i class="el-icon-caret-bottom"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="header">
      <div class="logo">
        <img src="@/assets/images/logo.png" alt="" />
      </div>
      <div class="sousuo">
        <div class="sousuo_inp">
          <input type="text" placeholder="女款大衣" class="inp" />
          <span class="icon-search">
            <i class="el-icon-search"></i>
          </span>
        </div>
        <ul class="sousuo_nav">
          <li>女靴</li>
          <li>|</li>
          <li>女式大衣</li>
          <li>|</li>
          <li>波司登BOSIDENG</li>
          <li>|</li>
          <li>女式休闲裤</li>
          <li>|</li>
          <li>雪中飞SHOW FLYING</li>
        </ul>
      </div>
      <div class="gouwu">
        <span><i class="el-icon-goods" style="font-size: 18px"></i></span>
        购物袋
        <span class="gouwu_num">110</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }]
      }
    }
  }
</script>