
rect1_len = 20
rect1_height = 30

rect2_len = 15
rect2_height = 55

class Rectangle:
    def __init__(self, l, w):
        print("a new rectangle is with us!!!")
        self.length = l
        self.width = w

    def area(self):
        area_calc = self.length * self.width
        print(area_calc)
        return area_calc

rect1 = Rectangle(15, 25)
rect2 = Rectangle(100, 100)
rect1.area()
rect2.area()