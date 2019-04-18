cd /gitscenario2
output=$(git status | grep modified | wc -l)
if [ $output -eq "1" ];then
echo 1
fi
