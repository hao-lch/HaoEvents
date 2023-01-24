
import babel from 'rollup-plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve';
import ts from 'rollup-plugin-typescript2'
import path from 'path'
import { terser } from 'rollup-plugin-terser';

export default {
    input: './src/index.ts',
    output: {
        file: path.resolve(__dirname, 'dist/HaoEvents.js'),
        name: 'HaoEvent',
        format: 'umd',
        sourcemap: true,
    },
    plugins: [
        nodeResolve({
            extensions: ['.js', '.ts']
        }),
        ts({
            tsconfig: path.resolve(__dirname, 'tsconfig.json')
        }),
        babel({
            exclude: 'node_modules/**'
        }),
        terser(),
    ]
}