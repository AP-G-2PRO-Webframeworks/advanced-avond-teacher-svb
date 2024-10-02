sudo apt update
sudo apt install dnsutils -y
npm i -g @expo/ngrok
ip=`dig docker.host.internal A +short`
echo "REACT_NATIVE_PACKAGER_HOSTNAME=$ip" > .devcontainer/.env