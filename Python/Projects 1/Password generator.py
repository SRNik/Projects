#Generates y number of strong passwords with x amount of characters, for each password, for the user.

import random

print('Welcome to Password Generator')

chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@£$%&*().,?{}0123456789'

number_pass = int(input('Amount of passwords to generate: '))

length_pass = int(input('Amount of characters for each password: '))

print('\nHere are you password(s): ')

for pwd in range(number_pass):
    passwords = ''
    for ch in range(length_pass):
        passwords += random.choice(chars)
    print(passwords)


