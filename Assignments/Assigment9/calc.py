import random

# global varible
flag_continue_play = True
flag_is_numeric = False
user_name = None
dict_test = {"counter": 0, "counter_correct_answer": 0, "list_of_problems": []}
opertor = ["+", "-", "*", "/"]
acceptable_answers_yes = ["yes", "Yes", "y", "Y"]
acceptable_answers_no = ["no", "n", "N", "No"]


def check_if_number_zero(num):
    if num == 0:
        return True
    return False


def calc(num_1, num_2, op):
    if op[0] is "+":
        return num_1 + num_2
    if op[0] is "-":
        return num_1 - num_2
    if op[0] is "*":
        return num_1 * num_2
    if op[0] is "/":
        while check_if_number_zero(num_2):
            num_2 = rand_num()
            check_if_number_zero(num_2)
        return num_1/num_2


def present_question_to_user(num_1, num_2, opertor):
    print(f"{num_1}{opertor}{num_2} = ?")


def feedback_answer(current_ans, your_answer):
    dict_test["counter"] += 1
    if current_ans == your_answer:
        dict_test["counter_correct_answer"] += 1
        return f"your answer is correct,good job", False
    else:
        return f"your answer is wrong, keep trying", True


def format_wrong_ans(current_ans, your_ans, num_1, num_2, opertor):
    return f"{num_1}{opertor}{num_2} = {your_ans} ({current_ans})"


def summary_report():
    if len(dict_test["list_of_problems"]) > 0:
        print("A list of problems answered wrong: ")
        for index in range(len(dict_test["list_of_problems"])):
            print(dict_test["list_of_problems"][index])
    print(
        f'{user_name} have answered correctly {dict_test["counter_correct_answer"]} out of {dict_test["counter"]} problems ({decimal_float_2_number(precent_sucsess_rate(dict_test["counter_correct_answer"],dict_test["counter"]))}%)'
    )


def precent_sucsess_rate(length_correct_answer, length_total_question):
    if length_correct_answer > 0:
        return length_correct_answer / length_total_question * 100
    else:
        return 0


def decimal_float_2_number(number):
    if isinstance(number, float):
        return '{0:.2f}'.format(number)
    return number


def rand_num():
    return random.randint(0, 10)


def rand_op():
    return random.choice(opertor)


def show_menu_to_user():
    print("Welcome to basic math questionnaire")
    user_name = input("please enter your name: ")
    return user_name


def main():
    global user_name
    global flag_continue_play
    global flag_is_numeric
    user_name = show_menu_to_user()
    while flag_continue_play:
        num_1 = rand_num()
        num_2 = rand_num()
        randon_op = rand_op()
        present_question_to_user(num_1, num_2, randon_op)
        current_answer = calc(num_1, num_2, randon_op)
        print("------------------------------------")
        while flag_is_numeric == False:
            your_ans = input("please enter answer: ")
            try:
                if "." in your_ans:
                    val = float(your_ans)
                    flag_is_numeric = True
                else:
                    val = int(your_ans)
                    flag_is_numeric = True
            except ValueError:
                print("No.. the input string is not a number. It's a string")
        message_to_display_to_user, flag_wrong_ans = feedback_answer(
            current_answer, val)
        print(message_to_display_to_user)
        if flag_wrong_ans:
            current_answer = decimal_float_2_number(current_answer)
            dict_test["list_of_problems"].append(
                format_wrong_ans(current_answer, val, num_1, num_2, randon_op))
        ans_if_contine = input("you want to continue? ")
        while True:
            if ans_if_contine not in acceptable_answers_no + acceptable_answers_yes:
                print(
                    "Acceptable answers are: 'yes', 'no', 'Yes', 'No', 'y', 'n', 'Y', 'N'")
                ans_if_contine = input("please enter acceptable answer: ")
            if ans_if_contine in acceptable_answers_no:
                flag_continue_play = False
                break
            if ans_if_contine in acceptable_answers_yes:
                flag_is_numeric = False
                break
    summary_report()


main()
