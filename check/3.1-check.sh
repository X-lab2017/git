cd /gitscenario3
output=$(git remote | grep origin | wc -l)
if [ $output -eq "1" ];then
echo 1
fi

