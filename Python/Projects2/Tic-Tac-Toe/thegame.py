#Tic-Tac-Toe, with various players in the commance line (human to human, human to computer, computer to computer etc)

from Player import RandomComputerPlayer, HumanPlayer
import time

class TicTacToe:
    def __init__(self):
        self.board = [' ' for y in range(9)]        #List with 9 empty data. Repr. 3x3
        self.current_winner = None      # Keep track of winner

    def print_board(self):          #creating the foundation
        #getting the rows
        for row in [self.board[i*3:(i+1)*3] for i in range(3)]:
            print('| ' + ' | '.join(row) + ' |')

    @staticmethod
    def print_board_nums():
        # 0 | 1 | 2 etc (tells us what number corresponds to what box)
        number_board = [[str(i) for i in range(j*3, (j+1)*3)] for j in range(3)]
        for row in number_board:
            print('| ' + ' | '.join(row) + ' |')

    def available_moves(self):
        moves = []
        for (i, spot) in enumerate(self.board):
            if spot == ' ':
                moves.append(i)
        return moves

    def empty_squares(self):
        return ' ' in self.board

    def num_empty_squares(self):        #counting the empty squares
        return len(self.available_moves())

    def make_move(self, square, letter):
        if self.board[square] == ' ':
            self.board[square] = letter
            if self.winner(square, letter):         #if there is a winner
                self.current_winner = letter
            return True
        return False

    def winner(self, square, letter):
        row_ind = square // 3
        row = self.board[row_ind*3 : (row_ind + 1) * 3]         #list of the items in the row we have selected
        if all([spot == letter for spot in row]):
            return True

        col_ind = square % 3
        col = self.board[col_ind : 9: 3]
        if all([spot == letter for spot in col]):
            return True

        #check if diagonal
        if square % 2 == 0:
            diagonal1 = [self.board[i] for i in range(0,9,4)]
            if all([spot == letter for spot in diagonal1]):
                return True
            diagonal2 = [self.board[i] for i in range(2,7,2)]
            if all([spot == letter for spot in diagonal2]):
                return True

        return False


def play(thegame, x_player, o_player, print_game=True):
    if print_game:
        thegame.print_board_nums()

    letter = 'X' # starting letter
    while thegame.empty_squares():
        if letter == 'O':
            square = o_player.get_move(thegame)
        else:
            square = x_player.get_move(thegame)

        #now we define function to make a move
        if thegame.make_move(square, letter):
            if print_game:
                print(letter + f' makes a move to square {square}')
                thegame.print_board()       #want to see the updated board
                print('')

            if thegame.current_winner:
                if print_game:
                    print(letter + ' wins!')
                return letter


            letter = 'O' if letter == 'X' else 'X'

        time.sleep(1.2)

    if print_game:
            print('It\'s a tie!')

if __name__ == '__main__':
    x_spelare = HumanPlayer('X')
    o_spelare = RandomComputerPlayer('O')
    t = TicTacToe()
    play(t, x_spelare, o_spelare, print_game=True)





