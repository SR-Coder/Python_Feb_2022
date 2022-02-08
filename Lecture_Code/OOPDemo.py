
rect1_len = 20
rect1_height = 30
rect1_area = rect1_height*rect1_len

rect2_len = 15
rect2_height = 55
rect2_area = rect2_len*rect2_height



class Rectangle:
    def __init__(self, l=10, w=20):
        print("a new rectangle is with us!!!")
        self.length = l
        self.width = w

    def area(self):
        area_calc = self.length * self.width
        print(area_calc)
        return area_calc





rect1 = Rectangle(15, 25)
rect2 = Rectangle(100, 100)
rect3 = Rectangle()

rect1.area()
rect1.length = 10
rect1.width = 20
rect1.area()
rect2.area()