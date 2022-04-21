#!/bin/bash
set -x
a="54 55 66 77 88 99"
sum=0
for i in $a
do
	echo $i
	sum=`expr $sum + $i`
	echo "the sum is $sum"
done
