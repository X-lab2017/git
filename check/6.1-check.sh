cd gitscenario6
br=`git branch | grep "*"`
if [[ ${br/* /} = new_branch ]]; then
	echo 1
fi
