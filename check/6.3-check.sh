cd gitscenario6
br=`git branch | grep "*"`
if [[ ${br/* /} = master ]]; then
	echo 1
fi
