# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-5(297mf8ytvh=av*48^nq4h&*wq4!j!o+jg0czayf8hn=x^-j5'

# Database
# https://docs.djangoproject.com/en/4.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'youtubeClone_frontend',
        'HOST': 'localhost',
        'USER': 'root',
        'PASSWORD': 'password',

    }
}
