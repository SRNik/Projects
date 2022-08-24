import random

def play():
    user = input("'r' for rock, 'p' for paper, and 's' for scissors\n").lower()
    computer = random.choice(['r','p','s'])         #function/method for choosing a random data
    if user == computer:
        return 'It is a tie'


    if is_win(user, computer):          #Calling the function under in order to show who won
        return f'You won! Opponent chose {computer}'

    return f'You lost! Opponent chose {computer}'

def is_win(player, opponent):           # return true if player wins
    if (player == 'r' and opponent == 's') or (player == 's' and opponent == 'p') or (player == 'p' and opponent == 'r'):
        return True

print(play())