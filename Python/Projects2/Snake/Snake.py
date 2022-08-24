import pygame
from pygame.locals import *         #Gives global variables
import time
import random


class Apple:
    def __init__(self, applescreen):
        self.apple = pygame.image.load('resources/apple.jpg')
        self.applescreen = applescreen
        self.apple_x = 440
        self.apple_y = 440

    def ap_draw(self):
        self.applescreen.blit(self.apple, (self.apple_x, self.apple_y))
        pygame.display.update()

    def move(self):
        self.apple_x = random.randint(0, 29)*40
        self.apple_y = random.randint(0,19)*40

size=200
class Snake:
    def __init__(self, snakescreen, length):
        self.snakescreen = snakescreen
        self.block = pygame.image.load('resources/block.jpg')
        self.block_x = [size]*length                                    #Initializes an empty list with the size of length (length = snake length)
        self.block_y = [size]*length
        self.length = length
        self.direction = 'Up'

    def increase_length(self):                                      #Method which makes the snake longer with 1 block
        self.length += 1
        self.block_x.append(3)
        self.block_y.append(3)

    def draw(self):
        self.snakescreen.fill((86,242,245))                                 #Recoloring the screen
        for i in range(self.length):
            self.snakescreen.blit(self.block, (self.block_x[i], self.block_y[i]))  # Placing the block on the surface.
        pygame.display.update()

    def move_up(self):
        self.direction = 'Up'

    def move_down(self):
        self.direction = 'Down'

    def move_right(self):
        self.direction = 'Right'

    def move_left(self):
        self.direction = 'Left'


    def automove(self):

        for i in range(self.length-1,0,-1):
            self.block_x[i] = self.block_x[i-1]
            self.block_y[i] = self.block_y[i-1]

        if self.direction == 'Up':
            self.block_y[0] -= 40                            #First block position. Snake's head
        if self.direction == 'Down':
            self.block_y[0] += 40
        if self.direction == 'Right':
            self.block_x[0] += 40
        if self.direction == 'Left':
            self.block_x[0] -= 40

        self.draw()             #calling the method in snake class


class Game:
    def __init__(self):
        pygame.init()               # Initiating the pygame module. Needed so that you do not need to call the module every time
        self.surface = pygame.display.set_mode((1200, 800))     #Initializing and creating your game window

        pygame.mixer.init()                                     #Initialising the mixer module which contains sound tools
        self.play_bg_music()
        self.surface.fill((86,242,245))
        self.snake = Snake(self.surface, 2)
        self.snake.draw()
        self.apple = Apple(self.surface)


    def is_collision(self, x1,y1, x2, y2):          #index 1 = snake, index 2 = apple. X och y position for apple and snake.
        if x1 == x2 and x1 <= x2 + 40:
            if y1 == y2 and y1 <= y2 + 40:
                return True

        return False

    def play_bg_music(self):
        pygame.mixer.music.load('resources/bg_music_1.mp3')
        pygame.mixer.music.play()



    def play_sound(self, sound):               #all the sound effects
        sound = pygame.mixer.Sound(f'resources/{sound}')
        pygame.mixer.Sound.play(sound)


    def play(self):                 #Does all the drawing.
        self.snake.automove()
        self.apple.ap_draw()
        self.display_score()

        #snake eating apple
        if self.is_collision(self.snake.block_x[0], self.snake.block_y[0], self.apple.apple_x,self.apple.apple_y):        #Only care about snake's head
            self.play_sound('ding.mp3')
            self.apple.move()
            self.snake.increase_length()

        #snake colliding with itself
        for i in range( 1, self.snake.length):
            if self.is_collision(self.snake.block_x[0], self.snake.block_y[0], self.snake.block_x[i],self.snake.block_y[i]):
                 raise "Game Over"

        #snake moving out of frame
        if self.snake.block_x[0] < 0 or self.snake.block_x[0] > 1160 or self.snake.block_y[0] < 0 or self.snake.block_y[0] > 760:
            raise "Game Over"

    def show_game_over(self):                   #showing text in the middle saying "Game over" and "To play again..."
        self.surface.fill((86,242,245))
        font1 = pygame.font.SysFont('Arial', 80, 'b')
        line1 = font1.render(f'Game Over! Score: {self.snake.length}', True, (255,255,255))
        self.surface.blit(line1, (220,350))
        font2 = pygame.font.SysFont('Arial', 50, 'b')
        line2 = font2.render(f'To play again press Enter. To exit press Escape!', True , (255,255,255))
        self.surface.blit(line2, (50,500))
        pygame.display.update()

        pygame.mixer.music.pause()               #stops bg music when losing


    def display_score(self):
        font = pygame.font.SysFont('Arial', 30, 'b')
        score = font.render(f'Score: {self.snake.length}', True, (255,255,255))
        self.surface.blit(score, (550,20))
        pygame.display.update()                                             #need to update the screen so that the score is visible

    def reset(self):
        self.snake = Snake(self.surface, 2)
        self.apple = Apple(self.surface)

    def run(self):
        # event loop = waiting for user input
        running = True

        pause = False

        while running:
            for event in pygame.event.get():  # This gives you all kind of events from keyboard and mouse. E.g. press "esc" etc.
                if event.type == KEYDOWN:  # Pressing any key
                    if event.key == K_ESCAPE:
                        running = False
                    if event.key == K_RETURN:
                        pygame.mixer.music.unpause()
                        pause = False

                    if not pause:
                        if event.key == K_UP:
                            self.snake.move_up()
                        if event.key == K_DOWN:
                            self.snake.move_down()

                        if event.key == K_RIGHT:
                            self.snake.move_right()
                        if event.key == K_LEFT:
                            self.snake.move_left()

                elif event.type == QUIT:  # If you quit the window by clicking "x"
                    running = False


            try:
                if not pause:
                    self.play()
            except Exception as e:
                self.play_sound('GameOver.wav')
                self.show_game_over()
                self.reset()
                pause = True                        #Pause is changed only if the player loses


            time.sleep(0.2)



#Stationära delen av spelet. Måste skapa en första "bild"
if __name__ == "__main__":           #Used to start the whole script
    game = Game()
    game.run()








