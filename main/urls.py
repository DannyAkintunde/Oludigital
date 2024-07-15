from django.urls import path,include
from . import views

app_name = 'main'
urlpatterns = [
    path('',views.home,name='home'),
    path('services/', include([
        path('internet/', views.internet_connectivity, name='internet'),
        path('software/', views.software_dev, name='software'),
        path('cybercafe/', views.cybercafe, name='cybercafe'),
        path('importandexport/', views.importexport, name='importexport'),
        path('realestate/', views.real_estate, name='realestate'),
        path('fire', views.fire, name='fire')
    ])),
    path('sign-up',views.signup, name='signup'),
]