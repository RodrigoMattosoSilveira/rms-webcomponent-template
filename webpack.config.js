const path = require('path');

module.exports = {
  entry: './src/rms-webcomponent-template.ts',
  module: {
    rules: [{
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'rms-webcomponent-template.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
