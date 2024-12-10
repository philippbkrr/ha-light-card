import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default {
	input: 'src/ha-light-card.ts',
	output: {
		dir: 'dist',
		format: 'es',
	},
	plugins: [resolve(), typescript()],
};
