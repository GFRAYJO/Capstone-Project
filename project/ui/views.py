from django.shortcuts import render

def index(request):
    return render(request, 'ui/public/index.html')