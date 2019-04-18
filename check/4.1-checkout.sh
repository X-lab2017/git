cd /gitscenario4
output=$(git status | grep add | wc -l)
if [ $output = "2" ]
then
    echo 1
fi
