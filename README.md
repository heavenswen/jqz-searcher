# jqz-searcher

[jquery|zepto]利用'data-'进行多条件本地数据匹配搜索。支持反序，条目数。

<h5>初始化</h5>
<code>
&lt;script&gt;var search = new $.jqz_searcher({
			obj: '', //搜索栏
			cell: '', //排序目标			
			valueObj:'',//数据对象
			dataType: '', //其他数据
			fun:'',
});&lt;/script&gt;
</code>
<h5>参数</h5>
<ol>
	<li>obj: '', classObj 搜索对象
	<li>cell: '', classObj 数据条
	<li>valueObj:'',classObj 匹配对象，默认为text
	<li>dataType: '', string,其他数据如“data-name”
	<li>fun:''，function,返回一个数目条
</ol>
<h5>扩展方法</h5>
<ul>
	<li>this.data_reverse() 反序
	<li>this.data_init() 重置
</ul>

<small>
	基本原理：初始化的时备份数据到#searchdb中，每次查询删除原dom,并从db拷贝数据复制到原dom上，
</small>