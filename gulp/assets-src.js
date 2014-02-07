module.exports = function( mobile_or_desk ) {

	var assets_src = ( 'm' === mobile_or_desk )
		? '../mobile-assets'
		: '../assets';

	return {
		src : assets_src,
		css : {
			src : assets_src + '/_sass',
			build : assets_src + '/css'
		},

		js : {
			src : assets_src + '/_js',
			build : assets_src + '/js'
		},

		img : {
			src : assets_src + '/images',
			build : assets_src + '/img'
		}
	}; // return

}; // module.exports