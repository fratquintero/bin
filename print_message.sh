#!/bin/bash


until [ -z $1 ]
do
	echo -n $1
	echo -n " "
	shift
done
echo
exit
