# Number Guessing Game

A web-based Number Guessing Game where the computer picks a random number between 1 and 100, and the player gets instant feedback ("too high", "too low", or "correct") with attempt tracking.

---

## How I Built This and What I Got Stuck On

I built this number guessing game by first understanding the requirements and then breaking the problem into smaller steps. I started by generating a random number between 1 and 100, then added a loop so the player could make up to five guesses. After each guess, the program checks whether the number is too high, too low, or correct, and keeps track of the number of attempts. While working on the program, I got confused with the loop and accidentally repeated part of the code, which caused the game to display the wrong message after the guesses were finished. After testing the program and reviewing my code, I fixed the loop, counted the attempts correctly, and made sure the game stopped as soon as the player guessed the correct number.

---

## Python Code Solution

```python
import random

# Generate a random number between 1 and 100
secret_number = random.randint(1, 100)
max_guesses = 5
attempts = 0

print("Welcome to the Guess the Number game!")
print(f"Guess the number between 1 and 100. You have {max_guesses} attempts.")

while attempts < max_guesses:
    try:
        guess = int(input("Enter your guess: "))
    except ValueError:
        print("Please enter a valid number.")
        continue

    attempts += 1

    if guess < secret_number:
        print("Try a higher number.")
    elif guess > secret_number:
        print("Try a lower number.")
    else:
        print(f"Congratulations! You guessed the number {secret_number} in {attempts} attempts.")
        break
else:
    print(f"Sorry, you've reached the maximum number of attempts. The secret number was {secret_number}.")
```
