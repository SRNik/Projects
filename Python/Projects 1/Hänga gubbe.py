
import random
from ord import ord #Used to retrieve the whole list from the file. From module import list
import string

def get_valid_word(ordet):            #Notera! "Ordet" är enbart input, inte självaste listan
    word = random.choice(ordet)
    while '-' in word or ' ' in word:
        word = random.choice(ordet)

    return word.upper()             #Vi vill att ordet ska vara i versaler

def hangman():  # Now the real game is created  # Need to 1. Keep track of the letters we guessed and Which letters in the word we have correctly guessed 2.Keep track of what is a valid letter and what is not
    word = get_valid_word(ord)
    word_letters = set(word)
    alphabet = set(string.ascii_uppercase)
    used_letters = set()                #Keeping track of what the user has guessed (all guessings).



    lives = 8

#Notice the difference between used_letters and user_letter! Prior is for saving guessed letters, latter is for retrieving the guess
    while len(word_letters) > 0 and lives > 0:                            # Loop until the word has been guessed correctly
        print('You have used these letters: ', ' '.join(used_letters))

        #What is the current correctly guessed letters (i.e. H - L L - )
        word_list = [letter if letter in used_letters else '-' for letter in word]   #Will contain the correctly guessed letter or '-'.
        print(f'Current word: ', ' '.join(word_list))


        #Regarding correctly guesed letters
        user_letter = input('Guess a letter: ').upper()         #Getting user input and saving it in the set.
        if user_letter in alphabet - used_letters:
            used_letters.add(user_letter)
            if user_letter in word_letters:                     #If the letter is correct, then remove it from the word_letters
                word_letters.remove(user_letter)
            else:
                lives -= 1
                print(f'Letter is not in the word. You have {lives} lives left')

        elif user_letter in used_letters:
            print('You have already guessed this before. Please try again')

        else:
            print('Invalid character. Please use a letter')

    #Gets here (ends) when len(word_letters) == 0 OR when lives == 0
    if lives == 0:
        print(f'You died, sorry. The word was {word}')
    else:
        print(f'Hurray! You guessed the right word, {word}')

hangman()

# Could validate so that only alphabetical characters are allowed
