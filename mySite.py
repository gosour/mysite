import os
import webapp2
import jinja2
import json
from google.appengine.ext import db
from google.appengine.api import users

template_dir = os.path.join(os.path.dirname(__file__),'templates')
jinja_env = jinja2.Environment(loader = jinja2.FileSystemLoader(template_dir),
                                autoescape = True)


class BaseHandler(webapp2.RequestHandler):
    def render_str(self,template, **params):
        t = jinja_env.get_template(template)
        return t.render(params)
    def render(self,template,**kw):
        self.response.write(self.render_str(template, **kw))
    def write(self,*a,**kw):
        self.response.write(*a, **kw)

class Blog(db.Model):
    subject = db.StringProperty(required=True)
    content = db.TextProperty(required=True)
    created = db.DateProperty(auto_now_add = True)


class MainPage(BaseHandler):
    def get(self):
        blogs = db.GqlQuery('SELECT * FROM Blog ORDER BY created DESC LIMIT 1')
        self.render("home.html",blogs = blogs)

class AboutPage(BaseHandler):
    def get(self):
        self.render('about.html')

class ContactPage(BaseHandler):
    def get(self):
        self.render('contact.html')

class CollectionPage(BaseHandler):
    def get(self):
        blogs = db.GqlQuery('SELECT * FROM Blog ORDER BY created DESC')
        self.render('blog.html',blogs = blogs)

class NoPage(BaseHandler):
    def get(self):
        self.render('404.html')

class Signin(BaseHandler):

    def get(self):
        user = users.get_current_user()

        subject = self.request.get('subject')
        content = self.request.get('content')

        if user:
           greeting = ("Welcome, %s! (<a href=\"%s\">sign out</a>)" %
                        (user.nickname(), users.create_logout_url("/")))

        else:
            greeting = ("<a href=\"%s\">Sign in or register</a>." %
                        users.create_login_url("/"))

        self.response.out.write("<html><body>%s</body></html>" % greeting)


class Permlink(BaseHandler):
    def get(self,blog_id): #if parentheses in url matcher 
        s = Blog.get_by_id(int(blog_id))
        if not s:
            self.write('/404')
            return

        self.render('blogpost.html',blog = s)


app = webapp2.WSGIApplication([ ('/',MainPage), 
                                ('/contact',ContactPage), 
                                ('/about',AboutPage), 
                                ('/collection',CollectionPage),
                                ('/essay/(\d)+',Permlink),
                                ('/signin',Signin),
                                ('/404',NoPage),
                                ('/.*',NoPage),
							  ],
								debug=True)

