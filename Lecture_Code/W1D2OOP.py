from datetime import date

#oOOP
# DEFINE THE CLASS FIRST

# keyword | Name of the class | :
from re import U


class Person:
    # ATTRIBUTES (CHARACTERISTICS)
    def __init__(self, name, age, hair_color):
        print("Hello World... a new person is born!!")
        self.full_name = name
        self.age = age
        self.hair_col = hair_color

    # METHODS
    def introduction(self):
        print(f'Hello my name is {self.full_name} and I am {self.age} years old!!')

    def birthday(self):
        self.age +=1
        print("Yaaayyyy its my birfday!!!")

    def barbershop(self, color):
        self.hair_col = color

    # CLASS METHODS
    @classmethod
    def from_birth_year(cls, name, birthyear, hair_color):
        return cls(name, date.today().year - birthyear, hair_color)
        # Person(name, age, hair_color)

    # STATIC METHODS
    @staticmethod
    def is_adult(age):
        return age>18

        
    


# INSTANTIATE THE CLASS
user1 = Person("Danniel C", 32, "Black")
user2 = Person("John C", 24, "Black")

user3 = Person.from_birth_year("Victoria A", 1990, "Brown")

print(user1.full_name) # <------
print(user2.full_name)



user1.introduction()
user2.introduction()

print(user1.age)
user1.birthday()
print(user1.age)

print(user3.age)
print(user3.introduction())

print(user1.is_adult(12))
print(Person.is_adult(55))


