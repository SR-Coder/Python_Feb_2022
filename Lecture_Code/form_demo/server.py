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

    if "s_name" and "s_email" in session:
        return redirect('/user/success')

    return render_template('index.html')

@app.route('/user/success')
def disp_dashboard():

    if "s_name" and "s_email" not in session:
        return redirect('/register')


    return render_template("success.html", f_name=session["s_name"])

@app.route('/number')
def disp_num():
    if 'count' not in session:
        session['count'] = 1
    session['count'] += 1

    # if 'count' in session:
    #     session['count'] += 1
    # else:
    #     session['count'] = 1

    return render_template('number.html', count=session['count'])


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