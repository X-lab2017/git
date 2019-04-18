cd gitscenario6
out=`git status | grep "nothing to commit" | wc -l`
if [[ $out -ge "1" ]]; then
	echo 1
fi
