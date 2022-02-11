from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = "My very secret key"

@app.route('/')
def index():
    return 'Yay i made something work!!'

# display route
#---------------------------------------
@app.route('/register')
def disp_register():
    return render_template('index.html')

@app.route('/user/success')
def disp_dashboard():
    return render_template("success.html", f_name=session["s_name"])

# action routes
#-----------------------------------
@app.route("/user/create", methods=["POST"])
def create_user():
    print(request.form)
    session["s_name"] = request.form["full_name"]
    session["s_email"] = request.form["email"]
    return redirect('/user/success')

@app.route('/user/logout')
def logout():
    session.clear();
    # del session['s_name']
    # del session['s_email']
    return redirect('/register')

if __name__=="__main__":
    app.run(debug=True)