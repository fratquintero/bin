#!/usr/bin/env python3

import locale
import pyinputplus as pypi


# display a welcome message
print('Welcome to the Future Value Calculator\n')

# main
choice = 'yes'

while choice == 'yes':
# getting input from user
    monthly_inv = pypi.inputNum('Enter monthly investment: ')
    yearly_int = pypi.inputNum('Enter yearly interest rate: ')
    years = pypi.inputInt('Enter numbers of years: ')
# converting
    months = years * 12
    monthly_int = yearly_int / 12 / 100
# calculating future value
    future_val = 0
    for i in range(months):
        future_val += monthly_inv
        monthly_int_amount = future_val * monthly_int
        future_val += monthly_int_amount
# outputting result
    print("Future Value:", future_val)
# continue?
    choice = pypi.inputYesNo('Again [yes/no]: ')
