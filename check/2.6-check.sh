cd /gitscenario2
output=$(git status | grep nothing | wc -l)
if [ $output -eq "1" ];then
echo 1
