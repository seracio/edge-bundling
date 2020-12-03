module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                useBuiltIns: 'usage',
                bugfixes: true,
                corejs: 3
            }
        ],
        '@babel/preset-typescript',
        '@babel/preset-react',
        '@emotion/babel-preset-css-prop'
    ],
    plugins: ['babel-plugin-lodash']
};
