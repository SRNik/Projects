

import random

def comp_guess(y):
    low = -50
    high = y
    feedback = ''
    while feedback != 'c':           #
        if low != high:                                #This one is needed because the function/method randint does not allow same low/high
            guess = random.randint(low, high)
        else:
            guess = low                             # could be = high because low = high
        feedback = input(f'Is {guess} too high (H), too low (L), or correct (C)? ').lower()
        if feedback == 'h':
            high = guess - 1
        elif feedback == 'l':                       #Cannot use else because you have a criteria, it is not empty next to elif
            low = guess + 1
    print(f'Hurray! Computer guessed right number, which is {guess}')

comp_guess(50)