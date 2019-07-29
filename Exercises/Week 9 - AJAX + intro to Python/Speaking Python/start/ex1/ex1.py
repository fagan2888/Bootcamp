from functools import reduce


def sum_list(list):
    for elem in list:
        if isinstance(elem, (int, float)):
            return f"you’re only summing the numeric elements ,an you inserting: {elem}"
    return reduce((lambda x, y: x+y), list)


print(sum_list([1, 2, 3, 4, 5]))
