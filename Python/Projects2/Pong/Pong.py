import turtle           #let's you do some basic graphics
import winsound         #specific module for windows to insert sound


print(dir(winsound))
wn = turtle.Screen()
wn.title('Pong by Mr.Nikolic')
wn.bgcolor('blue')
wn.setup(width=1000, height=800)
wn.tracer(0)                #stops the window from updating automatically.

# Score
score_a = 0
score_b = 0


# Paddle A
paddle_a = turtle.Turtle()
paddle_a.speed(0)
paddle_a.shape('square')
paddle_a.color("white")
paddle_a.shapesize(5, 1)
paddle_a.penup()                    #Erases the "draw the line while moving"
paddle_a.goto(-450, 0)              #Start position


# Paddle B
paddle_b = turtle.Turtle()
paddle_b.speed(0)
paddle_b.shape('square')
paddle_b.color("white")
paddle_b.shapesize(5, 1)
paddle_b.penup()
paddle_b.goto(450, 0)

# Ball
ball = turtle.Turtle()
ball.speed(0)
ball.shape('square')
ball.color("white")
ball.shapesize(1,1)             #Means 20p x 20p
ball.penup()
ball.goto(0, 0)


ball.dx = 0.2
ball.dy = 0.2

# Pen (a pen that changes the score)
pen = turtle.Turtle()
pen.speed(0)
pen.color('white')
pen.penup()
pen.hideturtle()            #hides the pen
pen.goto(0, 360)
pen.write('Player A: 0    Player B: 0', align="center", font=('Arial', 24, 'bold'))


# Function
def paddle_a_up():
    y = paddle_a.ycor()             #Returns the y-coordinate
    y += 20
    paddle_a.sety(y)                #Moves the y 20 pixels up

def paddle_a_down():
    y = paddle_a.ycor()
    y += -20
    paddle_a.sety(y)

def paddle_b_up():
    y = paddle_b.ycor()
    y += 20
    paddle_b.sety(y)

def paddle_b_down():
    y = paddle_b.ycor()
    y += -20
    paddle_b.sety(y)


# Calling the function
wn.listen()                         #listens for inputs/arguments
wn.onkeypress(paddle_a_up, "w")   #calls the function when the "w" is pressed in the keyboard
wn.onkeypress(paddle_a_down, "s")
wn.onkeypress(paddle_b_up, "Up")
wn.onkeypress(paddle_b_down, "Down")

#Main game loop
while True:
    wn.update()         #updates the screen every time the loop runs back.

    #Move the ball
    ball.setx(ball.xcor() + ball.dx)
    ball.sety(ball.ycor() + ball.dy)

    #Border checking
    if ball.ycor() >= 390:
        ball.dy *= -1
        winsound.PlaySound('bounce.wav', winsound.SND_ASYNC)        #Adding sound

    if ball.ycor() < -390:
        ball.sety(-390)
        ball.dy *= -1
        winsound.PlaySound('bounce.wav', winsound.SND_ASYNC)

    if ball.xcor() > 510:
        ball.goto(0, 0)             #Same as ball.setx(0) and ball.sety(0)
        ball.dx *= -1
        score_a += 1
        pen.clear()
        pen.write(f'Player A: {score_a}    Player B: {score_b}', align="center", font=('Arial', 24, 'bold'))


    if ball.xcor() < -510:
        ball.goto(0,0)
        ball.dx *= -1
        score_b += 1
        pen.clear()
        pen.write(f'Player A: {score_a}    Player B: {score_b}', align="center", font=('Arial', 24, 'bold'))

    #Paddle and ball contact
    if (ball.xcor() > 430 and ball.xcor() < 431) and (ball.ycor() < paddle_b.ycor() + 60 and ball.ycor() > paddle_b.ycor() - 60):       #Need between 430 and 431, otherwise it could bounce back after the paddle
        ball.setx(430)
        ball.dx *= -1
        winsound.PlaySound('bounce.wav', winsound.SND_ASYNC)

    if (ball.xcor() < -430 and ball.xcor() > -431) and (ball.ycor() < paddle_a.ycor() + 60 and ball.ycor() > paddle_a.ycor() - 60):
        ball.setx(-430)
        ball.dx *= -1
        winsound.PlaySound('bounce.wav', winsound.SND_ASYNC)

    # Winner
    if score_a == 5:
        winner_a = turtle.Turtle()
        winner_a.speed(0)
        winner_a.color('white')
        winner_a.penup()
        winner_a.hideturtle()
        winner_a.goto(0, -360)
        winner_a.write('Player A won!', align='center', font=('Arial', 24, 'normal'))
        ball.hideturtle()
        ball.dx = 0
        ball.dy = 0

    if score_b == 5:
        winner_b = turtle.Turtle()
        winner_b.speed(0)
        winner_b.color('white')
        winner_b.penup()
        winner_b.hideturtle()
        winner_b.goto(0, -360)
        winner_b.write('Player B won!', align='center', font=('Arial', 24, 'normal'))
        ball.hideturtle()
        ball.dx = 0
        ball.dy = 0
