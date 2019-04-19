cd gitscenario6
out=`git branch | grep "new_branch" | wc -l`
if [[ $out -eq "0" ]]; then
	echo 1
fi
