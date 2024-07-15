from django.shortcuts import render,redirect
from django.contrib.auth import login
from . import forms


def home(request):
    return render(request,'main/index.html')

# services
def internet_connectivity(request):
    return render(request, 'main/services/internetconnectivity.html')
def software_dev(request):
    return render(request, 'main/services/softwaredev.html')
def cybercafe(request):
    return render(request,'main/services/cybercafe.html')
def importexport(request):
    return render(request, 'main/services/importandexport.html')
def real_estate(request):
    return render(request,'main/services/realestate.html')
def fire(request):
    return render(request, 'main/services/fireandsafety.html')

def signup(request):
    if request.method == 'POST':
        form = forms.RegisterForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request,user)
            return redirect('/home')
    else:
        form = forms.RegisterForm()
    
    return render(request,'registration/sign_up.html',{'form':form})
        