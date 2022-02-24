
# what does the data base return Select??????

# what is request.forms data type?
# is a dictionary
request_from = {
    "id":2,
    "first_name": 'John',
    "email": "j@d.com",
}


# SELECT * FROM users JOIN recipie on users.id = recipie.user_id;
# SELECT * FROM recipies JOIN users on recipie.user_id = users.id;


# Model file

class Recipie():
    def __init__(self, data):
        self.id = data["id"]
        self.name = data["name"]
        

    @classmethod
    def getAllrecipies(cls):
        query = "SELECT * FROM recipes JOIN users on recipe.user_id = users.id;"
        # results = mysqlconnection.querydb(query)
        results = [{"id":1, "name":"bananas", "users_id":1, "first_name":"jane", "email": "j@p.com"},{"id":2, "name":"bread", "users_id":27, "first_name":"Jim", "email": "j@r.com"},{"id":34, "name":"washed apples", "users_id":101, "first_name":"john", "email": "j@d.com"}]

        recipies = []

        for row in results:
            print(row)
            this_recipie = cls(row)
            user_data = {
                "id": row["users_id"],
                "first_name": row["first_name"],
                "email": row["email"]
            }
            this_user = User(user_data)
            this_recipie.creator = this_user;

            recipies.append(this_recipie)
            print(this_recipie)
        
        print(recipies)


class User:
    def __init__(self, data):
        self.id = data["id"]
        self.first_name = data["first_name"]
        self.email = data["email"]

    @classmethod
    def addNewUser(cls, data):
        new_user = cls(data)


    @classmethod
    def get_one_user(cls):
        query = "SELECT * FROM users JOIN recipie on users.id = recipie.users_id WHERE users.id = 1;"
        # results = mysqlconnection .querydb(query) --> returns a list of dictionarys
        
        results = [{"id":1, "first_name":"jane", "email":"j@p.com", "recipie_id": 1, "name": "bananas"},{"id":1, "first_name":"jane", "email":"j@p.com", "recipie_id": 2, "name": "bread"},{"id":1, "first_name":"jane", "email":"j@p.com", "recipie_id": 34, "name": "washed apples"}]

        this_user = cls(results[0]) # this turns the first entry in the list into a user object
        print("this is the object -->", this_user)

        this_user.recipies = []

        print(this_user.recipies)

        for entry in results:
            this_recipie_obj = Recipie(entry)
            this_user.recipies.append(this_recipie_obj)
            print(entry, " turned into a recipie object --> ", this_recipie_obj)

        print("\n *****************************")
        print("ID: ", this_user.id)
        print("First Name: ", this_user.first_name)
        print("Email: ", this_user.email)
        print("Recipies: ", this_user.recipies )
        
        return this_user
            








# controller file

# register method is called by a rourt
# User.get_one_user()

Recipie.getAllrecipies()