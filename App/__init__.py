from flask import Flask
from flask_mysqldb import MySQL
from flask_cors import CORS
from flask_mail import Mail

#initializing app
app = Flask(__name__)

#cross origin response certificate configuration
app.config['CORS_HEADERS'] = 'Content-Type'

#SQL DB configuratiosn
app.config['MYSQL_HOST'] = "localhost"
app.config['MYSQL_USER'] = "root"
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = "GlenDB"


#mail sending configuration
app.config['MAIL_SERVER'] ='smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = ''
app.config['MAIL_PASSWORD'] = ''
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True


#initializing db
mysql = MySQL(app)

#initializing CORS
cors = CORS(app)


#initializing mail service
mail = Mail(app)

#importing views
from App import DailyReport, Email, Factory, Field, Upload
