import path from 'path';

const { NODE_ENV } = process.env;
const filename = `redux-async${NODE_ENV === 'production' ? '.min' : ''}.js`;

export default {
	entry: './src/index',
	output: {
		path: path.join(__dirname, 'dist'),
		filename,
		library: 'ReduxAsync',
		libraryTarget: 'umd',
	  },
	module: {
		rules: [{
			test: /\.(js|ts)$/,
			use: {
					loader: "babel-loader"
			},
			exclude: /node_modules/,
			
		}]
	}
}