

import random

def maxliminter(x):
    rand_num = random.randint(-50, x)        #The random number is between -50 and x
    guess = -10                             #The start value of guess should never be the correct number so that the while loop can start
    while guess != rand_num:
        guess = int(input(f'Guess the number computer is holding which is between -50 and {x}: '))
        if guess < rand_num:
            print("Guestimate is lower than the hiding number")
        elif guess > rand_num:
            print("Sorry, too high guess")
    print(f'Hurray! You guessed right. Number {rand_num}')

maxliminter(50)
