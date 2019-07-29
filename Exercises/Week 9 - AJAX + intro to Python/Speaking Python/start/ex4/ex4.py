def position_vowels(quote, vowels):
    return[i for i in range(len(quote)) if quote[i] in vowels]


quote = "some people drink from the fountain of knowledge, others just gargle."
VOWELS = "aeiou"
print(position_vowels(quote, VOWELS))
# print(position_vowel_test(quote, VOWELS))
