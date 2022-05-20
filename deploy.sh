echo "Switching to branch master"
git checkout master

echo "Building App..."
npm run build
echo  "Deploying Files to Server..."
scp -r build/* vincent@139.162.227.92:/var/www/kisimoff.com/

echo "Dooone!"