import os

#creating base directory
basedir = os.path.abspath(os.path.dirname(__file__))


#cross origin response certificate configuration
CORS_HEADERS = 'Content-Type'

#SQL DB configuratiosn
MYSQL_HOST = "localhost"
MYSQL_USER = "root"
MYSQL_PASSWORD = 'password'
MYSQL_DB = "GlenDB"


#mail sending configuration
MAIL_SERVER ='smtp.gmail.com'
MAIL_PORT = 465
MAIL_USERNAME = 'glenburnfinetea@gmail.com'
MAIL_PASSWORD = 'glenburn1'
MAIL_USE_TLS = False
MAIL_USE_SSL = True

