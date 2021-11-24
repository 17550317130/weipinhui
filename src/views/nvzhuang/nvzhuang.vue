<template>
  <div class="home">
    <Header />
    <div class="nav_box">
      <div class="nav">
        <span class="nav_fenlei">商品分类</span>
        <ul>
          <li style="margin-left: 30px; color: #fa2a83"><b>推荐</b></li>
          <li>3折疯抢</li>
          <li>唯品快抢</li>
          <li>唯品奥莱</li>
          <router-link tag="li" to="nvzhuang" style="color:#fa2a83;"> <b>女装</b> </router-link>
          <router-link tag="li" to="nanzhuang"> 男装 </router-link>
          <li>鞋包</li>
          <li>母婴</li>
          <li>运动</li>
          <li>美妆</li>
          <li>电器</li>
          <li>内衣</li>
          <li>
            更多
            <i class="el-icon-arrow-down"></i>
          </li>
        </ul>
      </div>
    </div>
    <div class="nv_list">
      <div class="nv_list_one">
        <img src="../../assets/images/女装1.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>4.7</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>香影xiangying女装专场</b></span
          >
        </div>
      </div>
      <div class="nv_list_two">
        <img src="../../assets/images/女装2.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>4.9</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>西遇WESTLINK女装专场</b></span
          >
        </div>
      </div>
      <div class="nv_list_one">
        <img src="../../assets/images/女装3.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>0.9</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>女卫衣</b></span
          >
        </div>
      </div>
      <div class="nv_list_two">
        <img src="../../assets/images/女装4.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>3.9</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>OTHER MIX女装专场</b></span
          >
        </div>
      </div>
      <div class="nv_list_one">
        <img src="../../assets/images/女装5.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>0.7</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>女羽绒服</b></span
          >
        </div>
      </div>
      <div class="nv_list_two">
        <img src="../../assets/images/女装6.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>4.9</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>衣香丽影女装专场</b></span
          >
        </div>
      </div>
      <div class="nv_list_one">
        <img src="../../assets/images/女装7.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>0.7</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>厚款女羽绒服</b></span
          >
        </div>
      </div>
      <div class="nv_list_two">
        <img src="../../assets/images/女装8.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>3.2</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>尚都比拉SENTUBILA女装专场</b></span
          >
        </div>
      </div>
      <div class="nv_list_one">
        <img src="../../assets/images/女装9.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>0.7</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>短款女羽绒服</b></span
          >
        </div>
      </div>
      <div class="nv_list_two">
        <img src="../../assets/images/女装10.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>5</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>B.Duck运动户外专场</b></span
          >
        </div>
      </div>
      <div class="nv_list_one">
        <img src="../../assets/images/女装11.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>0.6</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>年轻连衣裙</b></span
          >
        </div>
      </div>
      <div class="nv_list_two">
        <img src="../../assets/images/女装12.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>3</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>NANING9女装专场</b></span
          >
        </div>
      </div>
      <div class="nv_list_one">
        <img src="../../assets/images/女装13.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>0.6</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>少女套装</b></span
          >
        </div>
      </div>
      <div class="nv_list_two">
        <img src="../../assets/images/女装14.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>3</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>子陌ZIMO女装专场</b></span
          >
        </div>
      </div>
      <div class="nv_list_one">
        <img src="../../assets/images/女装1.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>4.7</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>香影xiangying女装专场</b></span
          >
        </div>
      </div>
      <div class="nv_list_two">
        <img src="../../assets/images/女装2.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>4.9</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>西遇WESTLINK女装专场</b></span
          >
        </div>
      </div>
      <div class="nv_list_one">
        <img src="../../assets/images/女装3.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>0.9</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>女卫衣</b></span
          >
        </div>
      </div>
      <div class="nv_list_two">
        <img src="../../assets/images/女装4.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>3.9</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>OTHER MIX女装专场</b></span
          >
        </div>
      </div>
      <div class="nv_list_one">
        <img src="../../assets/images/女装5.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>0.7</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>女羽绒服</b></span
          >
        </div>
      </div>
      <div class="nv_list_two">
        <img src="../../assets/images/女装6.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>4.9</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>衣香丽影女装专场</b></span
          >
        </div>
      </div>
      <div class="nv_list_one">
        <img src="../../assets/images/女装7.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>0.7</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>厚款女羽绒服</b></span
          >
        </div>
      </div>
      <div class="nv_list_two">
        <img src="../../assets/images/女装8.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>3.2</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>尚都比拉SENTUBILA女装专场</b></span
          >
        </div>
      </div>
      <div class="nv_list_one">
        <img src="../../assets/images/女装9.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>0.7</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>短款女羽绒服</b></span
          >
        </div>
      </div>
      <div class="nv_list_two">
        <img src="../../assets/images/女装10.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>5</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>B.Duck运动户外专场</b></span
          >
        </div>
      </div>
      <div class="nv_list_one">
        <img src="../../assets/images/女装11.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>0.6</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>年轻连衣裙</b></span
          >
        </div>
      </div>
      <div class="nv_list_two">
        <img src="../../assets/images/女装12.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>3</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>NANING9女装专场</b></span
          >
        </div>
      </div>
      <div class="nv_list_one">
        <img src="../../assets/images/女装13.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>0.6</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>少女套装</b></span
          >
        </div>
      </div>
      <div class="nv_list_two">
        <img src="../../assets/images/女装14.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>3</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>子陌ZIMO女装专场</b></span
          >
        </div>
      </div>
      <div class="nv_list_one">
        <img src="../../assets/images/女装1.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>4.7</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>香影xiangying女装专场</b></span
          >
        </div>
      </div>
      <div class="nv_list_two">
        <img src="../../assets/images/女装2.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>4.9</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>西遇WESTLINK女装专场</b></span
          >
        </div>
      </div>
      <div class="nv_list_one">
        <img src="../../assets/images/女装3.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>0.9</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>女卫衣</b></span
          >
        </div>
      </div>
      <div class="nv_list_two">
        <img src="../../assets/images/女装4.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>3.9</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>OTHER MIX女装专场</b></span
          >
        </div>
      </div>
      <div class="nv_list_one">
        <img src="../../assets/images/女装5.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>0.7</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>女羽绒服</b></span
          >
        </div>
      </div>
      <div class="nv_list_two">
        <img src="../../assets/images/女装6.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>4.9</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>衣香丽影女装专场</b></span
          >
        </div>
      </div>
      <div class="nv_list_one">
        <img src="../../assets/images/女装7.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>0.7</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>厚款女羽绒服</b></span
          >
        </div>
      </div>
      <div class="nv_list_two">
        <img src="../../assets/images/女装8.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>3.2</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>尚都比拉SENTUBILA女装专场</b></span
          >
        </div>
      </div>
      <div class="nv_list_one">
        <img src="../../assets/images/女装9.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>0.7</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>短款女羽绒服</b></span
          >
        </div>
      </div>
      <div class="nv_list_two">
        <img src="../../assets/images/女装10.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>5</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>B.Duck运动户外专场</b></span
          >
        </div>
      </div>
      <div class="nv_list_one">
        <img src="../../assets/images/女装11.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>0.6</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>年轻连衣裙</b></span
          >
        </div>
      </div>
      <div class="nv_list_two">
        <img src="../../assets/images/女装12.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>3</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>NANING9女装专场</b></span
          >
        </div>
      </div>
      <div class="nv_list_one">
        <img src="../../assets/images/女装13.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>0.6</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>少女套装</b></span
          >
        </div>
      </div>
      <div class="nv_list_two">
        <img src="../../assets/images/女装14.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>3</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>子陌ZIMO女装专场</b></span
          >
        </div>
      </div>
      <div class="nv_list_one">
        <img src="../../assets/images/女装1.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>4.7</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>香影xiangying女装专场</b></span
          >
        </div>
      </div>
      <div class="nv_list_two">
        <img src="../../assets/images/女装2.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>4.9</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>西遇WESTLINK女装专场</b></span
          >
        </div>
      </div>
      <div class="nv_list_one">
        <img src="../../assets/images/女装3.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>0.9</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>女卫衣</b></span
          >
        </div>
      </div>
      <div class="nv_list_two">
        <img src="../../assets/images/女装4.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>3.9</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>OTHER MIX女装专场</b></span
          >
        </div>
      </div>
      <div class="nv_list_one">
        <img src="../../assets/images/女装5.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>0.7</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>女羽绒服</b></span
          >
        </div>
      </div>
      <div class="nv_list_two">
        <img src="../../assets/images/女装6.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>4.9</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>衣香丽影女装专场</b></span
          >
        </div>
      </div>
      <div class="nv_list_one">
        <img src="../../assets/images/女装7.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>0.7</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>厚款女羽绒服</b></span
          >
        </div>
      </div>
      <div class="nv_list_two">
        <img src="../../assets/images/女装8.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>3.2</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>尚都比拉SENTUBILA女装专场</b></span
          >
        </div>
      </div>
      <div class="nv_list_one">
        <img src="../../assets/images/女装9.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>0.7</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>短款女羽绒服</b></span
          >
        </div>
      </div>
      <div class="nv_list_two">
        <img src="../../assets/images/女装10.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>5</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>B.Duck运动户外专场</b></span
          >
        </div>
      </div>
      <div class="nv_list_one">
        <img src="../../assets/images/女装11.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>0.6</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>年轻连衣裙</b></span
          >
        </div>
      </div>
      <div class="nv_list_two">
        <img src="../../assets/images/女装12.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>3</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>NANING9女装专场</b></span
          >
        </div>
      </div>
      <div class="nv_list_one">
        <img src="../../assets/images/女装13.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>0.6</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>少女套装</b></span
          >
        </div>
      </div>
      <div class="nv_list_two">
        <img src="../../assets/images/女装14.jpg" alt="" />
        <div class="nv_list_one_fengding">
          <span style="font-size: 26px; color: #f03867"><b>3</b></span>
          <span style="font-size: 20px; color: #222"><b>折封顶</b></span>
          <span style="font-size: 20px; color: #222; margin-left: 10px"
            ><b>子陌ZIMO女装专场</b></span
          >
        </div>
      </div>
    </div>

    <Cebianlan />
  </div>
</template>

<script>
import Cebianlan from "../cebianlan/cebianlan.vue";
import Header from '../header/header.vue'
export default {
  components: {
    Cebianlan,
    Header,
  },
};
</script>
<style scoped>
.nav_box {
  box-shadow: 0 1px 1px 1px #f4f4f4;
}
.nv_list {
  width: 1200px;
  /* height: 3700px; */
  /* background-color: rgb(211, 219, 217); */
  margin: 15px auto;
}
.nv_list_one {
  width: 570px;
  height: 370px;
  /* background-color: burlywood; */
  float: left;
}
.nv_list_one > img {
  width: 570px;
}
.nv_list_two {
  width: 570px;
  height: 370px;
  /* background-color: burlywood; */
  float: right;
}
.nv_list_two > img {
  width: 570px;
}
.nv_list_one_fengding {
  width: 540px;
  height: 39px;
  /* background-color: cadetblue; */
  margin-top: 18px;
}
.liwu {
  width: 15px;
  height: 18px;
  display: block;
  background-image: url(../../../public/礼物盒子.gif);
  position: relative;
  background-repeat: no-repeat;
  background-position: center top;
  margin-top: -3px;
}
</style>

