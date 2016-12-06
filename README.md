# browser-sync
本工程是一个简单的例子关于：browser-sync


## *browser-sync*是什么？(以下全部来源于[官网](http://www.browsersync.cn/))

### 省时的浏览器同步测试工具

Browsersync能让浏览器实时、快速响应您的文件更改（html、js、css、sass、less等）并自动刷新页面。更重要的是 Browsersync可以同时在PC、平板、手机等设备下进项调试。您可以想象一下：“假设您的桌子上有pc、ipad、iphone、android等设备，同时打开了您需要调试的页面，当您使用browsersync后，您的任何一次代码保存，以上的设备都会同时显示您的改动”。无论您是前端还是后端工程师，使用它将提高您30%的工作效率。

![](./image/sync-demo.gif)

有了它，您不用在多个浏览器、多个设备间来回切换，频繁的刷新页面。 <strong>更神奇的是您在一个浏览器中滚动页面、点击等行为也会同步到其他浏览器和设备中，这一切还可以通过可视化界面来控制</strong>。

![](./image/scroll-demo.gif)

## 本工程使用说明

* 安装node（一键安装不要修改安装路径)[下载链接](http://nodejs.cn/)

* 下载github repository 两种方式[下载链接](https://github.com/advence-liz/browser-sync)
  * 其一 :clone with git or checkout with svn
  * 其二:直接下载 zip(这种方式比较简单如果对git不熟悉推荐这样下载)
* 执行node初始化命令
  1. 打开工程根目录  
  2. 按住 shift 点击鼠标右键
  3. 弹出菜单中有一个“open commanded window here”左键点击它 （这样就会弹出工作目录为当前目录的命令窗口）
  4. 在命令行中键入 npm install
  ```bash
     $ npm install
  ```   
* 启动browser-sync 
   
   其中 --proxy  为ip或者域名（默认localhost：80）

  ![](./image/cmd.png)    

   截图中UI：http：//localhost：3001 为管理界面

   ![](./image/admin.png)

* 关闭browser-sync 在命令窗口 <kbd>ctrl+C</kbd> 或者直接关闭窗口   