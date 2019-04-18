cd gitscenario7
out=`git status | grep "You are currently bisecting" | wc -l`
if [[ $out -ge "1" ]]; then
	echo 1
fi
