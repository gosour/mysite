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


class BlogPost(BaseHandler):
    def blogpostrender(self,error = "", subject = "", content = ""):
        self.render('newpost.html',error = error, subject = subject, content = content)
    def get(self):
        self.blogpostrender()
    def post(self):
        subject = self.request.get('subject')
        content = self.request.get('content')
        if subject and content:
            content = content.replace('\n','<br>')
            b = Blog(subject = subject, content = content)
            b_key = b.put() # key('Blog',id)
            self.redirect('/blog/%d' %b_key.id())
        else:
            error = "Subject and Content both required"
            self.blogpostrender(error=error,subject= subject, content = content)



app = webapp2.WSGIApplication([ ('/admin/.*',BlogPost), 
							  ],
								debug=True)

