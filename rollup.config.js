import pkg from './package.json';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import image from '@rollup/plugin-image';
import copy from 'rollup-plugin-copy'
import { terser } from 'rollup-plugin-terser';
// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
      },
      {
        file: pkg.module,
        format: 'esm',
        exports: 'auto',
      },
    ],
    plugins: [
      copy({
        targets: [
          // { src: ['/src/fonts.cssassets/fonts/arial.woff', 'assets/fonts/arial.woff2'], dest: 'dist/public/fonts' },
          { src: './src/fonts.css', dest: 'dist/' },
          { src: './src/index.css', dest: 'dist/' }
        ]
      }),
      image(),
      postcss({
        plugins: [],
        minimize: true,
        extensions: ['.css'],
      }),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        presets: ['@babel/preset-env', '@babel/preset-react'],
      }),
      commonjs(),
      external(),
      resolve(),
      terser(),
    ],
    external: Object.keys(pkg.peerDependencies),
  },
];
