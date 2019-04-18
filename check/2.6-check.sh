cd /gitscenario2
output=$(git log | grep First | wc -l)
if [ $output -eq "1" ];then
echo 1
