from django import forms
from .models.Contact import Contact

class AddForm(forms.Form):
    
    class Meta:
        model = Contact
        fields = ('name', 'relation', 'phone', 'email',)

# class VIewForm(forms.Form):
    
#     class Meta:
#         model = Contact
#         fields = ('name', 'relation', 'phone', 'email',)        
