
from functools import reduce


def analyze_number_digits():
    five_digit = input("Please enter a five-digit number: ")
    print(f"your entered the number: {five_digit}")
    print(f"The digits of this number are: {','.join(str(five_digit))}")
    print(
        f"the sum of digits is: {reduce(lambda x,y: int(x)+int(y),list(five_digit))}")


analyze_number_digits()
