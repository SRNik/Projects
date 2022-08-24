import math
import random

class Player:           #The letter the player is going to represent. The foundation of the players
    def __init__(self, letter):
        #letter is x or o
        self.letter = letter

    #want all players to get their next move
    def get_move(self, thegame):
        pass

class RandomComputerPlayer(Player):
    def __init__(self, letter):
        super().__init__(letter)

    def get_move(self, thegame):           #random valid spot for the computer
        square = random.choice(thegame.available_moves())
        return square

class HumanPlayer(Player):
    def __init__(self, letter):
        super().__init__(letter)

    def get_move(self, thegame):        #makes the player able to chose a spot based on all the available spots
        valid_square = False
        value = None
        while not valid_square:
            square = input(self.letter + '\'s turn. Input move (0-8):')
            # checking if the value is correct , 0-9, and if the spot is available on the board. If not, we say it is not valid
            try:
                value = int(square)
                if value not in thegame.available_moves():      #validation if the value is available or existing on the board
                    raise ValueError
                valid_square = True
            except ValueError:
                print('Invalid square, try again')
        return value