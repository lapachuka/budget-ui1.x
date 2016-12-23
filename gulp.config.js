module.exports = function () {
	return {
		sources: {
			index: 'src/index.html',
			scripts: 'src/app/**/*.js',
			stylesheets: [
				'src/app/**/*.scss',
				'src/assets/styles/**/*.scss'
			],
			images: 'src/assets/images/**/*',
			fonts: 'src/assets/fonts/**/*',
			templates: 'src/app/**/*.tpl.html',
			lib: 'src/assets/lib/**/*.js',
			rsync: 'dev/**/*.*'
		},
		dev: {
			index: 'dev',
			scripts: 'dev/app',
			stylesheets: 'dev/stylesheets',
			images: 'dev/images',
			fonts: 'dev/fonts',
			templates: 'dev/app',
			lib: 'dev/lib',
			vendors: 'dev/vendor'
		}
	};
};