mkdir node_modules
git clone https://github.com/trueadm/inferno --depth=1
cd inferno
npm install
cp -r packages/* ../node_modules/
cd ..
npm install
./node_modules/.bin/webpack --config webpack.config.js
node dist/bundle.js
