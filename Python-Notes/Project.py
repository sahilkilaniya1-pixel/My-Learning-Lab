# 1.:: pip aur External Libraries
# Python ke pass hazaaron ready-made packages hain jo doosre developers ne banaye hain. Inhe install karne k liye hum terminal/command Prompt(cmd) mein pip tool ka use karte hain.

# Terminal ya Command Prompt mein aise install karte hain:
# pip install requests

# 2. Live data Internet se Mangwana (Requests)
# python ke request module se hum kisi bhi websites ya API se live internet data la sakte hain(jaise live Weather, crypto prices, News).
import requests

# Live API de data mangwana
response = requests.get("https://api.github.com")
# Status code 200 ka matlab hota hain success!
if response.status_code == 200:
    print("Internet connection successful! ")