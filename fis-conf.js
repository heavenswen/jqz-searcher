/*
 * web基本配置 2016-05-17
 */
var 
	name = 'jqz-searcher',
	css = '/css/_*.css',
	js = '/js/_*.js';

fis.match('::packager', {
	postpackager: fis.plugin('loader', {
		allInOne: false
	})
});
fis.match('*.{less,md}', {
	loaderLang: false,
	release: false
})
fis.match('_*.{html,htm,js,css}', {
	loaderLang: false,
	release: false
})
fis.match('fonts/*.{css,html}', {
	release: false
})

fis.match('fonts/*.{ttf,woff,svg,eot}', {
	release: '$0',
	url: '..$0'
}) 
fis.match('./dist/*', {
	release: false
})
/*合并*/
fis.match(js,{
	 optimizer: fis.plugin('uglify-js'),
	 release:'./js/'+name+'.min.js'
})
fis.match(css,{
	 optimizer: fis.plugin('clean-css'),
	 release:'./css/'+name+'.min.css'
})
/*生成应用版*/
fis.media('dist').match('**', {
	deploy: [
		fis.plugin('skip-packed'),
		fis.plugin('local-deliver', {
			to: './dist/'
		})
	]
})
/*测试*/
fis.media('hb').match('*.{css,js}',{
	 useHash:true,
})