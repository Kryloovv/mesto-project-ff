// подключаем path к конфигу вебпак
const path = require('path');
// подключаем плагин для html
const HtmlWebpackPlugin = require('html-webpack-plugin');
// плагин, который будет каждый раз при сборке проекта удалять содержимое папки dist.
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// перед загрузкой проекта на сервер объединяет css файлы в один
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// module.exports — синтаксис экспорта в Node.js
module.exports = {
  // указали первое место, куда заглянет webpack, — файл index.js в папке src 
  entry: { main: './src/index.js' },
  // указали, в какой файл будет собираться весь js, и дали ему имя 
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '',
  },
  // добавили режим разработчика
  mode: 'development',
  devServer: {
    // путь, куда "смотрит" режим разработчика
    static: path.resolve(__dirname, './dist'), // ?? 'dist'
    // это ускорит загрузку в режиме разработки
    compress: true,
    // порт, чтобы открывать сайт по адресу localhost:8080, но можно поменять порт
    port: 8080,
    // сайт будет открываться сам при запуске npm run dev
    open: true
  },
  module: {
    // rules — это массив правил
    rules: [
      // добавим в него объект правил для бабеля
      {
        // регулярное выражение, которое ищет все js файлы
        test: /\.js$/,
        // при обработке этих файлов нужно использовать babel-loader
        use: 'babel-loader',
        // исключает папку node_modules, файлы в ней обрабатывать не нужно
        exclude: '/node_modules/'
      },
      // добавим правило для обработки картинок
      {
        // регулярное выражение, которое ищет все файлы с такими расширениями
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        // позволяет переносить исходные файлы в конечную сборку в том же формате
        type: 'asset/resource',
        // указываем путь, куда сложить файлы
        generator: {
            filename: 'images/[name].[hash][ext]'
          }
      },
      // добавим правило для обработки файлов шрифтов
      {
        // регулярное выражение, которое ищет все файлы с такими расширениями
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        // позволяет переносить исходные файлы в конечную сборку в том же формате
        type: 'asset/resource',
        // указываем путь, куда сложить файлы
        generator: {
            filename: 'fonts/[name].[hash][ext]'
          }
      },
      {
        // применять это правило только к CSS-файлам
        test: /\.css$/,
        // при обработке этих файлов нужно использовать
        // MiniCssExtractPlugin.loader и css-loader
        use: [MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: { importLoaders: 1 }
        }, 'postcss-loader']
      }
    ]
  },
  plugins: [
    // подключаем плагины
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin()
  ]
}