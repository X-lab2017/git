cd /gitscenario2
output=$(git status | grep committed | wc -l)
if [ $output -eq "1" ];then
echo 1
fi
