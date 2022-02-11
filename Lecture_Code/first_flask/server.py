from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')  # this is what is typed in the the browser http://localhost:5000/
def hello_world():
    print("a request came in on '/' !!!")
    return "Hello World"

@app.route("/say_hello")
def say_hello():
    print("sososososos")
    return 'Hello Friend thanks for stopping by!!'

@app.route("/say_hello/jim")
def say_hello_jim():
    print("inside the 'say_hello/jim' method")
    return ''

@app.route("/say_hello/<string:name>")
def say_hello_to(name):
    return f'Hello {name} Thanks for stopping by!!'

@app.route("/say_hello/<string:name>/<int:age>")
def say_hello_to_age(name, age):
    return f'Hello {name} Thanks for stopping by!!i am {age} years old!!!'

@app.route("/test_template")
def test_template():
    return render_template("index.html")



if __name__ == "__main__":
    app.run(debug=True)


