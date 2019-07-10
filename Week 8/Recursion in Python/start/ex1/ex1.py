def sum(list, current_index):
    if len(list) <= current_index:
        return 0
    return sum(list, current_index+1)+list[current_index]


print(sum([1, 2, 3, 4, 5], 0))

# assert(sum([1, 2, 3, 4, 5], 0) == 15)
# assert (sum([], 0) == 0)
# assert (sum([11], 0) == 0)
# assert(sum([11, 0], 0) == 0)
# assert(sum([11, -1], 0) == 10)
