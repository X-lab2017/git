cd /gitscenario1
output=$(git log | grep gitignore | wc -l)
if [ $output -eq "1" ];then
echo 1
fi
