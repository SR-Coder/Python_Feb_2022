from flask import Flask
app = Flask(__name__)
app.secret_key = "hey, dont look its a secret"