cd /gitscenario4
output=$(git status | grep update | wc -l)
if [ $output -eq "0" ];then
echo 1
fi