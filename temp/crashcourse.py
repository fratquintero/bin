from datetime import date
import scipy
import os
import json
import requests
import time


x = 1
y = 2.5
name = "Frat"
age = 56
var = [x, y, name]
numbers = [1, 2, 3, 4, 5]

# Dictionaries

sandra_data = dict(first_name='sandra', last_name='vega', age=50)

family_data = [
    {
        'first_name': 'Frat',
        'last_name': 'Quintero',
        'age': 56,
        'objects': ['pencil', 'rubber', 'book']
        },
    {
        'first_name': 'Sandra',
        'last_name': 'Vega',
        'age': 50,
        'objects': ['lipstick', 'mirror', 'purse']
        }
]

class Family:
    def __init__(self, first_name, last_name, age):
        self.first_name = first_name
        self.last_name = last_name
        self.age = age
    def me(self):
        return f'I am: {self.first_name} {self.last_name}'

class Job(Family):
    def __init__(self, company):
        self.company = company












