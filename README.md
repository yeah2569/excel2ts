# excel2ts
一款简单的excel转换为typescript代码配置的cocos插件.转换主要生成以下几个文件:
- Data.ts   //data通用接口
- ConfigTypeDefind  //excel 数据类型定义
- DataManager  //excel数据管理类,方便调用
- Datas     //excel 数据主体文件,所有excel数据都在这里

产品特色:
1. 转换后的代码自带接口定义,支持ts语法提示,从此少掉几根头发.
2. 使用简单容易上手.
3. 随时更新
如果你有任何建议或者需求,欢迎随时[联系作者QQ](http://wpa.qq.com/msgrd?v=3&uin=654088761&site=qq&menu=yes)

如何使用:
1. 首先我们定义一个xlsx数据表格文件. 内容如下

- id	    name	   effect
- id	    名字	   效果
- number	string	 list<number>
- 1	      牛肉丸	   0
- 2	      大力丸	   4
  
excel的格式必须符合一些要求. 他的前3行主要是描述内容,是一些必要字段.  第一行是转化为ts后的字段名字 ,第二行是介绍,也就是注释. 第三行是他的类型.
目前只支持4种类型  number, string ,List\<number>,List\<string>

2. 配置完毕并且安装了插件之后后,打开cocos 选择扩展-->excel2ts.
需要配置2个地址. 生成配置文件的地址和excel文件的地址.
前者建议使用一个单独的文件夹. **一定要注意,在开始生成时会清空配置文件夹下所有的文件.**
点击生成,会在设置的文件夹下生成一连串的ts文件.此时如果没有任何错误,恭喜你,生成成功.

3. 在程序中 使用 DataManager 进行数据的调用.

此插件支持一个表格多个sheet. 多个sheet的处理方式 和多个表格一致.

后续计划:
1. datas文件压缩选项.
2. 表格枚举类型实现




