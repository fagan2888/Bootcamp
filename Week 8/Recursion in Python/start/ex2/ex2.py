def max(list):
    if len(list) <= 1:
        return list[0]
    else:
        m = max(list[1:])
    return m if m > list[0] else list[0]


print(max([1, 2, 3, 3, 429, 2]))
