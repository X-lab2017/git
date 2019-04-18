cd /gitscenario1
$output=$(git status | grep new | wc -l)
if [ $output == "1" ];then
echo 1
fi
