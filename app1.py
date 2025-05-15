from flask import Flask, render_template, request, redirect, url_for, session
import pymysql

app = Flask(__name__)
app.secret_key = 'skibidisecretkey'

# Database connection
def get_db_connection(): 
    return pymysql.connect(
        host='10.2.3.93', 
        user='mgl_user',  # User, gave it only neccesairy perms in mariadb
        password='123',
        database='mygamelistsdb'
    )

# Routes
@app.route('/') # When someone visits the root url the index page will be rendered
def index():
    return render_template('index.html')

@app.route('/register', methods=['GET', 'POST']) # When someone visits the register url the register page will be loaded
def register():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        
        conn = get_db_connection()
        cursor = conn.cursor()
        
        cursor.execute('INSERT INTO users (username, password) VALUES (%s, %s)', 
                      (username, password))
        conn.commit() # Commit the changes to the database
        conn.close() # Close the connection
        return redirect(url_for('login'))
    
    # This return is for GET requests
    return render_template('register.html')

@app.route('/login', methods=['GET', 'POST']) # When someone visits the login url the login page will be loaded
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        
        conn = get_db_connection()
        cursor = conn.cursor()
        # Check if user exists
        cursor.execute('SELECT * FROM users WHERE username = %s AND password = %s', # Check if user exists %s is a placeholder
                      (username, password))
        user = cursor.fetchone() # Fetch the user from the database
        conn.close()
        
        if user: # If the user fech is not empty then the user is logged in and sent to the index page.
            session['logged_in'] = True
            session['username'] = username
            return redirect(url_for('index')) 
        
    # If the user was not logged in the login page reloads
    return render_template('login.html')

@app.route('/logout') # When someone visits the logout url they are logged out and sent to the index page
def logout():
    session.clear() # Clear the session / Logs you out
    return redirect(url_for('index'))

@app.route('/game-details')
def game_details():
    return render_template('GameDetails.html')

@app.route('/list')
def list():
    return render_template('list.html')

@app.route('/guides')
def guides():
    return render_template('guides.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/support')
def support():
    return render_template('support.html')

@app.route('/terms')
def terms():
    return render_template('terms.html')

@app.route('/privacy')
def privacy():
    return render_template('privacy.html')

@app.route('/cookies')
def cookies():
    return render_template('cookies.html')

if __name__ == '__main__':
    app.run(debug=True)