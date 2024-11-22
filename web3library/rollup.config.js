import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'rollup';

export default defineConfig({
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/fundraiserlib.umd.js',
            format: 'umd',
            name: 'FundraiserLib',
            sourcemap: true
        },
        {
            file: 'dist/fundraiserlib.es.js',
            format: 'es',
            sourcemap: true
        }
    ],
    plugins: [
        typescript({
            tsconfig: './tsconfig.json',
            declaration: true
        })
    ]
});
