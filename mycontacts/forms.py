from django import forms
from .models.models import Contact

class AddForm(forms.Form):
    
    class Meta:
        model = Contact
        fields = ('name', 'relation', 'phone', 'email',)

# class VIewForm(forms.Form):
    
#     class Meta:
#         model = Contact
#         fields = ('name', 'relation', 'phone', 'email',)        
