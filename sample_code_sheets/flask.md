# FLASK CHEAT SHEET

---

## SET UP A Flask project
- to set up a flask project do the following
1. make a directory
1. install virtual environment
    - `C:\$ pipenv shell`
    - install flask : `pipenv install flask`
1.  create a flask file
1. check out the code below

```py
from flask import Flask
app = Flask(__name__)

@app.route('/')
def helloWorld():
    return "Hello World"

if __name__ == '__main__':
    app.run(debug=True)
```

---

## How to add render templates