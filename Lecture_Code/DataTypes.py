# Integer
myNum = 10

# strings
myString = "Hello World"

# Booleans
istired = True # False

# List -> JS arrays
#         0,1,2,3,4
myList = [9,8,7,6,5]
newNum = myList[1]

# Dictionarys
myDict = { "First_Name": "Jim", "last_name": "Reeder" }
myDict["age"] = 40 # add to the dictionary
myDict["First_Name"] = "John" # update the dictionary
myName = myDict["First_Name"] # reference the dictionary
myDict["numlist"] = myList

print(myDict)
print(myDict["numlist"][2])

# Tubles
my_tuple = ("username", "password")

# STRING FORMATTING
f_name = "Lauren"
l_name = "O"
age = 28

my_string1 = "Hello my name is Lauren O and i am 28 years old" # non dynamic

my_string2 = f"Hello my name is {f_name} {l_name}, and i am {age} years old!!"


print(my_string2)
f_name = "John"
l_name = "doe"
age= 40
my_string2 = f"Hello my name is {f_name} {l_name}, and i am {age} years old!!"
print(my_string2)


# CONDITIONALS
# if | else | elif , and, or  -> && || operators == <= >= != 
num_5 = 15
num_6 = 5
if num_5 != 5 and num_6 != 5:
    print("its not equal")
elif num_5 == 15:
    print("this is true")
else:
    print("this makes no sense")

# LOOPS
# for(let i = 0; i<10; i++){ 
#   console.log(i)
# }

# range(end)
# range(start, end)
# range(start, end, increment)

for i in range(10):
    print(i)

print("*"*50)

for i in range(1,10):
    print(i)

print("*"*50)

for bananas in range(10,0, -2):
    print(bananas)

print("*"*50)

name_list = ["Jane", "John", "Jack"]
for i in range(len(name_list)):
    print(name_list[i])

print("*"*50)

for name in name_list:
    print(name)


i = 0
while i < 10:
    print(i);
    i += 1
