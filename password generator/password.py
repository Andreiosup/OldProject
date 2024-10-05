import string
import random
import math

chars=string.ascii_letters+string.digits+string.punctuation

while True:
    length=int(input('Write the length of password \n'))

    password=""

    for i in range(0,length):
        randomNum=math.floor(random.random()*len(chars))
        char =chars[randomNum]
        password+=char

    print(password)
