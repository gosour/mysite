import os

import webapp2
import jinja2
import json

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

class MainPage(BaseHandler):
	def get(self):
		self.render('home.html')

class AboutPage(BaseHandler):
    def get(self):
        self.render('about.html')

class ContactPage(BaseHandler):
    def get(self):
        self.render('contact.html')

class BlogPage(BaseHandler):
    def get(self):
        self.render('blog.html')

class NoPage(BaseHandler):
    def get(self):
        self.write('This is a 404 page')


app = webapp2.WSGIApplication([ ('/',MainPage), 
                                ('/about',AboutPage), 
                                ('/contact',ContactPage), 
                                ('/blog',BlogPage),
                                ('/.*',NoPage)
							  ],
								debug=True)

