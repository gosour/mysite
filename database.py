from google.appengine.ext import db

class Blog(db.Model):
    subject = db.StringProperty(required=True)
    content = db.TextProperty(required=True)
    created = db.DateProperty(auto_now_add = True)

class User(db.Model):
	username = db.StringProperty(required=True)
	password = db.StringProperty(required=True)
	
