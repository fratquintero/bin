#!/usr/bin/env bash

# Author: Frat Quintero
# Date: 2/5/2021
# Last Modification: --
# Description:
# Compares strings and integeres. Echoes output
# Usage: comparing_str_int.sh

echo -n "Enter first string: "
read string1
echo -n "Enter second string: "
read string2

[ $string1 = $string2 ] && echo "Both strings are equal" || echo "Strings are \
not equal"

echo -n "Enter first number: "
read num1
echo -n "Enter second number: "
read num2

[ $num1 -eq $num2 ] && echo "Both numbers are equal" || echo "Numbers are \
not equal"
