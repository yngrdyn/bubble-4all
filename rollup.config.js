import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default [
	{
		input: 'dist/src/bubble-4all.js',
		output: {
			file: 'dist/bundle-0005.js',
			format: 'iife', // immediately-invoked function expression — suitable for <script> tags
			sourcemap: true
		},
		plugins: [
			resolve(), // tells Rollup how to find date-fns in node_modules
			commonjs(), // converts date-fns to ES modules
			production && terser() // minify, but only in production
		]
	},
];
