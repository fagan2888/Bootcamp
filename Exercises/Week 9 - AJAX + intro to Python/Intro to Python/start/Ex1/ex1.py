for i in range(1, 41):
    print(i)


num = 1
while num <= 40:
    print(num)
    num = num+1

for i in range(1, 101):
    if i % 3 == 0 and i % 5 == 0:
        print("FizzBuzz")
    elif i % 3 == 0:
        print("Fizz")
    elif i % 5 == 0:
        print("Buzz")
    else:
        print(i)
