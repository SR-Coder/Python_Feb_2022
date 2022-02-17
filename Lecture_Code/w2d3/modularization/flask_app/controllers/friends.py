from flask import render_template, redirect, request
from flask_app.models.friend import Friend
from flask_app import app


@app.route('/')
def index():
    friends = Friend.get_all()
    print(friends)
    return render_template("index.html", all_friends = Friend.get_all())


@app.route('/create')
def create():
    return render_template("create_user.html")


@app.route('/edit/<int:friend_id>')
def edit_user(friend_id):
    data = {
        "id": friend_id
    }
    return render_template("update_user.html", friend = Friend.get_one(data))


@app.route('/update_user', methods=["POST"])
def update_friend():
    Friend.update(request.form)
    return redirect('/')



@app.route('/save_user', methods=["POST"])
def save_user():
    Friend.create(request.form)
    return redirect('/')