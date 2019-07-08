

def analyze_number_digits():
    five_digit = int(input("Please enter a five-digit number: "))
    print(f"your entered the number: {five_digit}")
    print(f"The digits of this number are: {','.join(str(five_digit))}")
    print(
        f"the sum of digits is: {int(str(five_digit)[0])+int(str(five_digit)[1])+int(str(five_digit)[2])+int(str(five_digit)[3])+int(str(five_digit)[4])+int(str(five_digit)[5])}")


analyze_number_digits()
